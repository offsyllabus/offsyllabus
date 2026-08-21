import { T as TSS_SERVER_FUNCTION, c as createServerFn, s as setCookie$1, g as getCookie } from "./index.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const OWNER = "offsyllabus";
const REPO = "offsyllabus";
const FILE_PATH = "offsyllabus-website-main/src/data/events-workshops.ts";
const BRANCH = "main";
async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function requireAdmin() {
  const cookie = getCookie("admin_session");
  if (cookie !== "valid") throw new Error("UNAUTHORIZED");
}
const login_createServerFn_handler = createServerRpc({
  id: "8d3b0cfa4e6d9dbbe12091806de8d4b4b28b169ad55c5094547cf7daee43fb48",
  name: "login",
  filename: "src/server/programs-github.ts"
}, (opts) => login.__executeServer(opts));
const login = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(login_createServerFn_handler, async ({
  data
}) => {
  const hash = await sha256(data.password);
  const expected = process.env.ADMIN_PASSWORD_HASH;
  if (hash !== expected) return {
    success: false
  };
  setCookie$1("admin_session", "valid", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 8
  });
  return {
    success: true
  };
});
const logout_createServerFn_handler = createServerRpc({
  id: "32f6941306a0a237d403f76d4a05986b0b2dbfe1d129b00a3512753bf5a4605e",
  name: "logout",
  filename: "src/server/programs-github.ts"
}, (opts) => logout.__executeServer(opts));
const logout = createServerFn({
  method: "POST"
}).handler(logout_createServerFn_handler, async () => {
  setCookie$1("admin_session", "", {
    maxAge: 0
  });
  return {
    success: true
  };
});
const checkSession_createServerFn_handler = createServerRpc({
  id: "1121f04b0fa836a7f1067524d757eb93abe4209197ec8d29b65bbd798cbc4e78",
  name: "checkSession",
  filename: "src/server/programs-github.ts"
}, (opts) => checkSession.__executeServer(opts));
const checkSession = createServerFn({
  method: "GET"
}).handler(checkSession_createServerFn_handler, async () => {
  return {
    loggedIn: getCookie("admin_session") === "valid"
  };
});
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 60);
}
function esc(v) {
  return v.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function buildProgramSnippet(p, id) {
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
const addProgram_createServerFn_handler = createServerRpc({
  id: "4ebcb690b1d6abcc74f5fa6ff44abb15828bef53b81314f78394de42036dff49",
  name: "addProgram",
  filename: "src/server/programs-github.ts"
}, (opts) => addProgram.__executeServer(opts));
const addProgram = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(addProgram_createServerFn_handler, async ({
  data
}) => {
  await requireAdmin();
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN not set.");
  const apiUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}?ref=${BRANCH}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json"
  };
  const getRes = await fetch(apiUrl, {
    headers
  });
  if (!getRes.ok) throw new Error(`Failed to read file from GitHub: ${getRes.status}`);
  const fileData = await getRes.json();
  const currentContent = Buffer.from(fileData.content, "base64").toString("utf-8");
  const marker = "export const PROGRAMS: Program[] = [";
  const insertAt = currentContent.indexOf(marker) + marker.length;
  if (insertAt === -1) throw new Error("Could not find PROGRAMS array in file.");
  const id = slugify(data.title) + "-" + Date.now().toString(36);
  const snippet = "\n" + buildProgramSnippet(data, id);
  const updatedContent = currentContent.slice(0, insertAt) + snippet + currentContent.slice(insertAt);
  const putRes = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: `Add program: ${data.title}`,
      content: Buffer.from(updatedContent, "utf-8").toString("base64"),
      sha: fileData.sha,
      branch: BRANCH
    })
  });
  if (!putRes.ok) {
    const err = await putRes.text();
    throw new Error(`Failed to commit to GitHub: ${putRes.status} ${err}`);
  }
  return {
    success: true,
    id
  };
});
export {
  addProgram_createServerFn_handler,
  checkSession_createServerFn_handler,
  login_createServerFn_handler,
  logout_createServerFn_handler
};
