import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as scholarships, c as countries, a as studyLevels, b as categories, f as fundingTypes } from "./router-Br47b9_3.mjs";
import { u as useIsMobile, R as RevealSection, S as SectionLabel } from "./scholarship-ui-CXdkzNQ5.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/lucide-react.mjs";
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
function ScholarshipsPage() {
  const isMobile = useIsMobile();
  const {
    saved,
    toggle
  } = useBookmarks();
  const [query, setQuery] = reactExports.useState("");
  const [country, setCountry] = reactExports.useState("All");
  const [studyLevel, setStudyLevel] = reactExports.useState("All");
  const [category, setCategory] = reactExports.useState("All");
  const [fundingType, setFundingType] = reactExports.useState("All");
  const [eligibilityOnly, setEligibilityOnly] = reactExports.useState(false);
  const filtered = reactExports.useMemo(() => {
    return scholarships.filter((s) => {
      const matchesQuery = query.trim() === "" || s.name.toLowerCase().includes(query.toLowerCase()) || s.organization.toLowerCase().includes(query.toLowerCase()) || s.country.toLowerCase().includes(query.toLowerCase()) || s.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const matchesCountry = country === "All" || s.country === country;
      const matchesLevel = studyLevel === "All" || s.studyLevel === studyLevel;
      const matchesCategory = category === "All" || s.category === category;
      const matchesFunding = fundingType === "All" || s.fundingType === fundingType;
      const matchesEligibility = !eligibilityOnly || saved.includes(s.slug);
      return matchesQuery && matchesCountry && matchesLevel && matchesCategory && matchesFunding && matchesEligibility;
    });
  }, [query, country, studyLevel, category, fundingType, eligibilityOnly, saved]);
  const featured = scholarships.filter((s) => s.featured);
  const recentlyAdded = scholarships.filter((s) => s.recentlyAdded);
  const recommended = scholarships.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    paddingTop: "68px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSearch, { query, setQuery, country, setCountry, studyLevel, setStudyLevel, category, setCategory, fundingType, setFundingType, eligibilityOnly, setEligibilityOnly, isMobile }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedRow, { scholarships: featured, isMobile }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RecommendedSection, { scholarships: recommended, isMobile }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MainGrid, { scholarships: filtered, isMobile, saved, toggle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RecentlyAddedSection, { scholarships: recentlyAdded, isMobile })
  ] });
}
function HeroSearch(props) {
  const {
    query,
    setQuery,
    country,
    setCountry,
    studyLevel,
    setStudyLevel,
    category,
    setCategory,
    fundingType,
    setFundingType,
    eligibilityOnly,
    setEligibilityOnly,
    isMobile
  } = props;
  const selectStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    color: "#cbd5e1",
    fontSize: "0.8125rem",
    padding: "10px 14px",
    cursor: "pointer",
    outline: "none"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
    position: "relative",
    overflow: "hidden",
    padding: isMobile ? "48px 20px 40px" : "80px 24px 56px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-orb", style: {
      width: "600px",
      height: "600px",
      background: "rgba(124,58,237,0.12)",
      top: "-100px",
      left: "50%",
      transform: "translateX(-50%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-pattern", style: {
      position: "absolute",
      inset: 0,
      opacity: 0.6
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      position: "relative",
      zIndex: 10,
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealSection, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 20px",
          background: "rgba(124,58,237,0.1)",
          border: "1px solid rgba(124,58,237,0.25)",
          borderRadius: "100px",
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: "#c4b5fd",
          marginBottom: "28px",
          letterSpacing: "0.05em"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#a78bfa",
            display: "inline-block"
          } }),
          scholarships.length,
          "+ scholarships from India and around the world"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
          fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          marginBottom: "20px"
        }, children: "Scholarships" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
          color: "#94a3b8",
          lineHeight: 1.75,
          maxWidth: "620px",
          margin: "0 auto 40px"
        }, children: "Find scholarships that can help fund your education, research, competitions, and global opportunities." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card", style: {
        display: "flex",
        gap: "8px",
        padding: "8px",
        borderRadius: "16px",
        maxWidth: "720px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search by organization, country, or keyword…", style: {
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          color: "#e2e8f0",
          padding: "12px 16px",
          fontSize: "0.9375rem"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary", style: {
          padding: "0 24px",
          fontSize: "0.875rem"
        }, onClick: () => {
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Search" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        marginTop: "24px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { style: selectStyle, value: country, onChange: (e) => setCountry(e.target.value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "Country: All" }),
          countries.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { style: selectStyle, value: studyLevel, onChange: (e) => setStudyLevel(e.target.value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "Study Level: All" }),
          studyLevels.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l, children: l }, l))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { style: selectStyle, value: category, onChange: (e) => setCategory(e.target.value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "Category: All" }),
          categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { style: selectStyle, value: fundingType, onChange: (e) => setFundingType(e.target.value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "Funding Type: All" }),
          fundingTypes.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: f, children: f }, f))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEligibilityOnly(!eligibilityOnly), style: {
          ...selectStyle,
          background: eligibilityOnly ? "rgba(124,58,237,0.15)" : selectStyle.background,
          borderColor: eligibilityOnly ? "rgba(124,58,237,0.4)" : selectStyle.border,
          color: eligibilityOnly ? "#c4b5fd" : "#cbd5e1"
        }, children: "★ Saved Only" })
      ] }) })
    ] })
  ] });
}
function FeaturedRow({
  scholarships: items,
  isMobile
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
    padding: isMobile ? "56px 20px" : "80px 24px"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    maxWidth: "1200px",
    margin: "0 auto"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Featured Scholarships" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontSize: "clamp(1.6rem, 4vw, 2.25rem)",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        marginBottom: "28px"
      }, children: "Top opportunities worth exploring" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "flex",
      gap: "18px",
      overflowX: "auto",
      paddingBottom: "12px"
    }, children: items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/scholarships/$slug", params: {
      slug: s.slug
    }, style: {
      minWidth: "230px",
      flexShrink: 0
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card", style: {
      borderRadius: "18px",
      padding: "24px",
      height: "100%",
      position: "relative",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "44px",
        height: "44px",
        borderRadius: "12px",
        background: s.logoColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        fontSize: "1rem",
        color: "#fff",
        marginBottom: "16px"
      }, children: s.logoText }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
        fontSize: "1rem",
        fontWeight: 700,
        color: "#e2e8f0",
        marginBottom: "6px"
      }, children: s.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-text", style: {
        fontSize: "0.8125rem",
        fontWeight: 600
      }, children: [
        s.fundingType,
        " · ",
        s.country
      ] })
    ] }) }, s.slug)) }) })
  ] }) });
}
function RecommendedSection({
  scholarships: items,
  isMobile
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
    padding: isMobile ? "56px 20px" : "80px 24px",
    background: "rgba(0,0,0,0.2)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    maxWidth: "1200px",
    margin: "0 auto"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Recommended For You" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
        fontSize: "clamp(1.6rem, 4vw, 2.25rem)",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        marginBottom: "10px"
      }, children: [
        "Picked using",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "AI-powered matching." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        color: "#64748b",
        fontSize: "0.9375rem",
        maxWidth: "520px",
        marginBottom: "28px"
      }, children: "Based on your interests and saved scholarships, here are opportunities you're likely to qualify for." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px"
    }, children: items.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/scholarships/$slug", params: {
      slug: s.slug
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card", style: {
      borderRadius: "18px",
      padding: "24px",
      display: "flex",
      gap: "16px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "48px",
        height: "48px",
        borderRadius: "12px",
        background: s.logoColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        color: "#fff",
        flexShrink: 0
      }, children: s.logoText }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontSize: "0.9375rem",
          fontWeight: 700,
          color: "#e2e8f0",
          marginBottom: "4px"
        }, children: s.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
          color: "#64748b",
          fontSize: "0.8125rem",
          margin: 0
        }, children: [
          s.studyLevel,
          " · ",
          s.category
        ] })
      ] })
    ] }) }) }, s.slug)) })
  ] }) });
}
function MainGrid({
  scholarships: items,
  isMobile,
  saved,
  toggle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
    padding: isMobile ? "56px 20px" : "80px 24px"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    maxWidth: "1200px",
    margin: "0 auto"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Browse Scholarships" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
        fontSize: "clamp(1.6rem, 4vw, 2.25rem)",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        marginBottom: "8px"
      }, children: [
        "Showing ",
        items.length,
        " scholarship",
        items.length !== 1 ? "s" : ""
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        color: "#64748b",
        fontSize: "0.9375rem",
        marginBottom: "32px"
      }, children: "Adjust filters above to narrow down results." })
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card", style: {
      borderRadius: "18px",
      padding: "48px",
      textAlign: "center"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      color: "#94a3b8",
      margin: 0
    }, children: "No scholarships match your filters. Try broadening your search." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: "22px"
    }, children: items.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: Math.min(i, 6) * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScholarshipCard, { scholarship: s, isSaved: saved.includes(s.slug), onToggleSave: () => toggle(s.slug) }) }, s.slug)) })
  ] }) });
}
function ScholarshipCard({
  scholarship,
  isSaved,
  onToggleSave
}) {
  const s = scholarship;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card", style: {
    borderRadius: "18px",
    padding: "22px",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "46px",
        height: "46px",
        borderRadius: "10px",
        background: s.logoColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        fontSize: "0.9rem",
        color: "#fff"
      }, children: s.logoText }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.preventDefault();
        onToggleSave();
      }, style: {
        width: "34px",
        height: "34px",
        borderRadius: "9px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: isSaved ? "rgba(124,58,237,0.15)" : "transparent",
        color: isSaved ? "#c4b5fd" : "#64748b",
        cursor: "pointer",
        fontSize: "0.9rem"
      }, "aria-label": isSaved ? "Remove bookmark" : "Save scholarship", children: isSaved ? "★" : "☆" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
      fontSize: "1.0625rem",
      fontWeight: 700,
      color: "#e2e8f0",
      marginTop: "16px",
      marginBottom: "2px"
    }, children: s.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      color: "#64748b",
      fontSize: "0.8125rem",
      marginBottom: "12px"
    }, children: s.organization }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      color: "#94a3b8",
      fontSize: "0.8125rem",
      lineHeight: 1.6,
      margin: 0,
      flexGrow: 1
    }, children: s.shortDescription.length > 130 ? s.shortDescription.slice(0, 130) + "…" : s.shortDescription }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginTop: "16px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        fontSize: "0.7rem",
        padding: "5px 10px",
        borderRadius: "7px",
        background: "rgba(34,197,94,0.12)",
        color: "#4ade80"
      }, children: s.fundingType }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        fontSize: "0.7rem",
        padding: "5px 10px",
        borderRadius: "7px",
        background: "rgba(255,255,255,0.05)",
        color: "#94a3b8"
      }, children: s.country }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        fontSize: "0.7rem",
        padding: "5px 10px",
        borderRadius: "7px",
        background: "rgba(255,255,255,0.05)",
        color: "#94a3b8"
      }, children: s.studyLevel })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px",
      marginTop: "10px"
    }, children: s.tags.slice(0, 3).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
      fontSize: "0.6875rem",
      padding: "4px 9px",
      borderRadius: "999px",
      border: "1px solid rgba(255,255,255,0.1)",
      color: "#64748b"
    }, children: t }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      gap: "10px",
      marginTop: "18px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/scholarships/$slug", params: {
        slug: s.slug
      }, style: {
        flex: 1
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "btn-primary", style: {
        textAlign: "center",
        width: "100%",
        fontSize: "0.8125rem",
        padding: "11px"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View Details" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: s.officialLink, target: "_blank", rel: "noopener noreferrer", style: {
        flex: 1
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "btn-secondary", style: {
        textAlign: "center",
        width: "100%",
        fontSize: "0.8125rem",
        padding: "11px"
      }, children: "Official Website" }) })
    ] })
  ] });
}
function RecentlyAddedSection({
  scholarships: items,
  isMobile
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
    padding: isMobile ? "56px 20px" : "80px 24px",
    background: "rgba(0,0,0,0.2)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    maxWidth: "1200px",
    margin: "0 auto"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Recently Added" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontSize: "clamp(1.6rem, 4vw, 2.25rem)",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        marginBottom: "28px"
      }, children: "New on OffSyllabus" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "18px"
    }, children: items.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealSection, { delay: i * 70, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/scholarships/$slug", params: {
      slug: s.slug
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card", style: {
      borderRadius: "16px",
      padding: "20px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "10px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: "36px",
          height: "36px",
          borderRadius: "9px",
          background: s.logoColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: "0.8rem",
          color: "#fff"
        }, children: s.logoText }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontSize: "0.9rem",
          fontWeight: 700,
          color: "#e2e8f0",
          margin: 0
        }, children: s.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
        color: "#64748b",
        fontSize: "0.8rem",
        margin: 0
      }, children: [
        s.country,
        " · ",
        s.studyLevel
      ] })
    ] }) }) }, s.slug)) })
  ] }) });
}
export {
  ScholarshipCard,
  ScholarshipsPage as component
};
