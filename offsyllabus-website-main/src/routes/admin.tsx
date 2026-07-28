import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Plus, LogOut, CheckCircle2, AlertCircle } from "lucide-react";
import {
  addProgram,
  login,
  logout,
  checkSession,
  CATEGORIES,
  MODES,
  COSTS,
  LEVELS,
  type NewProgram,
} from "../server/programs-github";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

const EMPTY_FORM: NewProgram = {
  title: "",
  institution: "",
  category: CATEGORIES[0],
  mode: "Online",
  cost: "Free",
  level: "Beginner",
  eligibility: "",
  duration: "",
  location: "",
  deadline: "",
  fee: "",
  description: "",
  url: "",
  applicationUrl: "",
};

function AdminPage() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [form, setForm] = useState<NewProgram>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    checkSession().then((r) => setLoggedIn(r.loggedIn));
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    const res = await login({ data: { password } });
    if (res.success) setLoggedIn(true);
    else setLoginError("Wrong password. Try again.");
  }

  async function handleLogout() {
    await logout();
    setLoggedIn(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.institution || !form.applicationUrl) return;
    setStatus("saving");
    try {
      await addProgram({ data: form });
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong.");
    }
  }

  if (loggedIn === null) {
    return <div className="flex min-h-screen items-center justify-center bg-[#0B0B0F] text-white">Loading...</div>;
  }

  if (!loggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0B0F] px-4 text-white">
        <form onSubmit={handleLogin} className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h1 className="mb-6 text-xl font-semibold">Admin login</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#7c5cff]/50"
            autoFocus
          />
          {loginError && <p className="mb-3 text-sm text-red-400">{loginError}</p>}
          <button type="submit" className="w-full rounded-xl bg-[#7c5cff] py-3 font-semibold text-white hover:bg-[#6b4fd9]">
            Log in
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0F] px-4 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Add a program</h1>
            <p className="mt-1 text-sm text-gray-400">
              This commits directly to your site's code. It takes 1-2 minutes to appear live after saving.
            </p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-400 hover:text-white">
            <LogOut className="h-4 w-4" />
            Log out
          </button>
        </div>

        {status === "success" && (
          <div className="mb-6 flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
            <CheckCircle2 className="h-4 w-4" />
            Saved. Your site is rebuilding now — check offsyllabus.club/events-workshops in a minute or two.
          </div>
        )}
        {status === "error" && (
          <div className="mb-6 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            <AlertCircle className="h-4 w-4" />
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="input" />
            <input placeholder="Institution" value={form.institution} onChange={(e) => setForm({ ...form, institution: e.target.value })} className="input" />
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as NewProgram["category"] })} className="input">
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={form.mode} onChange={(e) => setForm({ ...form, mode: e.target.value as NewProgram["mode"] })} className="input">
              {MODES.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
            <select value={form.cost} onChange={(e) => setForm({ ...form, cost: e.target.value as NewProgram["cost"] })} className="input">
              {COSTS.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value as NewProgram["level"] })} className="input">
              {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
            <input placeholder="Eligibility" value={form.eligibility} onChange={(e) => setForm({ ...form, eligibility: e.target.value })} className="input" />
            <input placeholder="Duration" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="input" />
            <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="input" />
            <input placeholder="Deadline" value={form.deadline} onChange={(e) => setForm({ ...form, deadline: e.target.value })} className="input" />
            <input placeholder="Fee" value={form.fee} onChange={(e) => setForm({ ...form, fee: e.target.value })} className="input" />
            <input placeholder="Website URL" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} className="input" />
            <input placeholder="Direct application URL" value={form.applicationUrl} onChange={(e) => setForm({ ...form, applicationUrl: e.target.value })} className="input sm:col-span-2" />
            <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="input sm:col-span-2 min-h-[80px]" />
          </div>
          <button type="submit" disabled={status === "saving"} className="mt-4 flex items-center gap-2 rounded-xl bg-[#7c5cff] px-6 py-2.5 font-semibold text-white hover:bg-[#6b4fd9] disabled:opacity-50">
            <Plus className="h-4 w-4" />
            {status === "saving" ? "Saving..." : "Add program"}
          </button>
        </form>
      </div>
      <style>{`
        .input { border-radius: 0.75rem; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); padding: 0.65rem 1rem; color: white; outline: none; }
        .input:focus { border-color: rgba(124,92,255,0.5); }
        select.input { background-color: #1a1a1f; color: white; }
        select.input option { background-color: #1a1a1f; color: white; }
      `}</style>
    </div>
  );
}