import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, Calendar, MapPin, DollarSign, Clock, GraduationCap, ExternalLink, Filter, X } from "lucide-react";
import { PROGRAMS, CATEGORIES, MODES, COSTS, LEVELS } from "../data/events-workshops";

export const Route = createFileRoute("/events-workshops")({
  component: EventsWorkshopsPage,
});

function EventsWorkshopsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedMode, setSelectedMode] = useState<string>("All");
  const [selectedCost, setSelectedCost] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const filteredPrograms = useMemo(() => {
    return PROGRAMS.filter((program) => {
      const matchesSearch =
        program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || program.category === selectedCategory;
      const matchesMode = selectedMode === "All" || program.mode === selectedMode;
      const matchesCost = selectedCost === "All" || program.cost === selectedCost;
      const matchesLevel = selectedLevel === "All" || program.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesMode && matchesCost && matchesLevel;
    });
  }, [searchQuery, selectedCategory, selectedMode, selectedCost, selectedLevel]);

  const activeFiltersCount = [
    selectedCategory !== "All",
    selectedMode !== "All",
    selectedCost !== "All",
    selectedLevel !== "All",
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedMode("All");
    setSelectedCost("All");
    setSelectedLevel("All");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c5cff]/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Explore Events & Workshops
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
            Discover the best learning opportunities from leading institutions and platforms to build real-world skills and advance your career.
          </p>
          <button
            onClick={() => document.getElementById("filters")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full bg-[#7c5cff] px-8 py-3.5 font-semibold text-white transition-all hover:bg-[#6b4fd9]"
          >
            Browse Events & Workshops
          </button>
        </div>
      </section>

      {/* Search & Filters */}
      <section id="filters" className="sticky top-0 z-40 border-b border-white/5 bg-[#0B0B0F]/95 backdrop-blur-xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events, cohorts, workshops"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-white placeholder-gray-500 outline-none transition-all focus:border-[#7c5cff]/50 focus:ring-2 focus:ring-[#7c5cff]/20"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">Filter by:</span>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#7c5cff]/50"
              >
                <option value="All" className="bg-[#1a1a2e]">All Categories</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c} className="bg-[#1a1a2e]">{c}</option>
                ))}
              </select>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#7c5cff]/50"
              >
                <option value="All" className="bg-[#1a1a2e]">All Modes</option>
                {MODES.map((m) => (
                  <option key={m} value={m} className="bg-[#1a1a2e]">{m}</option>
                ))}
              </select>
              <select
                value={selectedCost}
                onChange={(e) => setSelectedCost(e.target.value)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#7c5cff]/50"
              >
                <option value="All" className="bg-[#1a1a2e]">All Fees</option>
                {COSTS.map((c) => (
                  <option key={c} value={c} className="bg-[#1a1a2e]">{c}</option>
                ))}
              </select>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#7c5cff]/50"
              >
                <option value="All" className="bg-[#1a1a2e]">All Levels</option>
                {LEVELS.map((l) => (
                  <option key={l} value={l} className="bg-[#1a1a2e]">{l}</option>
                ))}
              </select>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-400 hover:text-white"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear ({activeFiltersCount})
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-400">
              Showing <span className="font-semibold text-white">{filteredPrograms.length}</span> events & workshops
            </p>
          </div>
          {filteredPrograms.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="mb-4 h-12 w-12 text-gray-600" />
              <h3 className="mb-2 text-xl font-semibold">No events found</h3>
              <p className="mb-6 text-gray-400">Try adjusting your filters or search query</p>
              <button
                onClick={clearFilters}
                className="rounded-full bg-[#7c5cff] px-6 py-2.5 font-semibold text-white transition-all hover:bg-[#6b4fd9]"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPrograms.map((program) => (
                <div
                  key={program.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-[#7c5cff]/30 hover:bg-white/[0.05]"
                >
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <div>
                      <span className="mb-2 inline-block rounded-full bg-[#7c5cff]/20 px-3 py-1 text-xs font-medium text-[#7c5cff]">
                        {program.category}
                      </span>
                      <h3 className="text-lg font-semibold leading-tight">{program.title}</h3>
                      <p className="mt-1 text-sm text-gray-400">{program.institution}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-gray-300 line-clamp-2">{program.description}</p>
                  <div className="mb-4 grid grid-cols-2 gap-2 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="h-3.5 w-3.5" />
                      <span>{program.eligibility}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{program.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{program.deadline}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="h-3.5 w-3.5" />
                      <span>{program.fee}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        program.cost === "Free" ? "bg-green-500/20 text-green-400" : "bg-amber-500/20 text-amber-400"
                      }`}>
                        {program.cost}
                      </span>
                    </div>
                  </div>
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#7c5cff] py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#6b4fd9]"
                  >
                    Register Now
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
