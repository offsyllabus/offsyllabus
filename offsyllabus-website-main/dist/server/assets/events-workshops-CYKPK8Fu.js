import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-OEANOqc_.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$8 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$8);
const __iconNode$7 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$7);
const __iconNode$6 = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const CATEGORIES = [
  "Private Universities",
  "Government Universities",
  "Corporate Programs",
  "Investor & Venture Capitalist Programs",
  "Private Educator Programs",
  "Other / Unorthodox Programs"
];
const MODES = ["Online", "Offline", "Hybrid"];
const COSTS = ["Free", "Paid"];
const LEVELS = ["Beginner", "Intermediate"];
const PROGRAMS = [
  {
    id: "iim-ranchi-young-changemakers",
    title: "Young Changemakers Program",
    institution: "IIM Ranchi",
    category: "Government Universities",
    mode: "Hybrid",
    cost: "Paid",
    level: "Beginner",
    eligibility: "Ages 15–22",
    duration: "6 weeks",
    location: "Ranchi, India + Online",
    deadline: "Rolling admissions",
    fee: "₹9,999",
    description: "An IIM Ranchi flagship cohort building social impact, leadership, and entrepreneurial mindset in young changemakers.",
    url: "https://iimranchi.ac.in/"
  },
  {
    id: "iim-bangalore-young-entrepreneurship",
    title: "Young Entrepreneurship Program",
    institution: "IIM Bangalore",
    category: "Government Universities",
    mode: "Hybrid",
    cost: "Paid",
    level: "Beginner",
    eligibility: "Ages 16–24",
    duration: "8 weeks",
    location: "Bangalore, India + Online",
    deadline: "Cohorts open quarterly",
    fee: "₹14,999",
    description: "NSRCEL-backed program covering ideation, business modelling, MVPs and pitching, taught by IIMB faculty and founders.",
    url: "https://www.nsrcel.org/"
  },
  {
    id: "iit-madras-summer-fellowship",
    title: "Summer Research Fellowship",
    institution: "IIT Madras",
    category: "Government Universities",
    mode: "Offline",
    cost: "Free",
    level: "Intermediate",
    eligibility: "Undergraduates (ages 18–24)",
    duration: "8 weeks (May–July)",
    location: "Chennai, India",
    deadline: "February each year",
    fee: "Free (stipend provided)",
    description: "Paid research fellowship across engineering, sciences, and humanities under IIT Madras faculty mentorship.",
    url: "https://www.iitm.ac.in/"
  },
  {
    id: "iit-bombay-eureka",
    title: "Eureka! Business Model Competition",
    institution: "IIT Bombay (E-Cell)",
    category: "Government Universities",
    mode: "Hybrid",
    cost: "Free",
    level: "Intermediate",
    eligibility: "Students & early-stage founders (ages 18–25)",
    duration: "4 months",
    location: "Mumbai, India + Online",
    deadline: "September each year",
    fee: "Free",
    description: "Asia's largest student-run business model competition with mentorship, workshops, and ₹1Cr+ in prizes.",
    url: "https://www.ecell.in/eureka/"
  },
  {
    id: "ashoka-young-scholars",
    title: "Young Scholars Programme",
    institution: "Ashoka University",
    category: "Private Universities",
    mode: "Offline",
    cost: "Paid",
    level: "Beginner",
    eligibility: "Grades 9–11 (ages 15–17)",
    duration: "2 weeks (residential)",
    location: "Sonipat, India",
    deadline: "April each year",
    fee: "₹65,000",
    description: "A liberal arts residential summer programme — academic exploration, debates, and creative writing on campus.",
    url: "https://www.ashoka.edu.in/ysp"
  },
  {
    id: "isb-young-leaders",
    title: "Young Leaders Programme",
    institution: "Indian School of Business (ISB)",
    category: "Private Universities",
    mode: "Hybrid",
    cost: "Paid",
    level: "Intermediate",
    eligibility: "Pre-final & final year undergrads (ages 19–22)",
    duration: "Deferred MBA pathway",
    location: "Hyderabad / Mohali",
    deadline: "April / September",
    fee: "Application based",
    description: "Deferred admission to ISB's PGP with leadership workshops, mentorship and a head-start on a top MBA.",
    url: "https://www.isb.edu/en/study-isb/postgraduate-programmes/ylp.html"
  },
  {
    id: "harvard-pre-college",
    title: "Harvard Pre-College Program",
    institution: "Harvard University",
    category: "Private Universities",
    mode: "Offline",
    cost: "Paid",
    level: "Intermediate",
    eligibility: "High schoolers (ages 16–18)",
    duration: "2 weeks (summer)",
    location: "Cambridge, MA, USA",
    deadline: "January each year",
    fee: "USD $5,300",
    description: "On-campus Harvard summer experience — non-credit academic courses with Harvard faculty and global peers.",
    url: "https://precollege.summer.harvard.edu/"
  },
  {
    id: "stanford-spcs-summer",
    title: "Stanford Summer Session",
    institution: "Stanford University",
    category: "Private Universities",
    mode: "Hybrid",
    cost: "Paid",
    level: "Intermediate",
    eligibility: "High school & college students (ages 16–24)",
    duration: "8 weeks",
    location: "Stanford, CA, USA + Online",
    deadline: "March each year",
    fee: "USD ~$17,000",
    description: "Credit-bearing Stanford courses across CS, engineering, design, and humanities for ambitious students.",
    url: "https://summer.stanford.edu/"
  },
  {
    id: "mit-launch",
    title: "MIT LaunchX Entrepreneurship",
    institution: "MIT Launch",
    category: "Private Universities",
    mode: "Hybrid",
    cost: "Paid",
    level: "Intermediate",
    eligibility: "High schoolers (ages 15–18)",
    duration: "4 weeks (summer)",
    location: "Cambridge, MA, USA + Online",
    deadline: "March each year",
    fee: "USD $6,500",
    description: "Launch a real startup over the summer — build a team, ship an MVP, and pitch to investors with MIT mentors.",
    url: "https://www.launchx.com/"
  },
  {
    id: "yc-startup-school",
    title: "Startup School",
    institution: "Y Combinator",
    category: "Investor & Venture Capitalist Programs",
    mode: "Online",
    cost: "Free",
    level: "Beginner",
    eligibility: "Aspiring founders (ages 18+)",
    duration: "Self-paced (10 weeks)",
    location: "Online (global)",
    deadline: "Always open",
    fee: "Free",
    description: "Free YC program with founder talks, weekly group sessions, and the playbook used by 4,000+ YC startups.",
    url: "https://www.startupschool.org/"
  },
  {
    id: "techstars-startup-weekend",
    title: "Techstars Startup Weekend",
    institution: "Techstars",
    category: "Investor & Venture Capitalist Programs",
    mode: "Offline",
    cost: "Paid",
    level: "Beginner",
    eligibility: "Open to all (ages 16+)",
    duration: "54 hours",
    location: "150+ cities worldwide",
    deadline: "Rolling (per city)",
    fee: "USD $25–75",
    description: "Pitch an idea Friday, build it with a team over the weekend, demo to local investors on Sunday.",
    url: "https://www.techstars.com/communities/startup-weekend"
  },
  {
    id: "sequoia-spark",
    title: "Spark Fellowship",
    institution: "Peak XV (formerly Sequoia India)",
    category: "Investor & Venture Capitalist Programs",
    mode: "Hybrid",
    cost: "Free",
    level: "Intermediate",
    eligibility: "Women founders (ages 21+)",
    duration: "16 weeks",
    location: "India & SEA + Online",
    deadline: "Annual cohort",
    fee: "Free + USD $100K grant",
    description: "Mentorship-driven fellowship for early-stage women founders with capital, network, and Peak XV partner access.",
    url: "https://www.peakxv.com/spark/"
  },
  {
    id: "antler-residency",
    title: "Antler Founder Residency",
    institution: "Antler",
    category: "Investor & Venture Capitalist Programs",
    mode: "Offline",
    cost: "Free",
    level: "Intermediate",
    eligibility: "Aspiring founders (ages 21+)",
    duration: "10 weeks",
    location: "Bangalore / 25+ cities",
    deadline: "Cohorts every 4 months",
    fee: "Free + up to USD $250K investment",
    description: "Find a co-founder, validate an idea, and raise pre-seed capital from Antler in a structured residency.",
    url: "https://www.antler.co/"
  },
  {
    id: "nsrcel-launchpad",
    title: "Launchpad Incubation",
    institution: "NSRCEL, IIM Bangalore",
    category: "Investor & Venture Capitalist Programs",
    mode: "Hybrid",
    cost: "Free",
    level: "Intermediate",
    eligibility: "Early-stage founders (ages 18+)",
    duration: "6 months",
    location: "Bangalore + Online",
    deadline: "Bi-annual",
    fee: "Free (equity-free grants available)",
    description: "Structured incubation with IIMB mentors, investor connects, and grant funding for early-stage Indian startups.",
    url: "https://www.nsrcel.org/"
  },
  {
    id: "deeplearning-ai-ml",
    title: "Machine Learning Specialization",
    institution: "DeepLearning.AI × Stanford",
    category: "Private Educator Programs",
    mode: "Online",
    cost: "Paid",
    level: "Beginner",
    eligibility: "Students & professionals (ages 16+)",
    duration: "3 months (5–10 hrs/week)",
    location: "Online (global)",
    deadline: "Always open",
    fee: "USD $49/month (Coursera)",
    description: "Andrew Ng's foundational ML course — supervised learning, neural networks, and best practices.",
    url: "https://www.deeplearning.ai/courses/machine-learning-specialization/"
  },
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials",
    institution: "Google",
    category: "Corporate Programs",
    mode: "Online",
    cost: "Paid",
    level: "Beginner",
    eligibility: "Students & professionals (ages 16+)",
    duration: "~10 hours self-paced",
    location: "Online (global)",
    deadline: "Always open",
    fee: "USD $49",
    description: "Hands-on AI workshop from Google — prompt engineering, productivity, and responsible AI fundamentals.",
    url: "https://grow.google/ai-essentials/"
  },
  {
    id: "microsoft-future-ready",
    title: "Future Ready Talent Internship",
    institution: "Microsoft",
    category: "Corporate Programs",
    mode: "Online",
    cost: "Free",
    level: "Beginner",
    eligibility: "College students in India (ages 18–24)",
    duration: "8 weeks",
    location: "Online (India)",
    deadline: "Cohorts every 2 months",
    fee: "Free",
    description: "Project-based virtual internship on Azure cloud with industry mentors and a Microsoft completion certificate.",
    url: "https://futurereadytalent.in/"
  },
  {
    id: "google-step",
    title: "STEP Internship",
    institution: "Google",
    category: "Corporate Programs",
    mode: "Hybrid",
    cost: "Free",
    level: "Intermediate",
    eligibility: "1st & 2nd year undergrads (ages 18–21)",
    duration: "12 weeks (summer)",
    location: "Bangalore / Hyderabad / Global",
    deadline: "October–November",
    fee: "Free (paid internship)",
    description: "Google's flagship early-career internship — real engineering projects, mentorship, and a paid summer at Google.",
    url: "https://buildyourfuture.withgoogle.com/programs/step"
  },
  {
    id: "interaction-design-foundation",
    title: "UX & Design Thinking Courses",
    institution: "Interaction Design Foundation",
    category: "Private Educator Programs",
    mode: "Online",
    cost: "Paid",
    level: "Beginner",
    eligibility: "Open to all (ages 16+)",
    duration: "Self-paced",
    location: "Online (global)",
    deadline: "Always open",
    fee: "USD $16/month",
    description: "Industry-recognised UX, design thinking, and product design courses with mentorship and a portfolio.",
    url: "https://www.interaction-design.org/"
  },
  {
    id: "product-school-pm",
    title: "Product Management Certificate",
    institution: "Product School",
    category: "Corporate Programs",
    mode: "Hybrid",
    cost: "Paid",
    level: "Intermediate",
    eligibility: "Aspiring PMs (ages 19+)",
    duration: "8 weeks (part-time)",
    location: "Global + Online",
    deadline: "Monthly cohorts",
    fee: "USD $3,999",
    description: "Live instruction on product strategy, roadmapping, metrics, and stakeholder management.",
    url: "https://productschool.com/"
  },
  {
    id: "on-deck-fellowship",
    title: "On Deck Founders Fellowship",
    institution: "On Deck",
    category: "Other / Unorthodox Programs",
    mode: "Hybrid",
    cost: "Paid",
    level: "Intermediate",
    eligibility: "Aspiring founders (ages 21+)",
    duration: "10 weeks",
    location: "Online + global retreats",
    deadline: "Quarterly",
    fee: "USD $3,490",
    description: "A high-signal founder community to find co-founders, validate ideas, and raise from 250+ partner funds.",
    url: "https://www.beondeck.com/"
  },
  {
    id: "harvard-cs50",
    title: "CS50: Introduction to Computer Science",
    institution: "Harvard University",
    category: "Private Universities",
    mode: "Online",
    cost: "Free",
    level: "Beginner",
    eligibility: "Open to all (ages 15+)",
    duration: "11 weeks self-paced",
    location: "Online (global)",
    deadline: "Always open",
    fee: "Free (optional certificate USD $199)",
    description: "Harvard's flagship intro to computer science — algorithms, data structures, and the web.",
    url: "https://cs50.harvard.edu/"
  },
  {
    id: "mit-ocw-intro-cs",
    title: "Intro to CS and Programming in Python",
    institution: "MIT OpenCourseWare",
    category: "Private Universities",
    mode: "Online",
    cost: "Free",
    level: "Beginner",
    eligibility: "Open to all (ages 15+)",
    duration: "9 weeks self-paced",
    location: "Online (global)",
    deadline: "Always open",
    fee: "Free",
    description: "Foundational programming and CS concepts using Python, taught by MIT faculty.",
    url: "https://ocw.mit.edu/"
  },
  {
    id: "ted-ed-student-talks",
    title: "TED-Ed Student Talks Program",
    institution: "TED-Ed",
    category: "Other / Unorthodox Programs",
    mode: "Hybrid",
    cost: "Free",
    level: "Beginner",
    eligibility: "Students (ages 8–18)",
    duration: "13 sessions",
    location: "Online + local clubs",
    deadline: "Rolling",
    fee: "Free",
    description: "Discover, develop, and share a big idea in the form of a short, TED-style talk — public speaking for students.",
    url: "https://ed.ted.com/student-talks"
  },
  {
    id: "cfa-investment-foundations",
    title: "Investment Foundations Certificate",
    institution: "CFA Institute",
    category: "Other / Unorthodox Programs",
    mode: "Online",
    cost: "Paid",
    level: "Beginner",
    eligibility: "Students & professionals (ages 17+)",
    duration: "100 hours self-paced",
    location: "Online (global)",
    deadline: "Always open",
    fee: "USD $350",
    description: "Globally recognised intro to investment industry — ethics, asset classes, and financial markets.",
    url: "https://www.cfainstitute.org/programs/investment-foundations"
  },
  {
    id: "varsity-by-zerodha",
    title: "Varsity — Stock Markets & Finance",
    institution: "Zerodha Varsity",
    category: "Private Educator Programs",
    mode: "Online",
    cost: "Free",
    level: "Beginner",
    eligibility: "Open to all (ages 16+)",
    duration: "Self-paced modules",
    location: "Online (India)",
    deadline: "Always open",
    fee: "Free",
    description: "India's most popular free financial markets curriculum — from basics to derivatives and personal finance.",
    url: "https://zerodha.com/varsity/"
  },
  {
    id: "unleash-changemaker-lab",
    title: "UNLEASH Innovation Lab",
    institution: "UNLEASH (UN SDGs)",
    category: "Other / Unorthodox Programs",
    mode: "Offline",
    cost: "Paid",
    level: "Intermediate",
    eligibility: "Young talents (ages 18–35)",
    duration: "9 days",
    location: "Hosted globally each year",
    deadline: "Annual application",
    fee: "Travel-only (program subsidised)",
    description: "A global innovation lab where 1,000 young people prototype solutions to UN Sustainable Development Goals.",
    url: "https://unleash.org/"
  },
  {
    id: "global-changemakers",
    title: "Global Changemakers Fellowship",
    institution: "Global Changemakers",
    category: "Other / Unorthodox Programs",
    mode: "Hybrid",
    cost: "Free",
    level: "Beginner",
    eligibility: "Ages 18–25",
    duration: "1 year",
    location: "Global + Online",
    deadline: "Annual",
    fee: "Free",
    description: "Youth-led social impact fellowship — training, grants, and a global network of changemakers.",
    url: "https://globalchangemakers.org/"
  },
  {
    id: "t-hub-youth",
    title: "T-Hub Youth Innovation Program",
    institution: "T-Hub, Hyderabad",
    category: "Other / Unorthodox Programs",
    mode: "Offline",
    cost: "Free",
    level: "Beginner",
    eligibility: "Ages 16–22",
    duration: "3 months",
    location: "Hyderabad, India",
    deadline: "Quarterly",
    fee: "Free",
    description: "Early-stage innovation bootcamp for young founders — idea validation, prototyping, and investor pitch days.",
    url: "https://t-hub.co/"
  },
  {
    id: "teach-for-ind Fellowship",
    title: "Teach For India Fellowship",
    institution: "Teach For India",
    category: "Other / Unorthodox Programs",
    mode: "Offline",
    cost: "Free",
    level: "Intermediate",
    eligibility: "Ages 21–30",
    duration: "2 years",
    location: "7 cities across India",
    deadline: "September / January",
    fee: "Stipend + benefits",
    description: "A prestigious 2-year teaching fellowship placing graduates in under-resourced classrooms to bridge educational inequity.",
    url: "https://www.teachforindia.org/"
  }
];
function EventsWorkshopsPage() {
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedCategory, setSelectedCategory] = reactExports.useState("All");
  const [selectedMode, setSelectedMode] = reactExports.useState("All");
  const [selectedCost, setSelectedCost] = reactExports.useState("All");
  const [selectedLevel, setSelectedLevel] = reactExports.useState("All");
  const filteredPrograms = reactExports.useMemo(() => {
    return PROGRAMS.filter((program) => {
      const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) || program.institution.toLowerCase().includes(searchQuery.toLowerCase()) || program.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || program.category === selectedCategory;
      const matchesMode = selectedMode === "All" || program.mode === selectedMode;
      const matchesCost = selectedCost === "All" || program.cost === selectedCost;
      const matchesLevel = selectedLevel === "All" || program.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesMode && matchesCost && matchesLevel;
    });
  }, [searchQuery, selectedCategory, selectedMode, selectedCost, selectedLevel]);
  const activeFiltersCount = [selectedCategory !== "All", selectedMode !== "All", selectedCost !== "All", selectedLevel !== "All"].filter(Boolean).length;
  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedMode("All");
    setSelectedCost("All");
    setSelectedLevel("All");
    setSearchQuery("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#0B0B0F] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#7c5cff]/10 via-transparent to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl", children: "Explore Events & Workshops" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mb-8 max-w-2xl text-lg text-gray-400", children: "Discover the best learning opportunities from leading institutions and platforms to build real-world skills and advance your career." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => document.getElementById("filters")?.scrollIntoView({
          behavior: "smooth"
        }), className: "inline-flex items-center gap-2 rounded-full bg-[#7c5cff] px-8 py-3.5 font-semibold text-white transition-all hover:bg-[#6b4fd9]", children: "Browse Events & Workshops" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "filters", className: "sticky top-0 z-40 border-b border-white/5 bg-[#0B0B0F]/95 backdrop-blur-xl px-4 py-6 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search events, cohorts, workshops", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-white placeholder-gray-500 outline-none transition-all focus:border-[#7c5cff]/50 focus:ring-2 focus:ring-[#7c5cff]/20" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4 text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-400", children: "Filter by:" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: selectedCategory, onChange: (e) => setSelectedCategory(e.target.value), className: "rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#7c5cff]/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", className: "bg-[#1a1a2e]", children: "All Categories" }),
          CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, className: "bg-[#1a1a2e]", children: c }, c))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: selectedMode, onChange: (e) => setSelectedMode(e.target.value), className: "rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#7c5cff]/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", className: "bg-[#1a1a2e]", children: "All Modes" }),
          MODES.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m, className: "bg-[#1a1a2e]", children: m }, m))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: selectedCost, onChange: (e) => setSelectedCost(e.target.value), className: "rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#7c5cff]/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", className: "bg-[#1a1a2e]", children: "All Fees" }),
          COSTS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, className: "bg-[#1a1a2e]", children: c }, c))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: selectedLevel, onChange: (e) => setSelectedLevel(e.target.value), className: "rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#7c5cff]/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", className: "bg-[#1a1a2e]", children: "All Levels" }),
          LEVELS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l, className: "bg-[#1a1a2e]", children: l }, l))
        ] }),
        activeFiltersCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: clearFilters, className: "flex items-center gap-1 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-400 hover:text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }),
          "Clear (",
          activeFiltersCount,
          ")"
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400", children: [
        "Showing ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-white", children: filteredPrograms.length }),
        " events & workshops"
      ] }) }),
      filteredPrograms.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "mb-4 h-12 w-12 text-gray-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-xl font-semibold", children: "No events found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-gray-400", children: "Try adjusting your filters or search query" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearFilters, className: "rounded-full bg-[#7c5cff] px-6 py-2.5 font-semibold text-white transition-all hover:bg-[#6b4fd9]", children: "Clear all filters" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: filteredPrograms.map((program) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-[#7c5cff]/30 hover:bg-white/[0.05]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex items-start justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 inline-block rounded-full bg-[#7c5cff]/20 px-3 py-1 text-xs font-medium text-[#7c5cff]", children: program.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold leading-tight", children: program.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-400", children: program.institution })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm text-gray-300 line-clamp-2", children: program.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 grid grid-cols-2 gap-2 text-xs text-gray-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: program.eligibility })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: program.duration })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: program.location })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: program.deadline })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: program.fee })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2 py-0.5 text-[10px] font-medium ${program.cost === "Free" ? "bg-green-500/20 text-green-400" : "bg-amber-500/20 text-amber-400"}`, children: program.cost }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: program.link, target: "_blank", rel: "noopener noreferrer", className: "flex w-full items-center justify-center gap-2 rounded-xl bg-[#7c5cff] py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#6b4fd9]", children: [
          "Register Now",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" })
        ] })
      ] }, program.id)) })
    ] }) })
  ] });
}
export {
  EventsWorkshopsPage as component
};
