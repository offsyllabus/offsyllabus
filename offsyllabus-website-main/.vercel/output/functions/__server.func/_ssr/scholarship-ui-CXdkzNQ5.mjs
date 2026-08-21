import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function SectionLabel({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-label", style: { marginBottom: "20px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        style: {
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#a78bfa",
          display: "inline-block"
        }
      }
    ),
    children
  ] });
}
function useIntersection(threshold = 0.1) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
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
  const { ref, visible } = useIntersection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
      },
      children
    }
  );
}
export {
  RevealSection as R,
  SectionLabel as S,
  useIsMobile as u
};
