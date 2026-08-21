import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, a as getServerFnById } from "./index.mjs";
import "../_libs/seroval.mjs";
import { c as LogOut, d as CircleCheck, e as CircleAlert, P as Plus } from "../_libs/lucide-react.mjs";
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
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const CATEGORIES = ["Private Universities", "Government Universities", "Corporate Programs", "Investor & Venture Capitalist Programs", "Private Educator Programs", "Other / Unorthodox Programs"];
const MODES = ["Online", "Offline", "Hybrid"];
const COSTS = ["Free", "Paid"];
const LEVELS = ["Beginner", "Intermediate"];
const login = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("8d3b0cfa4e6d9dbbe12091806de8d4b4b28b169ad55c5094547cf7daee43fb48"));
const logout = createServerFn({
  method: "POST"
}).handler(createSsrRpc("32f6941306a0a237d403f76d4a05986b0b2dbfe1d129b00a3512753bf5a4605e"));
const checkSession = createServerFn({
  method: "GET"
}).handler(createSsrRpc("1121f04b0fa836a7f1067524d757eb93abe4209197ec8d29b65bbd798cbc4e78"));
const addProgram = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("4ebcb690b1d6abcc74f5fa6ff44abb15828bef53b81314f78394de42036dff49"));
const EMPTY_FORM = {
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
  applicationUrl: ""
};
function AdminPage() {
  const [loggedIn, setLoggedIn] = reactExports.useState(null);
  const [password, setPassword] = reactExports.useState("");
  const [loginError, setLoginError] = reactExports.useState("");
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const [status, setStatus] = reactExports.useState("idle");
  const [errorMsg, setErrorMsg] = reactExports.useState("");
  reactExports.useEffect(() => {
    checkSession().then((r) => setLoggedIn(r.loggedIn));
  }, []);
  async function handleLogin(e) {
    e.preventDefault();
    setLoginError("");
    const res = await login({
      data: {
        password
      }
    });
    if (res.success) setLoggedIn(true);
    else setLoginError("Wrong password. Try again.");
  }
  async function handleLogout() {
    await logout();
    setLoggedIn(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.institution || !form.applicationUrl) return;
    setStatus("saving");
    try {
      await addProgram({
        data: form
      });
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong.");
    }
  }
  if (loggedIn === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-[#0B0B0F] text-white", children: "Loading..." });
  }
  if (!loggedIn) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-[#0B0B0F] px-4 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-6 text-xl font-semibold", children: "Admin login" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), className: "mb-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#7c5cff]/50", autoFocus: true }),
      loginError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-sm text-red-400", children: loginError }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-xl bg-[#7c5cff] py-3 font-semibold text-white hover:bg-[#6b4fd9]", children: "Log in" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#0B0B0F] px-4 py-10 text-white sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Add a program" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-400", children: "This commits directly to your site's code. It takes 1-2 minutes to appear live after saving." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleLogout, className: "flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-400 hover:text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          "Log out"
        ] })
      ] }),
      status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
        "Saved. Your site is rebuilding now — check offsyllabus.club/events-workshops in a minute or two."
      ] }),
      status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
        errorMsg
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "rounded-2xl border border-white/10 bg-white/[0.03] p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Title", value: form.title, onChange: (e) => setForm({
            ...form,
            title: e.target.value
          }), className: "input" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Institution", value: form.institution, onChange: (e) => setForm({
            ...form,
            institution: e.target.value
          }), className: "input" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.category, onChange: (e) => setForm({
            ...form,
            category: e.target.value
          }), className: "input", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.mode, onChange: (e) => setForm({
            ...form,
            mode: e.target.value
          }), className: "input", children: MODES.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m, children: m }, m)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.cost, onChange: (e) => setForm({
            ...form,
            cost: e.target.value
          }), className: "input", children: COSTS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.level, onChange: (e) => setForm({
            ...form,
            level: e.target.value
          }), className: "input", children: LEVELS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l, children: l }, l)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Eligibility", value: form.eligibility, onChange: (e) => setForm({
            ...form,
            eligibility: e.target.value
          }), className: "input" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Duration", value: form.duration, onChange: (e) => setForm({
            ...form,
            duration: e.target.value
          }), className: "input" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Location", value: form.location, onChange: (e) => setForm({
            ...form,
            location: e.target.value
          }), className: "input" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Deadline", value: form.deadline, onChange: (e) => setForm({
            ...form,
            deadline: e.target.value
          }), className: "input" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Fee", value: form.fee, onChange: (e) => setForm({
            ...form,
            fee: e.target.value
          }), className: "input" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Website URL", value: form.url, onChange: (e) => setForm({
            ...form,
            url: e.target.value
          }), className: "input" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Direct application URL", value: form.applicationUrl, onChange: (e) => setForm({
            ...form,
            applicationUrl: e.target.value
          }), className: "input sm:col-span-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { placeholder: "Description", value: form.description, onChange: (e) => setForm({
            ...form,
            description: e.target.value
          }), className: "input sm:col-span-2 min-h-[80px]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: status === "saving", className: "mt-4 flex items-center gap-2 rounded-xl bg-[#7c5cff] px-6 py-2.5 font-semibold text-white hover:bg-[#6b4fd9] disabled:opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          status === "saving" ? "Saving..." : "Add program"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .input { border-radius: 0.75rem; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); padding: 0.65rem 1rem; color: white; outline: none; }
        .input:focus { border-color: rgba(124,92,255,0.5); }
        select.input { background-color: #1a1a1f; color: white; }
        select.input option { background-color: #1a1a1f; color: white; }
      ` })
  ] });
}
export {
  AdminPage as component
};
