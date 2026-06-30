import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-OEANOqc_.js";
import { L as Link } from "./router-BOk2WSqk.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ApplyPage() {
  const [step, setStep] = reactExports.useState(1);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    age: "",
    city: "",
    email: "",
    phone: "",
    school: "",
    stream: "",
    program: "",
    why: "",
    goals: "",
    challenge: "",
    commitment: ""
  });
  const update = (field, value) => setForm((f) => ({
    ...f,
    [field]: value
  }));
  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    color: "#f1f5f9",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 0.2s ease, background 0.2s ease",
    boxSizing: "border-box"
  };
  const labelStyle = {
    display: "block",
    color: "#94a3b8",
    fontSize: "0.875rem",
    fontWeight: "500",
    marginBottom: "8px"
  };
  const fieldStyle = {
    marginBottom: "24px"
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("age", form.age);
    formData.append("city", form.city);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("school", form.school);
    formData.append("stream", form.stream);
    formData.append("program", form.program);
    formData.append("why", form.why);
    formData.append("goals", form.goals);
    formData.append("challenge", form.challenge);
    formData.append("commitment", form.commitment);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwfpF-mm7XoyFDgASnIQhkhbj13nrnC9DlrtD9ylVCEg6Nco0_Wcn1FOec3NduD0SxcxQ/exec", {
        method: "POST",
        mode: "no-cors",
        // ← FIXED: prevents CORS error from blocking submission
        body: formData
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  if (submitted) {
    return (
      // FIXED: removed conflicting paddingTop — use padding shorthand only
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        textAlign: "center",
        maxWidth: "560px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "fixed",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(124,58,237,0.12)",
          filter: "blur(80px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          zIndex: 0
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          position: "relative",
          zIndex: 1
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            margin: "0 auto 32px"
          }, children: "🎉" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: {
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "800",
            letterSpacing: "-0.03em",
            marginBottom: "20px"
          }, children: [
            "Application",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              background: "linear-gradient(135deg, #a78bfa, #4f46e5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }, children: "Received!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
            color: "#94a3b8",
            fontSize: "1.0625rem",
            lineHeight: "1.75",
            marginBottom: "32px"
          }, children: [
            "Thank you, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: {
              color: "#e2e8f0"
            }, children: form.name || "there" }),
            "! We've received your application and will review it carefully.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Expect to hear from us within ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: {
              color: "#a78bfa"
            }, children: "3–5 business days" }),
            " with next steps. Keep an eye on your email."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            padding: "24px 28px",
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.2)",
            borderRadius: "16px",
            marginBottom: "32px",
            textAlign: "left"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
              fontWeight: "700",
              color: "#e2e8f0",
              fontSize: "1rem",
              marginBottom: "16px"
            }, children: "What happens next?" }),
            [{
              num: "01",
              text: "We review your application thoroughly"
            }, {
              num: "02",
              text: "You'll receive an email to schedule a conversation call"
            }, {
              num: "03",
              text: "Selected students receive cohort onboarding details"
            }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              display: "flex",
              gap: "14px",
              alignItems: "flex-start",
              marginBottom: "14px"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontWeight: "700",
                color: "white",
                flexShrink: 0
              }, children: s.num }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                color: "#94a3b8",
                fontSize: "0.9375rem"
              }, children: s.text })
            ] }, s.num))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", style: {
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "14px 28px",
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            color: "white",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "1rem",
            textDecoration: "none"
          }, children: "Back to Home" })
        ] })
      ] }) })
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    paddingTop: "68px",
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      padding: "80px 24px 60px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        position: "absolute",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "rgba(124,58,237,0.1)",
        filter: "blur(80px)",
        top: "-150px",
        left: "50%",
        transform: "translateX(-50%)",
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        position: "relative",
        zIndex: 1,
        maxWidth: "620px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 16px",
          background: "rgba(124,58,237,0.1)",
          border: "1px solid rgba(124,58,237,0.2)",
          borderRadius: "100px",
          fontSize: "0.75rem",
          fontWeight: "600",
          color: "#a78bfa",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "20px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#a78bfa",
            display: "inline-block"
          } }),
          "Selective Admissions · Limited Seats"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: {
          fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "16px"
        }, children: [
          "Apply for the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            background: "linear-gradient(135deg, #a78bfa, #7c3aed, #4f46e5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }, children: "Next Cohort." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#94a3b8",
          fontSize: "1.0625rem",
          lineHeight: "1.75",
          maxWidth: "500px",
          margin: "0 auto"
        }, children: "Tell us about yourself. We read every application personally and look for curiosity, drive, and genuine readiness to grow." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      padding: "20px 24px 100px"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "720px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "flex",
        gap: "8px",
        marginBottom: "48px",
        justifyContent: "center"
      }, children: [{
        num: 1,
        label: "Basic Info"
      }, {
        num: 2,
        label: "Background"
      }, {
        num: 3,
        label: "Motivation"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: step >= s.num ? "linear-gradient(135deg, #7c3aed, #4f46e5)" : "rgba(255,255,255,0.06)",
            border: `1px solid ${step >= s.num ? "transparent" : "rgba(255,255,255,0.1)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.8rem",
            fontWeight: "700",
            color: step >= s.num ? "white" : "#64748b",
            transition: "all 0.3s ease"
          }, children: step > s.num ? "✓" : s.num }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: step >= s.num ? "#e2e8f0" : "#475569",
            fontSize: "0.875rem",
            fontWeight: step >= s.num ? "600" : "400",
            display: "none"
          }, className: "sm:block", children: s.label })
        ] }),
        s.num < 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: "40px",
          height: "2px",
          background: step > s.num ? "linear-gradient(90deg, #7c3aed, #4f46e5)" : "rgba(255,255,255,0.08)",
          borderRadius: "2px",
          transition: "background 0.3s ease",
          marginLeft: "8px"
        } })
      ] }, s.num)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "24px",
        padding: "48px 44px"
      }, children: [
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
            fontSize: "1.5rem",
            fontWeight: "800",
            color: "#e2e8f0",
            marginBottom: "8px",
            letterSpacing: "-0.02em"
          }, children: "Tell us about yourself" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            color: "#64748b",
            fontSize: "0.9rem",
            marginBottom: "36px"
          }, children: "Basic information to get started." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Full Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: form.name, onChange: (e) => update("name", e.target.value), placeholder: "Your full name", style: inputStyle, onFocus: (e) => {
                e.target.style.borderColor = "rgba(124,58,237,0.5)";
                e.target.style.background = "rgba(124,58,237,0.04)";
              }, onBlur: (e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.1)";
                e.target.style.background = "rgba(255,255,255,0.04)";
              } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Age *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", required: true, min: 15, max: 21, value: form.age, onChange: (e) => update("age", e.target.value), placeholder: "15–21", style: inputStyle, onFocus: (e) => {
                e.target.style.borderColor = "rgba(124,58,237,0.5)";
                e.target.style.background = "rgba(124,58,237,0.04)";
              }, onBlur: (e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.1)";
                e.target.style.background = "rgba(255,255,255,0.04)";
              } })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Email Address *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: form.email, onChange: (e) => update("email", e.target.value), placeholder: "you@example.com", style: inputStyle, onFocus: (e) => {
                e.target.style.borderColor = "rgba(124,58,237,0.5)";
                e.target.style.background = "rgba(124,58,237,0.04)";
              }, onBlur: (e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.1)";
                e.target.style.background = "rgba(255,255,255,0.04)";
              } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Phone Number *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", required: true, value: form.phone, onChange: (e) => update("phone", e.target.value), placeholder: "+91 XXXXX XXXXX", style: inputStyle, onFocus: (e) => {
                e.target.style.borderColor = "rgba(124,58,237,0.5)";
                e.target.style.background = "rgba(124,58,237,0.04)";
              }, onBlur: (e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.1)";
                e.target.style.background = "rgba(255,255,255,0.04)";
              } })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "City *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: form.city, onChange: (e) => update("city", e.target.value), placeholder: "Your city", style: inputStyle, onFocus: (e) => {
              e.target.style.borderColor = "rgba(124,58,237,0.5)";
              e.target.style.background = "rgba(124,58,237,0.04)";
            }, onBlur: (e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.1)";
              e.target.style.background = "rgba(255,255,255,0.04)";
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Program of Interest *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, value: form.program, onChange: (e) => update("program", e.target.value), style: {
              ...inputStyle,
              cursor: "pointer"
            }, onFocus: (e) => {
              e.target.style.borderColor = "rgba(124,58,237,0.5)";
            }, onBlur: (e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.1)";
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", style: {
                background: "#0d0d1a"
              }, children: "Select a program..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "discovery", style: {
                background: "#0d0d1a"
              }, children: "Discovery Sprint (4 Weeks)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "growth", style: {
                background: "#0d0d1a"
              }, children: "Growth Cohort (12 Weeks) — Most Popular" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "founder", style: {
                background: "#0d0d1a"
              }, children: "Founder Track (8 Weeks)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "unsure", style: {
                background: "#0d0d1a"
              }, children: "I'm not sure yet" })
            ] })
          ] })
        ] }),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
            fontSize: "1.5rem",
            fontWeight: "800",
            color: "#e2e8f0",
            marginBottom: "8px",
            letterSpacing: "-0.02em"
          }, children: "Your background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            color: "#64748b",
            fontSize: "0.9rem",
            marginBottom: "36px"
          }, children: "Help us understand where you are right now." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "School / College Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: form.school, onChange: (e) => update("school", e.target.value), placeholder: "Name of your institution", style: inputStyle, onFocus: (e) => {
              e.target.style.borderColor = "rgba(124,58,237,0.5)";
              e.target.style.background = "rgba(124,58,237,0.04)";
            }, onBlur: (e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.1)";
              e.target.style.background = "rgba(255,255,255,0.04)";
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Stream / Field of Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: form.stream, onChange: (e) => update("stream", e.target.value), placeholder: "e.g., Science, Commerce, Arts, Engineering", style: inputStyle, onFocus: (e) => {
              e.target.style.borderColor = "rgba(124,58,237,0.5)";
              e.target.style.background = "rgba(124,58,237,0.04)";
            }, onBlur: (e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.1)";
              e.target.style.background = "rgba(255,255,255,0.04)";
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Weekly Time Commitment *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, value: form.commitment, onChange: (e) => update("commitment", e.target.value), style: {
              ...inputStyle,
              cursor: "pointer"
            }, onFocus: (e) => {
              e.target.style.borderColor = "rgba(124,58,237,0.5)";
            }, onBlur: (e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.1)";
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", style: {
                background: "#0d0d1a"
              }, children: "How many hours can you commit per week?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "4-6", style: {
                background: "#0d0d1a"
              }, children: "4–6 hours/week" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "8-10", style: {
                background: "#0d0d1a"
              }, children: "8–10 hours/week" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "10+", style: {
                background: "#0d0d1a"
              }, children: "10+ hours/week (Full commitment)" })
            ] })
          ] })
        ] }),
        step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
            fontSize: "1.5rem",
            fontWeight: "800",
            color: "#e2e8f0",
            marginBottom: "8px",
            letterSpacing: "-0.02em"
          }, children: "Your motivation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            color: "#64748b",
            fontSize: "0.9rem",
            marginBottom: "36px"
          }, children: "This is the most important part. Be honest and thoughtful." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Why do you want to join OffSyllabus? *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, value: form.why, onChange: (e) => update("why", e.target.value), placeholder: "What's missing from your current education? What do you hope to gain? Be specific.", rows: 4, style: {
              ...inputStyle,
              resize: "vertical",
              fontFamily: "inherit",
              lineHeight: "1.6"
            }, onFocus: (e) => {
              e.target.style.borderColor = "rgba(124,58,237,0.5)";
              e.target.style.background = "rgba(124,58,237,0.04)";
            }, onBlur: (e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.1)";
              e.target.style.background = "rgba(255,255,255,0.04)";
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "What are your goals for the next 2 years? *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, value: form.goals, onChange: (e) => update("goals", e.target.value), placeholder: "Where do you want to be? What do you want to build, achieve, or become?", rows: 4, style: {
              ...inputStyle,
              resize: "vertical",
              fontFamily: "inherit",
              lineHeight: "1.6"
            }, onFocus: (e) => {
              e.target.style.borderColor = "rgba(124,58,237,0.5)";
              e.target.style.background = "rgba(124,58,237,0.04)";
            }, onBlur: (e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.1)";
              e.target.style.background = "rgba(255,255,255,0.04)";
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Describe a challenge you've overcome *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, value: form.challenge, onChange: (e) => update("challenge", e.target.value), placeholder: "Tell us about a difficulty you faced and how you dealt with it. This tells us a lot about your character.", rows: 4, style: {
              ...inputStyle,
              resize: "vertical",
              fontFamily: "inherit",
              lineHeight: "1.6"
            }, onFocus: (e) => {
              e.target.style.borderColor = "rgba(124,58,237,0.5)";
              e.target.style.background = "rgba(124,58,237,0.04)";
            }, onBlur: (e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.1)";
              e.target.style.background = "rgba(255,255,255,0.04)";
            } })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: "12px",
          justifyContent: "space-between",
          marginTop: "8px"
        }, children: [
          step > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setStep(step - 1), style: {
            padding: "13px 24px",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "10px",
            color: "#94a3b8",
            fontWeight: "500",
            fontSize: "0.9375rem",
            cursor: "pointer",
            transition: "border-color 0.2s ease"
          }, children: "← Back" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
          step < 3 ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
            if (step === 1 && (!form.name || !form.age || !form.email || !form.phone || !form.city || !form.program)) {
              alert("Please fill in all required fields.");
              return;
            }
            if (step === 2 && (!form.school || !form.commitment)) {
              alert("Please fill in all required fields.");
              return;
            }
            setStep(step + 1);
          }, style: {
            padding: "13px 28px",
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontWeight: "600",
            fontSize: "0.9375rem",
            cursor: "pointer",
            transition: "opacity 0.2s ease"
          }, children: "Continue →" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, style: {
            padding: "13px 32px",
            background: loading ? "rgba(124,58,237,0.5)" : "linear-gradient(135deg, #7c3aed, #4f46e5)",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontWeight: "700",
            fontSize: "1rem",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "opacity 0.2s ease, transform 0.2s ease",
            opacity: loading ? 0.7 : 1
          }, children: loading ? "Submitting…" : "Submit Application 🚀" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        marginTop: "32px",
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        justifyContent: "center"
      }, children: [{
        icon: "🔒",
        text: "Your info is confidential"
      }, {
        icon: "⏱",
        text: "Takes about 10 minutes"
      }, {
        icon: "🤝",
        text: "We read every application"
      }].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "#475569",
        fontSize: "0.8125rem"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.text })
      ] }, t.text)) })
    ] }) })
  ] });
}
export {
  ApplyPage as component
};
