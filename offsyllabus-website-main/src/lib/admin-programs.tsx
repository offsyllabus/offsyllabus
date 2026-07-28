import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { addProgramFn, ADMIN_FORM_OPTIONS } from "../lib/admin-programs";

export const Route = createFileRoute("/admin-programs")({
  head: () => ({
    meta: [{ title: "Add Program — Admin" }],
    // Keep this out of search engines
    other: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminProgramsPage,
});

const emptyForm = {
  password: "",
  title: "",
  institution: "",
  category: ADMIN_FORM_OPTIONS.categories[0],
  mode: ADMIN_FORM_OPTIONS.modes[0],
  cost: ADMIN_FORM_OPTIONS.costs[0],
  level: ADMIN_FORM_OPTIONS.levels[0],
  eligibility: "",
  duration: "",
  location: "",
  deadline: "",
  fee: "",
  description: "",
  url: "",
  applicationUrl: "",
};

function AdminProgramsPage() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function update<K extends keyof typeof emptyForm>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const result = await addProgramFn({ data: form });
      setStatus("success");
      setMessage(
        `Added "${form.title}" (id: ${result.id}). The site will rebuild and go live in a couple of minutes.` +
          (result.commitUrl ? ` Commit: ${result.commitUrl}` : "")
      );
      setForm((f) => ({ ...emptyForm, password: f.password }));
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.05)",
    color: "inherit",
    fontSize: 14,
    marginBottom: 14,
  };
  const labelStyle: React.CSSProperties = { display: "block", fontSize: 13, opacity: 0.8, marginBottom: 6 };

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "100px 20px 60px" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Add a Program</h1>
      <p style={{ opacity: 0.7, marginBottom: 28, fontSize: 14 }}>
        Fills out a new entry and commits it straight to the live site. No code editing needed.
      </p>

      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Admin password</label>
        <input
          style={inputStyle}
          type="password"
          value={form.password}
          onChange={(e) => update("password", e.target.value)}
          required
        />

        <label style={labelStyle}>Program title</label>
        <input style={inputStyle} value={form.title} onChange={(e) => update("title", e.target.value)} required />

        <label style={labelStyle}>Institution</label>
        <input
          style={inputStyle}
          value={form.institution}
          onChange={(e) => update("institution", e.target.value)}
          required
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div>
            <label style={labelStyle}>Category</label>
            <select style={inputStyle} value={form.category} onChange={(e) => update("category", e.target.value)}>
              {ADMIN_FORM_OPTIONS.categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Mode</label>
            <select style={inputStyle} value={form.mode} onChange={(e) => update("mode", e.target.value)}>
              {ADMIN_FORM_OPTIONS.modes.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Cost</label>
            <select style={inputStyle} value={form.cost} onChange={(e) => update("cost", e.target.value)}>
              {ADMIN_FORM_OPTIONS.costs.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Level</label>
            <select style={inputStyle} value={form.level} onChange={(e) => update("level", e.target.value)}>
              {ADMIN_FORM_OPTIONS.levels.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>

        <label style={labelStyle}>Eligibility</label>
        <input
          style={inputStyle}
          value={form.eligibility}
          onChange={(e) => update("eligibility", e.target.value)}
          placeholder='e.g. "Ages 16–24"'
          required
        />

        <label style={labelStyle}>Duration</label>
        <input style={inputStyle} value={form.duration} onChange={(e) => update("duration", e.target.value)} required />

        <label style={labelStyle}>Location</label>
        <input style={inputStyle} value={form.location} onChange={(e) => update("location", e.target.value)} required />

        <label style={labelStyle}>Deadline</label>
        <input style={inputStyle} value={form.deadline} onChange={(e) => update("deadline", e.target.value)} required />

        <label style={labelStyle}>Fee</label>
        <input style={inputStyle} value={form.fee} onChange={(e) => update("fee", e.target.value)} required />

        <label style={labelStyle}>Description</label>
        <textarea
          style={{ ...inputStyle, minHeight: 90, resize: "vertical" }}
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          required
        />

        <label style={labelStyle}>Website URL</label>
        <input
          style={inputStyle}
          type="url"
          value={form.url}
          onChange={(e) => update("url", e.target.value)}
          placeholder="https://..."
          required
        />

        <label style={labelStyle}>Application URL</label>
        <input
          style={inputStyle}
          type="url"
          value={form.applicationUrl}
          onChange={(e) => update("applicationUrl", e.target.value)}
          placeholder="https://..."
          required
        />

        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            marginTop: 8,
            padding: "12px 20px",
            borderRadius: 8,
            border: "none",
            background: status === "loading" ? "#555" : "#7c3aed",
            color: "white",
            fontWeight: 600,
            cursor: status === "loading" ? "not-allowed" : "pointer",
          }}
        >
          {status === "loading" ? "Adding..." : "Add Program"}
        </button>
      </form>

      {message && (
        <p
          style={{
            marginTop: 20,
            padding: 14,
            borderRadius: 8,
            fontSize: 14,
            background: status === "success" ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)",
            border: `1px solid ${status === "success" ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}