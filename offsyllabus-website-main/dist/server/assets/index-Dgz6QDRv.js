import { T as jsxRuntimeExports, r as reactExports } from "./worker-entry-OEANOqc_.js";
import { L as Link } from "./router-BOk2WSqk.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function SectionLabel({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-label", style: {
    marginBottom: "20px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: "#a78bfa",
      display: "inline-block"
    } }),
    children
  ] });
}
function useIntersection(threshold = 0.1) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, {
      threshold
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return {
    ref,
    visible
  };
}
function useIsMobile() {
  const [isMobile, setIsMobile] = reactExports.useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  });
  reactExports.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}
function RevealSection({
  children,
  delay = 0,
  className = ""
}) {
  const {
    ref,
    visible
  } = useIntersection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className, style: {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
  }, children });
}
function HeroSection() {
  const [mounted, setMounted] = reactExports.useState(false);
  const isMobile = useIsMobile();
  reactExports.useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    paddingTop: "68px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "600px",
      height: "600px",
      background: "rgba(124,58,237,0.12)",
      top: "-100px",
      left: "50%",
      transform: "translateX(-50%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "400px",
      height: "400px",
      background: "rgba(79,70,229,0.08)",
      bottom: "0",
      right: "-100px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "300px",
      height: "300px",
      background: "rgba(139,92,246,0.06)",
      bottom: "100px",
      left: "-50px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-pattern", style: {
      position: "absolute",
      inset: 0,
      opacity: 0.6
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      padding: isMobile ? "48px 20px" : "80px 24px",
      maxWidth: "900px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
        marginBottom: "32px",
        display: "flex",
        justifyContent: "center"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 20px",
        background: "rgba(124,58,237,0.1)",
        border: "1px solid rgba(124,58,237,0.25)",
        borderRadius: "100px",
        fontSize: "0.8125rem",
        fontWeight: "600",
        color: "#c4b5fd",
        letterSpacing: "0.05em"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#a78bfa",
          display: "inline-block",
          animation: "pulse-glow 2s ease-in-out infinite"
        } }),
        "Now Accepting Cohort Applications"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: {
        fontSize: "clamp(3rem, 8vw, 6rem)",
        fontWeight: "800",
        lineHeight: "1.05",
        letterSpacing: "-0.03em",
        marginBottom: "28px",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s"
      }, children: [
        "Education",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Beyond Marks." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
        color: "#94a3b8",
        lineHeight: "1.75",
        maxWidth: "680px",
        margin: "0 auto 48px",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s"
      }, children: "Helping students discover who they are, build future-ready skills, and gain real-world experience through mentorship, projects, and community." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", className: "btn-primary", style: {
          fontSize: "1rem",
          padding: "16px 32px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Apply for the Next Cohort →" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#journey", className: "btn-secondary", style: {
          fontSize: "1rem",
          padding: "16px 32px"
        }, children: "Explore the Journey" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: isMobile ? "24px 32px" : "48px",
        marginTop: isMobile ? "48px" : "72px",
        paddingTop: isMobile ? "32px" : "48px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.7s ease 0.7s"
      }, children: [{
        value: "500+",
        label: "Students Impacted"
      }, {
        value: "50+",
        label: "Expert Mentors"
      }, {
        value: "30+",
        label: "Industry Partners"
      }, {
        value: "95%",
        label: "Student Satisfaction"
      }].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-text", style: {
          fontSize: "2rem",
          fontWeight: "800",
          lineHeight: 1
        }, children: stat.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          color: "#64748b",
          fontSize: "0.875rem",
          marginTop: "6px"
        }, children: stat.label })
      ] }, stat.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      bottom: "32px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      opacity: mounted ? 0.5 : 0,
      transition: "opacity 0.7s ease 1s"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      width: "1px",
      height: "48px",
      background: "linear-gradient(to bottom, transparent, #7c3aed)",
      animation: "float 2s ease-in-out infinite"
    } }) })
  ] });
}
function ProblemSection() {
  const problems = [{
    icon: "📚",
    text: "Students are taught what to think, not how to think."
  }, {
    icon: "🎓",
    text: "Academic success does not guarantee life success."
  }, {
    icon: "🧭",
    text: "Most students lack clarity, confidence, and practical exposure."
  }, {
    icon: "💡",
    text: "Traditional education overlooks creativity, communication, and self-awareness."
  }];
  const isMobile = useIsMobile();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
    padding: isMobile ? "72px 20px" : "120px 24px",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "500px",
      height: "500px",
      background: "rgba(239,68,68,0.04)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "1100px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        textAlign: "center",
        marginBottom: "64px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "The Problem" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "16px"
        }, children: [
          "The education system is",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-warm", children: "broken." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "1.125rem",
          maxWidth: "600px",
          margin: "0 auto"
        }, children: "Students graduate with degrees but not direction. With knowledge but not wisdom." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "20px"
      }, children: problems.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card", style: {
        borderRadius: "16px",
        padding: "32px 28px",
        borderLeft: "3px solid rgba(239,68,68,0.3)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: "2.5rem",
          marginBottom: "16px"
        }, children: p.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#cbd5e1",
          fontSize: "1rem",
          lineHeight: "1.65",
          margin: 0,
          fontWeight: "500"
        }, children: p.text })
      ] }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        marginTop: "48px",
        padding: isMobile ? "28px 24px" : "40px 48px",
        background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(79,70,229,0.05))",
        border: "1px solid rgba(124,58,237,0.2)",
        borderRadius: "20px",
        textAlign: "center"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
        fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
        fontWeight: "700",
        color: "#e2e8f0",
        lineHeight: 1.5,
        margin: 0
      }, children: [
        "OffSyllabus exists to fill the gap —",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "the space between academic success and real-world readiness." })
      ] }) }) })
    ] })
  ] });
}
function JourneySection() {
  const isMobile = useIsMobile();
  const steps = [{
    num: "01",
    label: "Discover",
    icon: "🔍",
    color: "rgba(168,85,247,0.15)",
    border: "rgba(168,85,247,0.3)",
    desc: "Understand your strengths, values, and unique potential through guided self-discovery exercises."
  }, {
    num: "02",
    label: "Explore",
    icon: "🌍",
    color: "rgba(79,70,229,0.15)",
    border: "rgba(79,70,229,0.3)",
    desc: "Get real-world exposure through industry visits, mentor interactions, and field experiences."
  }, {
    num: "03",
    label: "Build",
    icon: "🛠",
    color: "rgba(59,130,246,0.15)",
    border: "rgba(59,130,246,0.3)",
    desc: "Work on real challenges, team projects, and create a tangible portfolio that reflects your growth."
  }, {
    num: "04",
    label: "Reflect",
    icon: "💭",
    color: "rgba(20,184,166,0.15)",
    border: "rgba(20,184,166,0.3)",
    desc: "Process your experiences, extract lessons, and develop metacognitive skills for lifelong learning."
  }, {
    num: "05",
    label: "Grow",
    icon: "🚀",
    color: "rgba(34,197,94,0.15)",
    border: "rgba(34,197,94,0.3)",
    desc: "Emerge as a confident, self-aware, future-ready individual prepared to shape your own path."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "journey", style: {
    padding: isMobile ? "72px 20px" : "120px 24px",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "600px",
      height: "600px",
      background: "rgba(124,58,237,0.07)",
      top: "50%",
      right: "-200px",
      transform: "translateY(-50%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        textAlign: "center",
        marginBottom: "80px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "The Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "16px"
        }, children: [
          "Your transformation,",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "step by step." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "1.125rem",
          maxWidth: "560px",
          margin: "0 auto"
        }, children: "A carefully designed roadmap that takes you from confusion to clarity." })
      ] }) }),
      !isMobile && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "16px",
        position: "relative"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          top: "52px",
          left: "10%",
          right: "10%",
          height: "2px",
          background: "linear-gradient(90deg, rgba(168,85,247,0.4), rgba(34,197,94,0.4))",
          zIndex: 0
        } }),
        steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 1
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: s.color,
            border: `2px solid ${s.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            marginBottom: "20px",
            transition: "transform 0.3s ease"
          }, onMouseEnter: (e) => e.currentTarget.style.transform = "scale(1.1)", onMouseLeave: (e) => e.currentTarget.style.transform = "scale(1)", children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-text", style: {
            fontSize: "0.75rem",
            fontWeight: "700",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "6px"
          }, children: s.num }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontSize: "1.2rem",
            fontWeight: "700",
            marginBottom: "10px",
            color: "#e2e8f0"
          }, children: s.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            color: "#64748b",
            fontSize: "0.8125rem",
            lineHeight: "1.6",
            margin: 0
          }, children: s.desc })
        ] }) }, s.label))
      ] }),
      isMobile && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }, children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card", style: {
        borderRadius: "16px",
        padding: "24px",
        display: "flex",
        gap: "20px",
        alignItems: "flex-start"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: "56px",
          height: "56px",
          borderRadius: "14px",
          background: s.color,
          border: `1px solid ${s.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          flexShrink: 0
        }, children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-text", style: {
            fontSize: "0.7rem",
            fontWeight: "700",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "4px"
          }, children: s.num }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontSize: "1.125rem",
            fontWeight: "700",
            marginBottom: "8px",
            color: "#e2e8f0"
          }, children: s.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            color: "#64748b",
            fontSize: "0.875rem",
            lineHeight: "1.6",
            margin: 0
          }, children: s.desc })
        ] })
      ] }) }, s.label)) })
    ] })
  ] });
}
function FeaturesSection() {
  const isMobile = useIsMobile();
  const features = [{
    icon: "⚡",
    title: "Real-World Challenges",
    desc: "Tackle genuine business problems and community challenges that push your thinking beyond textbooks."
  }, {
    icon: "🤝",
    title: "Mentor Sessions",
    desc: "Regular 1:1 and group sessions with industry professionals who've walked the path you're on."
  }, {
    icon: "🏢",
    title: "Industry Exposure",
    desc: "Visit startups, enterprises, and creative studios to understand how real organizations operate."
  }, {
    icon: "🛠",
    title: "Team Projects",
    desc: "Collaborate on multi-week projects that simulate real professional environments and dynamics."
  }, {
    icon: "🎓",
    title: "Expert Workshops",
    desc: "Deep-dive workshops on communication, design thinking, entrepreneurship, and leadership."
  }, {
    icon: "🌐",
    title: "Peer Community",
    desc: "Connect with a curated network of ambitious students across cities and industries."
  }, {
    icon: "📁",
    title: "Portfolio Building",
    desc: "Create a documented showcase of your projects, skills, and growth story."
  }, {
    icon: "🧭",
    title: "Self-Discovery",
    desc: "Guided frameworks to understand your strengths, values, and the life you want to build."
  }, {
    icon: "👑",
    title: "Leadership Development",
    desc: "Step into roles that challenge you to lead, decide, and take responsibility for outcomes."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
    padding: isMobile ? "72px 20px" : "120px 24px",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "500px",
      height: "500px",
      background: "rgba(79,70,229,0.08)",
      top: "50%",
      left: "-100px",
      transform: "translateY(-50%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        textAlign: "center",
        marginBottom: "80px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "What Happens Inside" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "16px"
        }, children: [
          "Experiences that",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "actually matter." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "1.125rem",
          maxWidth: "560px",
          margin: "0 auto"
        }, children: "Every activity inside OffSyllabus is designed to build something real — skills, relationships, and self-knowledge." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px"
      }, children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card", style: {
        borderRadius: "20px",
        padding: "32px 28px",
        height: "100%"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: "52px",
          height: "52px",
          borderRadius: "14px",
          background: "rgba(124,58,237,0.1)",
          border: "1px solid rgba(124,58,237,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          marginBottom: "20px"
        }, children: f.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontSize: "1.125rem",
          fontWeight: "700",
          color: "#e2e8f0",
          marginBottom: "10px"
        }, children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "0.9rem",
          lineHeight: "1.65",
          margin: 0
        }, children: f.desc })
      ] }) }, f.title)) })
    ] })
  ] });
}
function SkillsSection() {
  const isMobile = useIsMobile();
  const skills = [{
    label: "Communication",
    icon: "🗣"
  }, {
    label: "Problem Solving",
    icon: "🧩"
  }, {
    label: "Leadership",
    icon: "👑"
  }, {
    label: "Critical Thinking",
    icon: "🧠"
  }, {
    label: "Creativity",
    icon: "🎨"
  }, {
    label: "Collaboration",
    icon: "🤝"
  }, {
    label: "Adaptability",
    icon: "🔄"
  }, {
    label: "Entrepreneurship",
    icon: "🚀"
  }, {
    label: "Digital Literacy",
    icon: "💻"
  }, {
    label: "Emotional Intelligence",
    icon: "❤️"
  }, {
    label: "Decision Making",
    icon: "⚖️"
  }, {
    label: "Public Speaking",
    icon: "🎤"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
    padding: isMobile ? "72px 20px" : "120px 24px",
    background: "rgba(0,0,0,0.2)",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "700px",
      height: "700px",
      background: "rgba(124,58,237,0.06)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        textAlign: "center",
        marginBottom: "72px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Future-Ready Skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "16px"
        }, children: [
          "Skills that",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "no textbook teaches." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "1.125rem",
          maxWidth: "560px",
          margin: "0 auto"
        }, children: "The capabilities that separate exceptional individuals from average ones are not found in any curriculum." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        justifyContent: "center"
      }, children: skills.map((skill, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skill-pill", style: {
        animationDelay: `${i * 50}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: skill.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: skill.label })
      ] }, skill.label)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        marginTop: "72px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }, children: [{
        label: "Academic Knowledge",
        value: 20,
        color: "#ef4444",
        suffix: "% of what matters"
      }, {
        label: "Soft Skills & Character",
        value: 80,
        color: "#7c3aed",
        suffix: "% of what matters"
      }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card", style: {
        borderRadius: "20px",
        padding: "32px 28px",
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          fontSize: "clamp(3rem, 7vw, 5rem)",
          fontWeight: "800",
          color: item.color,
          lineHeight: 1,
          marginBottom: "12px"
        }, children: [
          item.value,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          color: "#94a3b8",
          fontSize: "0.9rem",
          fontWeight: "500"
        }, children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          color: "#475569",
          fontSize: "0.8rem",
          marginTop: "4px"
        }, children: item.suffix })
      ] }, item.label)) }) })
    ] })
  ] });
}
function CohortSection() {
  const isMobile = useIsMobile();
  const experiences = [{
    icon: "🏬",
    title: "Mall Challenges",
    desc: "Real-world social experiments to build confidence, communication, and quick thinking."
  }, {
    icon: "🏢",
    title: "Startup Visits",
    desc: "Behind-the-scenes tours of thriving startups, meeting founders and understanding their journeys."
  }, {
    icon: "🎯",
    title: "Field Workshops",
    desc: "Hands-on workshops in creative and professional settings beyond traditional classrooms."
  }, {
    icon: "🎙",
    title: "Group Presentations",
    desc: "Regular opportunities to present ideas, receive feedback, and develop stage confidence."
  }, {
    icon: "🌿",
    title: "Community Events",
    desc: "Regular meetups, celebrations, and community-building activities that forge real friendships."
  }, {
    icon: "🔬",
    title: "Industry Labs",
    desc: "Immersive sessions inside organizations where students observe and participate in real work."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
    padding: isMobile ? "72px 20px" : "120px 24px",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "500px",
      height: "500px",
      background: "rgba(124,58,237,0.07)",
      top: "20%",
      right: "-100px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        textAlign: "center",
        marginBottom: "80px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Cohort Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "16px"
        }, children: [
          "Learning is an",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "adventure." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "1.125rem",
          maxWidth: "560px",
          margin: "0 auto"
        }, children: "OffSyllabus takes you out of the classroom and into the real world — where the real learning happens." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "24px"
      }, children: experiences.map((exp, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card", style: {
        borderRadius: "20px",
        padding: "36px 32px",
        display: "flex",
        gap: "20px",
        alignItems: "flex-start"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: "60px",
          height: "60px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,70,229,0.1))",
          border: "1px solid rgba(124,58,237,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.75rem",
          flexShrink: 0
        }, children: exp.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontSize: "1.125rem",
            fontWeight: "700",
            color: "#e2e8f0",
            marginBottom: "10px"
          }, children: exp.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            color: "#64748b",
            fontSize: "0.9rem",
            lineHeight: "1.65",
            margin: 0
          }, children: exp.desc })
        ] })
      ] }) }, exp.title)) })
    ] })
  ] });
}
function TransformationSection() {
  const isMobile = useIsMobile();
  const before = [{
    icon: "😕",
    text: "Confused about the future"
  }, {
    icon: "😴",
    text: "Passive learner, waiting for direction"
  }, {
    icon: "😰",
    text: "Career uncertainty and anxiety"
  }, {
    icon: "🤫",
    text: "Lack of confidence in self-expression"
  }, {
    icon: "📖",
    text: "Only knows what textbooks teach"
  }];
  const after = [{
    icon: "🎯",
    text: "Self-aware with clarity and purpose"
  }, {
    icon: "⚡",
    text: "Confident, action-oriented go-getter"
  }, {
    icon: "🚀",
    text: "Future-ready with a clear direction"
  }, {
    icon: "🎤",
    text: "Strong communicator who commands rooms"
  }, {
    icon: "🌍",
    text: "Builder of real-world experiences"
  }];
  const testimonials = [{
    name: "Raghav Omkar",
    age: "18",
    text: "The mentorship and learning environment at OffSyllabus changed my perspective completely. I realized success is not just about marks—it is about mindset, skills, execution, and continuous growth.",
    city: "Science"
  }, {
    name: "Mahi Pawar",
    age: "17",
    text: "The community at OffSyllabus is unlike anything I have experienced. Being surrounded by ambitious students motivated me to learn faster, think bigger, and become a better version of myself every day.",
    city: "Commerce"
  }, {
    name: "Aditri",
    age: "17",
    text: "Before OffSyllabus, I was unsure about my direction. The mentorship, projects, and supportive environment helped me gain confidence, discover my strengths, and take meaningful steps toward my goals.",
    city: "Science"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
    padding: isMobile ? "72px 20px" : "120px 24px",
    background: "rgba(0,0,0,0.25)",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "600px",
      height: "600px",
      background: "rgba(124,58,237,0.06)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        textAlign: "center",
        marginBottom: "80px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Student Transformation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "16px"
        }, children: [
          "See who you become",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "after." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "24px",
        marginBottom: "80px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "comparison-before", style: {
          borderRadius: "20px",
          padding: "36px 32px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem"
            }, children: "✗" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
              fontWeight: "700",
              fontSize: "1.125rem",
              color: "#fca5a5"
            }, children: "Before OffSyllabus" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }, children: before.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            gap: "14px",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              fontSize: "1.25rem",
              flexShrink: 0
            }, children: item.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#94a3b8",
              fontSize: "0.9375rem"
            }, children: item.text })
          ] }, item.text)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "comparison-after", style: {
          borderRadius: "20px",
          padding: "36px 32px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem"
            }, children: "✓" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
              fontWeight: "700",
              fontSize: "1.125rem",
              color: "#c4b5fd"
            }, children: "After OffSyllabus" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }, children: after.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            gap: "14px",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              fontSize: "1.25rem",
              flexShrink: 0
            }, children: item.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#e2e8f0",
              fontSize: "0.9375rem",
              fontWeight: "500"
            }, children: item.text })
          ] }, item.text)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px"
      }, children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card", style: {
        borderRadius: "20px",
        padding: "32px 28px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "flex",
          gap: "4px",
          marginBottom: "20px"
        }, children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          color: "#f59e0b",
          fontSize: "0.875rem"
        }, children: "★" }, s)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
          color: "#cbd5e1",
          fontSize: "0.9375rem",
          lineHeight: "1.7",
          marginBottom: "24px",
          fontStyle: "italic"
        }, children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
            color: "white",
            fontSize: "0.875rem"
          }, children: t.name[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontWeight: "600",
              color: "#e2e8f0",
              fontSize: "0.9rem"
            }, children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              color: "#64748b",
              fontSize: "0.8125rem"
            }, children: [
              "Age ",
              t.age,
              " · ",
              t.city
            ] })
          ] })
        ] })
      ] }) }, t.name)) })
    ] })
  ] });
}
function CommunitySection() {
  const isMobile = useIsMobile();
  const members = [{
    icon: "🧑‍🎓",
    label: "Students",
    desc: "Curious, ambitious learners aged 15–21 from diverse backgrounds"
  }, {
    icon: "🧑‍💼",
    label: "Mentors",
    desc: "Experienced professionals who've built real things in the real world"
  }, {
    icon: "🚀",
    label: "Founders",
    desc: "Entrepreneurs who share their playbooks and open their networks"
  }, {
    icon: "🌐",
    label: "Professionals",
    desc: "Industry experts from tech, design, business, and creative fields"
  }, {
    icon: "🏆",
    label: "Alumni",
    desc: "Past cohort members who give back and keep the ecosystem thriving"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
    padding: isMobile ? "72px 20px" : "120px 24px",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "600px",
      height: "600px",
      background: "rgba(124,58,237,0.07)",
      top: "30%",
      right: "-150px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        textAlign: "center",
        marginBottom: "80px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "The Community" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "16px"
        }, children: [
          "You don't grow alone.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "You grow together." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "1.125rem",
          maxWidth: "560px",
          margin: "0 auto"
        }, children: "OffSyllabus is an ecosystem — a network of people who push each other forward, hold each other accountable, and celebrate each other's wins." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginBottom: "64px"
      }, children: members.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card", style: {
        borderRadius: "20px",
        padding: "32px 24px",
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: "2.5rem",
          marginBottom: "16px"
        }, children: m.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontWeight: "700",
          fontSize: "1rem",
          color: "#e2e8f0",
          marginBottom: "10px"
        }, children: m.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "0.8125rem",
          lineHeight: "1.6",
          margin: 0
        }, children: m.desc })
      ] }) }, m.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px"
      }, children: [{
        icon: "🔗",
        label: "Networking",
        desc: "Real connections, not LinkedIn requests"
      }, {
        icon: "⚖️",
        label: "Accountability",
        desc: "Peers who keep you on track"
      }, {
        icon: "🤲",
        label: "Collaboration",
        desc: "Building together, growing together"
      }, {
        icon: "♾",
        label: "Lifelong Bonds",
        desc: "Relationships that outlast the cohort"
      }].map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        padding: "24px 20px",
        background: "rgba(124,58,237,0.05)",
        border: "1px solid rgba(124,58,237,0.12)",
        borderRadius: "14px",
        textAlign: "center",
        transition: "border-color 0.2s ease"
      }, onMouseEnter: (e) => e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)", onMouseLeave: (e) => e.currentTarget.style.borderColor = "rgba(124,58,237,0.12)", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: "1.75rem",
          marginBottom: "10px"
        }, children: val.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontWeight: "700",
          color: "#e2e8f0",
          fontSize: "0.9rem",
          marginBottom: "6px"
        }, children: val.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          color: "#64748b",
          fontSize: "0.8rem"
        }, children: val.desc })
      ] }, val.label)) }) })
    ] })
  ] });
}
function EligibilitySection() {
  const isMobile = useIsMobile();
  const criteria = ["Curious learners who never stop asking why", "Students aged 15–21 looking to grow beyond grades", "Builders and creators who love making things", "Future entrepreneurs with ideas and ambition", "Students seeking clarity about their path", "Learners who want more than academics can offer", "People who are willing to be challenged and grow", "Those ready to step outside their comfort zone"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
    padding: isMobile ? "72px 20px" : "120px 24px",
    background: "rgba(0,0,0,0.2)",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "500px",
      height: "500px",
      background: "rgba(124,58,237,0.07)",
      top: "50%",
      left: "-100px",
      transform: "translateY(-50%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))",
      gap: isMobile ? "48px" : "80px",
      alignItems: "center",
      position: "relative",
      zIndex: 1
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealSection, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Who Should Apply" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "20px",
          marginTop: "0"
        }, children: [
          "This is for students who",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "dare to be different." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "1rem",
          lineHeight: "1.7",
          marginBottom: "32px"
        }, children: "OffSyllabus is selective — not because we want to exclude, but because transformation requires commitment. We're looking for students who are genuinely ready to grow." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", className: "btn-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Check if You Qualify →" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }, children: criteria.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "check-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.75rem",
          color: "white",
          fontWeight: "700",
          flexShrink: 0
        }, children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          color: "#cbd5e1",
          fontSize: "0.9375rem"
        }, children: c })
      ] }, i)) }) })
    ] })
  ] });
}
function ApplicationSection() {
  const isMobile = useIsMobile();
  const steps = [{
    num: "01",
    title: "Apply",
    desc: "Fill out our application form. Tell us about yourself, your interests, and why you're ready for OffSyllabus.",
    icon: "📝"
  }, {
    num: "02",
    title: "Conversation",
    desc: "We schedule a short call to get to know you better — your aspirations, your mindset, and your readiness to grow.",
    icon: "💬"
  }, {
    num: "03",
    title: "Join the Cohort",
    desc: "Selected students receive an offer to join the cohort. Welcome to a community that will change your life.",
    icon: "🎉"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
    padding: isMobile ? "72px 20px" : "120px 24px",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "500px",
      height: "500px",
      background: "rgba(79,70,229,0.07)",
      top: "50%",
      right: "-100px",
      transform: "translateY(-50%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "1000px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        textAlign: "center",
        marginBottom: "80px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Application Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "16px"
        }, children: [
          "Three steps to",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "your transformation." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "1.125rem",
          maxWidth: "500px",
          margin: "0 auto"
        }, children: "Admission is selective. We carefully evaluate every applicant to ensure the cohort is the right fit." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "28px",
        marginBottom: "56px"
      }, children: steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "20px",
        padding: "40px 32px",
        position: "relative",
        transition: "border-color 0.3s ease"
      }, onMouseEnter: (e) => e.currentTarget.style.borderColor = "rgba(124,58,237,0.35)", onMouseLeave: (e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          position: "absolute",
          top: "-16px",
          left: "32px",
          background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
          borderRadius: "8px",
          padding: "4px 14px",
          fontSize: "0.75rem",
          fontWeight: "800",
          color: "white",
          letterSpacing: "0.05em"
        }, children: [
          "Step ",
          step.num
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: "2.5rem",
          marginBottom: "20px",
          marginTop: "8px"
        }, children: step.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontSize: "1.25rem",
          fontWeight: "700",
          color: "#e2e8f0",
          marginBottom: "12px"
        }, children: step.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#64748b",
          fontSize: "0.9rem",
          lineHeight: "1.65",
          margin: 0
        }, children: step.desc })
      ] }) }, step.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", className: "btn-primary", style: {
          fontSize: "1rem",
          padding: "16px 36px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Start Your Application →" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#475569",
          fontSize: "0.8125rem",
          marginTop: "16px"
        }, children: "Applications reviewed on a rolling basis. Limited seats per cohort." })
      ] }) })
    ] })
  ] });
}
function FAQSection() {
  const [open, setOpen] = reactExports.useState(null);
  const isMobile = useIsMobile();
  const faqs = [{
    q: "What is OffSyllabus?",
    a: "OffSyllabus is a structured growth ecosystem for students aged 15–21. It's not a coaching class, tuition center, or online course platform. It's a community-driven experience focused on self-discovery, real-world learning, mentorship, and future-ready skill development — everything that traditional education misses."
  }, {
    q: "Who can join OffSyllabus?",
    a: "Any student between 15–21 years old who is curious, motivated, and genuinely looking to grow beyond academic performance. We welcome students from any background, stream, or city — what matters is your mindset and readiness to be challenged."
  }, {
    q: "Is it career-focused?",
    a: "Indirectly, yes. OffSyllabus doesn't train you for a specific job — it develops the foundational skills, self-awareness, and real-world exposure that make you exceptional in whatever career path you choose. Students gain clarity about their direction, which often leads to much clearer career choices."
  }, {
    q: "How much time is required per week?",
    a: "Expect to commit 8–12 hours per week including sessions, project work, and community participation. This is a serious commitment — but it's the kind of commitment that changes your life. The program is designed to be intense but manageable alongside school or college."
  }, {
    q: "How is OffSyllabus different from coaching classes?",
    a: "Coaching classes focus on marks. OffSyllabus focuses on you as a person. We don't teach subjects — we develop people. You won't sit in rows listening to lectures. You'll be out in the world, building things, meeting professionals, reflecting on your experiences, and growing into the person you're meant to be."
  }, {
    q: "What outcomes can students expect?",
    a: "By the end of a cohort, students typically report: significantly increased self-awareness, a portfolio of real projects, a network of mentors and peers, improved communication and leadership skills, and most importantly — clarity about who they are and where they're headed."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
    padding: isMobile ? "72px 20px" : "120px 24px",
    background: "rgba(0,0,0,0.2)",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "500px",
      height: "500px",
      background: "rgba(124,58,237,0.06)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "800px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        textAlign: "center",
        marginBottom: "64px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "16px"
        }, children: [
          "Questions?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Answered." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }, children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        background: open === i ? "rgba(124,58,237,0.05)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${open === i ? "rgba(124,58,237,0.25)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "14px",
        overflow: "hidden",
        transition: "background 0.2s ease, border-color 0.2s ease"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === i ? null : i), style: {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "18px 20px" : "24px 28px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontWeight: "600",
            color: "#e2e8f0",
            fontSize: "0.9375rem"
          }, children: faq.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: open === i ? "rgba(124,58,237,0.2)" : "rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.25rem",
            color: open === i ? "#a78bfa" : "#64748b",
            flexShrink: 0,
            transition: "transform 0.3s ease, background 0.2s ease",
            transform: open === i ? "rotate(45deg)" : "none"
          }, children: "+" })
        ] }),
        open === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          padding: "0 28px 24px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#94a3b8",
          fontSize: "0.9375rem",
          lineHeight: "1.7",
          margin: 0
        }, children: faq.a }) })
      ] }) }, i)) })
    ] })
  ] });
}
function CTASection() {
  const isMobile = useIsMobile();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
    padding: isMobile ? "72px 20px" : "120px 24px",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "800px",
      height: "800px",
      background: "rgba(124,58,237,0.1)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "400px",
      height: "400px",
      background: "rgba(79,70,229,0.08)",
      top: "20%",
      right: "10%"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center",
      position: "relative",
      zIndex: 1
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 20px",
        background: "rgba(124,58,237,0.1)",
        border: "1px solid rgba(124,58,237,0.25)",
        borderRadius: "100px",
        fontSize: "0.8125rem",
        fontWeight: "600",
        color: "#c4b5fd",
        marginBottom: "32px",
        letterSpacing: "0.05em"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#a78bfa",
          display: "inline-block"
        } }),
        "Limited Cohort Seats"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
        fontSize: "clamp(2.5rem, 7vw, 5rem)",
        fontWeight: "800",
        letterSpacing: "-0.03em",
        lineHeight: 1.05,
        marginBottom: "24px"
      }, children: [
        "Your Future Won't Be Built",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Inside a Textbook." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        fontSize: "1.125rem",
        color: "#94a3b8",
        lineHeight: "1.75",
        maxWidth: "600px",
        margin: "0 auto 48px"
      }, children: "Join a community of ambitious students building the skills, mindset, and experiences needed to thrive in the real world." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", className: "btn-primary", style: {
          fontSize: "1.0625rem",
          padding: "18px 40px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Apply for the Next Cohort →" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "btn-secondary", style: {
          fontSize: "1.0625rem",
          padding: "18px 40px"
        }, children: "Learn More About Us" })
      ] })
    ] }) })
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    paddingTop: 0
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProblemSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(JourneySection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CohortSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TransformationSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CommunitySection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EligibilitySection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  HomePage as component
};
