import { createServerFn } from "@tanstack/react-start";
import { setCookie, getCookie } from "@tanstack/react-start/server";

export type Mode = "Online" | "Offline" | "Hybrid";
export type Cost = "Free" | "Paid";
export type Level = "Beginner" | "Intermediate";

export type Category =
  | "Private Universities"
  | "Government Universities"
  | "Corporate Programs"
  | "Investor & Venture Capitalist Programs"
  | "Private Educator Programs"
  | "Other / Unorthodox Programs";

export type NewProgram = {
  title: string;
  institution: string;
  category: Category;
  mode: Mode;
  cost: Cost;
  level: Level;
  eligibility: string;
  duration: string;
  location: string;
  deadline: string;
  fee: string;
  description: string;
  url: string;
  applicationUrl: string;
};

export const CATEGORIES: Category[] = [
  "Private Universities",
  "Government Universities",
  "Corporate Programs",
  "Investor & Venture Capitalist Programs",
  "Private Educator Programs",
  "Other / Unorthodox Programs",
];
export const MODES: Mode[] = ["Online", "Offline", "Hybrid"];
export const COSTS: Cost[] = ["Free", "Paid"];
export const LEVELS: Level[] = ["Beginner", "Intermediate"];

// ---- GitHub repo location of the data file ----
const OWNER = "offsyllabus";
const REPO = "offsyllabus";
const FILE_PATH = "offsyllabus-website-main/src/data/events-workshops.ts";
const BRANCH = "main";

// ---- Auth helpers ----
async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function requireAdmin() {
  const cookie = getCookie("admin_session");
  if (cookie !== "valid") throw new Error("UNAUTHORIZED");
}

export const login = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    const hash = await sha256(data.password);
    const expected = process.env.ADMIN_PASSWORD_HASH;
    if (hash !== expected) return { success: false };
    setCookie("admin_session", "valid", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 8,
    });
    return { success: true };
  });

export const logout = createServerFn({ method: "POST" }).handler(async () => {
  setCookie("admin_session", "", { maxAge: 0 });
  return { success: true };
});

export const checkSession = createServerFn({ method: "GET" }).handler(async () => {
  return { loggedIn: getCookie("admin_session") === "valid" };
});

// ---- The actual "add program" logic: reads the file from GitHub, inserts the new
// program object right after the array opens, and commits the change back. ----
function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 60);
}

function esc(v: string) {
  return v.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function buildProgramSnippet(p: NewProgram, id: string) {
  return `  {
    id: "${id}",
    title: "${esc(p.title)}",
    institution: "${esc(p.institution)}",
    category: "${esc(p.category)}",
    mode: "${p.mode}",
    cost: "${p.cost}",
    level: "${p.level}",
    eligibility: "${esc(p.eligibility)}",
    duration: "${esc(p.duration)}",
    location: "${esc(p.location)}",
    deadline: "${esc(p.deadline)}",
    fee: "${esc(p.fee)}",
    description: "${esc(p.description)}",
    url: "${esc(p.url)}",
    applicationUrl: "${esc(p.applicationUrl)}",
  },
`;
}

export const addProgram = createServerFn({ method: "POST" })
  .inputValidator((data: NewProgram) => data)
  .handler(async ({ data }) => {
    await requireAdmin();

    const token = process.env.GITHUB_TOKEN;
    if (!token) throw new Error("GITHUB_TOKEN not set.");

    const apiUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}?ref=${BRANCH}`;
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    };

    // 1. Get the current file content + sha (needed to commit an update)
    const getRes = await fetch(apiUrl, { headers });
    if (!getRes.ok) throw new Error(`Failed to read file from GitHub: ${getRes.status}`);
    const fileData = (await getRes.json()) as { content: string; sha: string };
    const currentContent = Buffer.from(fileData.content, "base64").toString("utf-8");

    // 2. Insert the new program right after the array opens
    const marker = "export const PROGRAMS: Program[] = [";
    const insertAt = currentContent.indexOf(marker) + marker.length;
    if (insertAt === -1) throw new Error("Could not find PROGRAMS array in file.");

    const id = slugify(data.title) + "-" + Date.now().toString(36);
    const snippet = "\n" + buildProgramSnippet(data, id);
    const updatedContent =
      currentContent.slice(0, insertAt) + snippet + currentContent.slice(insertAt);

    // 3. Commit the change back to GitHub
    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `Add program: ${data.title}`,
        content: Buffer.from(updatedContent, "utf-8").toString("base64"),
        sha: fileData.sha,
        branch: BRANCH,
      }),
    });

    if (!putRes.ok) {
      const err = await putRes.text();
      throw new Error(`Failed to commit to GitHub: ${putRes.status} ${err}`);
    }

    return { success: true, id };
  });