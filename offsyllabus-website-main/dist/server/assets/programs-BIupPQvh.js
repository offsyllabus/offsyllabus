import { T as jsxRuntimeExports, r as reactExports } from "./worker-entry-OEANOqc_.js";
import { L as Link } from "./router-BOk2WSqk.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function useIsMobile() {
  const [isMobile, setIsMobile] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}
function RevealSection({
  children,
  delay = 0
}) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, {
      threshold: 0.1
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, style: {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
  }, children });
}
const programs = [{
  name: "Discovery Sprint",
  duration: "4 Weeks",
  tag: "Beginner",
  tagColor: "rgba(34,197,94,0.15)",
  tagBorder: "rgba(34,197,94,0.3)",
  tagText: "#86efac",
  icon: "🔍",
  desc: "A foundational program designed for students who are just starting to explore who they are and what they want from life.",
  highlights: ["Guided self-discovery exercises", "Introduction to future-ready skills", "Peer community access", "2 mentor sessions", "Personal reflection journal"],
  forWho: "Ages 15–17 · First-timers · Students seeking initial clarity"
}, {
  name: "Growth Cohort",
  duration: "12 Weeks",
  tag: "Core Program",
  tagColor: "rgba(124,58,237,0.15)",
  tagBorder: "rgba(124,58,237,0.35)",
  tagText: "#c4b5fd",
  icon: "🚀",
  desc: "The flagship OffSyllabus experience. A transformative 12-week journey through discovery, exploration, building, and growth.",
  highlights: ["Full 5-stage journey (Discover → Grow)", "Real-world projects and challenges", "Weekly mentor sessions (1:1 + group)", "Industry visits and field experiences", "Portfolio development", "Leadership assignments", "Community events and networking", "Final cohort showcase"],
  forWho: "Ages 15–21 · Serious learners · Future builders",
  featured: true
}, {
  name: "Founder Track",
  duration: "8 Weeks",
  tag: "Advanced",
  tagColor: "rgba(245,158,11,0.12)",
  tagBorder: "rgba(245,158,11,0.3)",
  tagText: "#fcd34d",
  icon: "💡",
  desc: "An intensive program for students who already have an idea or project and want to build it into something real.",
  highlights: ["Startup methodology workshops", "Idea validation frameworks", "Pitch preparation and practice", "Access to founder mentors", "MVP building support", "Investor mindset development"],
  forWho: "Ages 17–21 · Aspiring entrepreneurs · Students with ideas"
}];
const workshops = [{
  icon: "🎤",
  name: "Public Speaking Bootcamp",
  duration: "1 Weekend"
}, {
  icon: "🧠",
  name: "Design Thinking Intensive",
  duration: "2 Days"
}, {
  icon: "💼",
  name: "Career Clarity Workshop",
  duration: "1 Day"
}, {
  icon: "🌐",
  name: "Digital Skills Masterclass",
  duration: "1 Weekend"
}, {
  icon: "💰",
  name: "Financial Literacy for Students",
  duration: "1 Day"
}, {
  icon: "🤝",
  name: "Networking & Relationship Building",
  duration: "1 Day"
}];
function ProgramsPage() {
  const isMobile = useIsMobile();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    paddingTop: "68px",
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      padding: isMobile ? "64px 16px" : "100px 24px 80px",
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
        top: "-100px",
        left: "50%",
        transform: "translateX(-50%)",
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        position: "relative",
        zIndex: 1,
        maxWidth: "700px",
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
          marginBottom: "24px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#a78bfa",
            display: "inline-block"
          } }),
          "Programs & Tracks"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: {
          fontSize: "clamp(2rem, 6vw, 4rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "20px"
        }, children: [
          "Choose your",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 40%, #4f46e5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }, children: "path forward." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#94a3b8",
          fontSize: isMobile ? "1rem" : "1.125rem",
          lineHeight: "1.75",
          margin: "0 auto"
        }, children: "Every student is different. That's why OffSyllabus offers multiple entry points — from introductory sprints to intensive cohorts to founder-focused tracks." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      padding: isMobile ? "32px 16px 64px" : "40px 24px 100px",
      position: "relative"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      maxWidth: "1200px",
      margin: "0 auto"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "24px",
      alignItems: "stretch"
    }, children: programs.map((prog, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      background: prog.featured ? "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(79,70,229,0.05))" : "rgba(255,255,255,0.025)",
      border: `1px solid ${prog.featured ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.07)"}`,
      borderRadius: "24px",
      padding: isMobile ? "32px 20px" : "40px 36px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      transition: "border-color 0.3s ease, transform 0.3s ease"
    }, onMouseEnter: (e) => {
      e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
      e.currentTarget.style.transform = "translateY(-4px)";
    }, onMouseLeave: (e) => {
      e.currentTarget.style.borderColor = prog.featured ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.07)";
      e.currentTarget.style.transform = "translateY(0)";
    }, children: [
      prog.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        position: "absolute",
        top: "-14px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
        borderRadius: "100px",
        padding: "5px 18px",
        fontSize: "0.75rem",
        fontWeight: "700",
        color: "white",
        whiteSpace: "nowrap"
      }, children: "⭐ Most Popular" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: "2.5rem",
        marginBottom: "20px"
      }, children: prog.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        marginBottom: "16px",
        flexWrap: "wrap"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          padding: "4px 12px",
          background: prog.tagColor,
          border: `1px solid ${prog.tagBorder}`,
          borderRadius: "100px",
          fontSize: "0.75rem",
          fontWeight: "600",
          color: prog.tagText
        }, children: prog.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
          color: "#64748b",
          fontSize: "0.8125rem"
        }, children: [
          "⏱ ",
          prog.duration
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontSize: "1.5rem",
        fontWeight: "800",
        color: "#e2e8f0",
        marginBottom: "14px",
        letterSpacing: "-0.02em"
      }, children: prog.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        color: "#64748b",
        fontSize: "0.9375rem",
        lineHeight: "1.65",
        marginBottom: "28px"
      }, children: prog.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
        listStyle: "none",
        padding: 0,
        margin: "0 0 28px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        flex: 1
      }, children: prog.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { style: {
        display: "flex",
        gap: "10px",
        alignItems: "flex-start",
        color: "#94a3b8",
        fontSize: "0.9rem"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          color: "#7c3aed",
          fontWeight: "700",
          flexShrink: 0,
          marginTop: "1px"
        }, children: "✓" }),
        h
      ] }, h)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        padding: "12px 16px",
        background: "rgba(255,255,255,0.03)",
        borderRadius: "10px",
        marginBottom: "24px"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
        color: "#64748b",
        fontSize: "0.8rem"
      }, children: [
        "👤 ",
        prog.forWho
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/apply", style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "14px 24px",
        background: prog.featured ? "linear-gradient(135deg, #7c3aed, #4f46e5)" : "transparent",
        border: prog.featured ? "none" : "1px solid rgba(124,58,237,0.3)",
        borderRadius: "10px",
        color: "white",
        fontWeight: "600",
        fontSize: "0.9375rem",
        textDecoration: "none"
      }, children: [
        "Apply for ",
        prog.name,
        " →"
      ] })
    ] }) }, prog.name)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      padding: isMobile ? "48px 16px 64px" : "80px 24px 120px",
      background: "rgba(0,0,0,0.2)",
      position: "relative"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "1100px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        textAlign: "center",
        marginBottom: "48px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          marginBottom: "12px"
        }, children: [
          "One-Day Workshops &",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            background: "linear-gradient(135deg, #a78bfa, #4f46e5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }, children: "Intensives" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "1rem",
          maxWidth: "500px",
          margin: "0 auto"
        }, children: "Standalone experiences for students who want to develop a specific skill quickly." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "16px"
      }, children: workshops.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        gap: "16px",
        alignItems: "center",
        padding: "20px 24px",
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "14px",
        transition: "border-color 0.2s ease"
      }, onMouseEnter: (e) => e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)", onMouseLeave: (e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontSize: "1.75rem"
        }, children: w.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontWeight: "600",
            color: "#e2e8f0",
            fontSize: "0.9375rem"
          }, children: w.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            color: "#64748b",
            fontSize: "0.8rem",
            marginTop: "4px"
          }, children: w.duration })
        ] })
      ] }) }, w.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      padding: isMobile ? "48px 16px" : "80px 24px",
      textAlign: "center",
      position: "relative"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        position: "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "rgba(124,58,237,0.08)",
        filter: "blur(80px)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        position: "relative",
        zIndex: 1,
        maxWidth: "600px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          marginBottom: "16px"
        }, children: "Not sure which program is right for you?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "1rem",
          lineHeight: "1.7",
          marginBottom: "32px"
        }, children: "Apply anyway — we'll help you find the right fit during your admission conversation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "16px 36px",
          background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
          color: "white",
          borderRadius: "10px",
          fontWeight: "600",
          fontSize: "1rem",
          textDecoration: "none"
        }, children: "Apply Now →" })
      ] })
    ] })
  ] });
}
export {
  ProgramsPage as component
};
