import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function MentorApplyPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    fullName: "",
    email: "",
    phone: "",
    expertise: "",
    linkedin: "",
    social: "",
    portfolio: "",
    resume: null
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
    try {
      let resumeData = "";
      if (form.resume) {
        const buffer = await form.resume.arrayBuffer();
        const bytes = new Uint8Array(buffer);
        let binary = "";
        bytes.forEach((b) => binary += String.fromCharCode(b));
        resumeData = btoa(binary);
      }
      const formData = new FormData();
      formData.append("fullName", form.fullName);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("expertise", form.expertise);
      formData.append("linkedin", form.linkedin);
      formData.append("social", form.social);
      formData.append("portfolio", form.portfolio);
      if (form.resume) {
        formData.append("resumeData", resumeData);
        formData.append("resumeName", form.resume.name);
        formData.append("resumeType", form.resume.type);
      }
      await fetch("https://script.google.com/macros/s/AKfycbwB4ZeP9MdF4JHnOvWzvjmjgvy9wKiQGJJIqQ4TXfDXIOlkfFJwWk5p--1KE62emR69Fw/exec", {
        method: "POST",
        mode: "no-cors",
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
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
        }, children: "🎓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: {
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          marginBottom: "20px"
        }, children: [
          "Welcome to the",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
            background: "linear-gradient(135deg, #a78bfa, #4f46e5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }, children: [
            " ",
            "Mentor Community!"
          ] })
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
          }, children: form.fullName }),
          "! We've received your application.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "We'll review it carefully and reach out within ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: {
            color: "#a78bfa"
          }, children: "3–5 business days" }),
          " with next steps."
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
          }, children: "What's next?" }),
          [{
            num: "01",
            text: "We review your profile and expertise"
          }, {
            num: "02",
            text: "You receive an email with mentor onboarding details"
          }, {
            num: "03",
            text: "Complete your full profile and get matched with mentees"
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", style: {
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
    ] }) });
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
          "Become a Mentor · Guide the Next Generation"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: {
          fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "16px"
        }, children: [
          "Share Your",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
            background: "linear-gradient(135deg, #a78bfa, #7c3aed, #4f46e5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }, children: [
            " ",
            "Expertise"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#94a3b8",
          fontSize: "1.0625rem",
          lineHeight: "1.75",
          maxWidth: "500px",
          margin: "0 auto"
        }, children: "Join our community of mentors. Help students navigate their path beyond traditional education. Takes just 3 minutes to apply." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      padding: "20px 24px 100px"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "720px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "24px",
        padding: "48px 44px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "1.5rem",
          fontWeight: "800",
          color: "#e2e8f0",
          marginBottom: "8px",
          letterSpacing: "-0.02em"
        }, children: "Quick Application" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "0.9rem",
          marginBottom: "36px"
        }, children: "Tell us about yourself and your expertise." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Full Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: form.fullName, onChange: (e) => update("fullName", e.target.value), placeholder: "Your name", style: inputStyle, onFocus: (e) => {
            e.target.style.borderColor = "rgba(124,58,237,0.5)";
            e.target.style.background = "rgba(124,58,237,0.04)";
          }, onBlur: (e) => {
            e.target.style.borderColor = "rgba(255,255,255,0.1)";
            e.target.style.background = "rgba(255,255,255,0.04)";
          } })
        ] }),
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
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Areas of Expertise *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            color: "#64748b",
            fontSize: "0.8125rem",
            marginBottom: "12px"
          }, children: "Enter your areas of expertise separated by commas (e.g., Personal Coach, UI/UX Design, Digital Marketing, Career Guidance)." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, value: form.expertise, onChange: (e) => update("expertise", e.target.value), placeholder: "Example: Personal Coach, UI/UX Design, Graphic Design, Product Management, Data Analytics, Digital Marketing, Public Speaking, Career Guidance", rows: 3, style: {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "LinkedIn Profile (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "url", value: form.linkedin, onChange: (e) => update("linkedin", e.target.value), placeholder: "https://linkedin.com/in/yourname", style: inputStyle, onFocus: (e) => {
            e.target.style.borderColor = "rgba(124,58,237,0.5)";
            e.target.style.background = "rgba(124,58,237,0.04)";
          }, onBlur: (e) => {
            e.target.style.borderColor = "rgba(255,255,255,0.1)";
            e.target.style.background = "rgba(255,255,255,0.04)";
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Instagram or Facebook (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "url", value: form.social, onChange: (e) => update("social", e.target.value), placeholder: "https://instagram.com/yourhandle or facebook.com/yourpage", style: inputStyle, onFocus: (e) => {
            e.target.style.borderColor = "rgba(124,58,237,0.5)";
            e.target.style.background = "rgba(124,58,237,0.04)";
          }, onBlur: (e) => {
            e.target.style.borderColor = "rgba(255,255,255,0.1)";
            e.target.style.background = "rgba(255,255,255,0.04)";
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Portfolio Website (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "url", value: form.portfolio, onChange: (e) => update("portfolio", e.target.value), placeholder: "https://yourportfolio.com or GitHub URL", style: inputStyle, onFocus: (e) => {
            e.target.style.borderColor = "rgba(124,58,237,0.5)";
            e.target.style.background = "rgba(124,58,237,0.04)";
          }, onBlur: (e) => {
            e.target.style.borderColor = "rgba(255,255,255,0.1)";
            e.target.style.background = "rgba(255,255,255,0.04)";
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            color: "#475569",
            fontSize: "0.75rem",
            marginTop: "6px"
          }, children: "Portfolio, GitHub, or Behance link" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: fieldStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Resume/CV (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            position: "relative"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: ".pdf,.doc,.docx", onChange: (e) => update("resume", e.target.files?.[0] || null), style: {
              position: "absolute",
              opacity: 0,
              width: "100%",
              height: "100%",
              cursor: "pointer"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              padding: "20px 24px",
              background: "rgba(255,255,255,0.04)",
              border: "2px dashed rgba(124,58,237,0.3)",
              borderRadius: "10px",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }, onMouseEnter: (e) => {
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.6)";
              e.currentTarget.style.background = "rgba(124,58,237,0.08)";
            }, onMouseLeave: (e) => {
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                fontSize: "1.5rem",
                marginBottom: "8px"
              }, children: "📄" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
                color: "#94a3b8",
                fontSize: "0.875rem",
                margin: "0"
              }, children: form.resume ? form.resume.name : "Click to upload or drag & drop" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
                color: "#64748b",
                fontSize: "0.75rem",
                margin: "4px 0 0"
              }, children: "PDF, DOC, or DOCX" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading || !form.fullName || !form.email || !form.phone || !form.expertise.trim(), style: {
          width: "100%",
          padding: "14px 24px",
          background: loading || !form.fullName || !form.email || !form.phone || !form.expertise.trim() ? "rgba(124,58,237,0.5)" : "linear-gradient(135deg, #7c3aed, #4f46e5)",
          border: "none",
          borderRadius: "10px",
          color: "white",
          fontWeight: "700",
          fontSize: "1rem",
          cursor: loading || !form.fullName || !form.email || !form.phone || !form.expertise.trim() ? "not-allowed" : "pointer",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          opacity: loading || !form.fullName || !form.email || !form.phone || !form.expertise.trim() ? 0.7 : 1,
          marginTop: "12px"
        }, children: loading ? "Submitting…" : "Apply Now 🚀" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        marginTop: "32px",
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        justifyContent: "center"
      }, children: [{
        icon: "⚡",
        text: "Takes 3 minutes"
      }, {
        icon: "🔒",
        text: "Your info is safe"
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
  MentorApplyPage as component
};
