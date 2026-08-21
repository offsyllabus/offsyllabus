import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { R as Route$1, s as scholarships, S as ScholarshipCard } from "./_ssr/router-Br47b9_3.mjs";
import { u as useIsMobile, R as RevealSection, S as SectionLabel } from "./_ssr/scholarship-ui-CXdkzNQ5.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/lucide-react.mjs";
const BOOKMARK_KEY = "offsyllabus_saved_scholarships";
function useBookmarks() {
  const [saved, setSaved] = reactExports.useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = window.localStorage.getItem(BOOKMARK_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const toggle = (slug) => {
    setSaved((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      window.localStorage.setItem(BOOKMARK_KEY, JSON.stringify(next));
      return next;
    });
  };
  return {
    saved,
    toggle
  };
}
function ScholarshipDetailPage() {
  const {
    scholarship: s
  } = Route$1.useLoaderData();
  const isMobile = useIsMobile();
  const {
    saved,
    toggle
  } = useBookmarks();
  const isSaved = saved.includes(s.slug);
  const related = scholarships.filter((x) => x.slug !== s.slug && (x.category === s.category || x.country === s.country)).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    paddingTop: "68px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      position: "relative",
      overflow: "hidden",
      padding: isMobile ? "48px 20px 40px" : "72px 24px 56px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
        width: "600px",
        height: "600px",
        background: "rgba(124,58,237,0.12)",
        top: "-120px",
        left: "50%",
        transform: "translateX(-50%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-pattern", style: {
        position: "absolute",
        inset: 0,
        opacity: 0.5
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        position: "relative",
        zIndex: 10,
        maxWidth: "900px",
        margin: "0 auto"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealSection, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/scholarships", style: {
          color: "#a78bfa",
          fontSize: "0.875rem",
          fontWeight: 600
        }, children: "← Back to Scholarships" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "28px",
          marginBottom: "20px",
          flexWrap: "wrap"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            background: s.logoColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: "1.5rem",
            color: "#fff",
            flexShrink: 0
          }, children: s.logoText }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
              fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "6px"
            }, children: s.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              color: "#94a3b8",
              fontSize: "0.9375rem",
              margin: 0
            }, children: s.organization })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#cbd5e1",
          fontSize: "1.0625rem",
          lineHeight: 1.75,
          maxWidth: "760px",
          marginBottom: "32px"
        }, children: s.shortDescription }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "32px"
        }, children: [{
          label: s.fundingType,
          bg: "rgba(34,197,94,0.12)",
          color: "#4ade80"
        }, {
          label: s.country,
          bg: "rgba(255,255,255,0.05)",
          color: "#94a3b8"
        }, {
          label: s.studyLevel,
          bg: "rgba(255,255,255,0.05)",
          color: "#94a3b8"
        }, {
          label: s.category,
          bg: "rgba(124,58,237,0.12)",
          color: "#c4b5fd"
        }].map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontSize: "0.8125rem",
          padding: "8px 14px",
          borderRadius: "999px",
          background: chip.bg,
          color: chip.color,
          fontWeight: 600
        }, children: chip.label }, chip.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "14px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: s.officialLink, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "btn-primary", style: {
            padding: "14px 28px",
            fontSize: "0.9375rem"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Official Application Link →" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggle(s.slug), className: "btn-secondary", style: {
            padding: "14px 28px",
            fontSize: "0.9375rem",
            cursor: "pointer",
            color: isSaved ? "#c4b5fd" : void 0
          }, children: isSaved ? "★ Saved" : "☆ Save Scholarship" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      padding: isMobile ? "56px 20px" : "80px 24px"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
      gap: "48px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DetailBlock, { title: "Full Description", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#94a3b8",
          fontSize: "0.9375rem",
          lineHeight: 1.8,
          margin: 0
        }, children: s.fullDescription }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DetailBlock, { title: "Benefits", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChecklistBlock, { items: s.benefits }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DetailBlock, { title: "Eligibility Criteria", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChecklistBlock, { items: s.eligibilityCriteria }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DetailBlock, { title: "Required Documents", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChecklistBlock, { items: s.requiredDocuments }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DetailBlock, { title: "Application Process", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { style: {
          margin: 0,
          paddingLeft: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }, children: s.applicationProcess.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: {
          color: "#cbd5e1",
          fontSize: "0.9375rem",
          lineHeight: 1.7
        }, children: step }, i)) }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card", style: {
        borderRadius: "18px",
        padding: "28px",
        position: "sticky",
        top: "90px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontSize: "1rem",
          fontWeight: 700,
          color: "#e2e8f0",
          marginBottom: "18px"
        }, children: "Important Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          marginBottom: "20px"
        }, children: s.importantInfo.map((info, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: "10px",
          alignItems: "flex-start"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "#a78bfa",
            fontSize: "0.9rem",
            marginTop: "2px"
          }, children: "•" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "#94a3b8",
            fontSize: "0.8375rem",
            lineHeight: 1.6
          }, children: info })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "18px",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Funding", value: s.fundingAmount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Country", value: s.country }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Study Level", value: s.studyLevel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Category", value: s.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Eligibility", value: s.eligibility })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: s.officialLink, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "btn-primary", style: {
          textAlign: "center",
          marginTop: "20px",
          fontSize: "0.875rem"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Apply on Official Site →" }) }) })
      ] }) }) })
    ] }) }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
        padding: isMobile ? "56px 20px" : "80px 24px",
        background: "rgba(0,0,0,0.2)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        maxWidth: "1200px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealSection, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Related Scholarships" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
            fontSize: "clamp(1.6rem, 4vw, 2.25rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "28px"
          }, children: "You might also like" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: "22px"
        }, children: related.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScholarshipCard, { scholarship: r, isSaved: saved.includes(r.slug), onToggleSave: () => toggle(r.slug) }) }, r.slug)) })
      ] }) })
    ] })
  ] });
}
function DetailBlock({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    marginBottom: "40px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "#e2e8f0",
      marginBottom: "16px"
    }, children: title }),
    children
  ] });
}
function ChecklistBlock({
  items
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }, children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      width: "22px",
      height: "22px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.65rem",
      color: "#fff",
      fontWeight: 700,
      flexShrink: 0,
      marginTop: "2px"
    }, children: "✓" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
      color: "#cbd5e1",
      fontSize: "0.9375rem",
      lineHeight: 1.6
    }, children: item })
  ] }, i)) });
}
function InfoRow({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    gap: "12px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
      color: "#64748b",
      fontSize: "0.8125rem"
    }, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
      color: "#cbd5e1",
      fontSize: "0.8125rem",
      fontWeight: 600,
      textAlign: "right"
    }, children: value })
  ] });
}
export {
  ScholarshipDetailPage as component
};
