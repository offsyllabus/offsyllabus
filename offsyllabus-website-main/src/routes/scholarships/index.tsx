import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { PROGRAMS, CATEGORIES, MODES, COSTS, LEVELS, type Program } from '../../data/scholarships'
import { RevealSection, SectionLabel, useIsMobile } from '../../components/scholarship-ui'

export const Route = createFileRoute('/scholarships/')({
  component: ScholarshipsPage,
})

const BOOKMARK_KEY = 'offsyllabus_saved_scholarships'
const PAGE_SIZE = 24

function getInitials(name: string) {
  return (
    name
      .replace(/[^A-Za-z0-9 ]/g, '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join('') || '?'
  )
}

const LOGO_BG = 'linear-gradient(135deg, #7c3aed, #4f46e5)'

function useBookmarks() {
  const [saved, setSaved] = useState<string[]>(() => {
    if (typeof window === 'undefined') return []
    try {
      const raw = window.localStorage.getItem(BOOKMARK_KEY)
      return raw ? (JSON.parse(raw) as string[]) : []
    } catch {
      return []
    }
  })

  const toggle = (id: string) => {
    setSaved((prev) => {
      const next = prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
      try {
        window.localStorage.setItem(BOOKMARK_KEY, JSON.stringify(next))
      } catch {}
      return next
    })
  }

  return { saved, toggle }
}

function ScholarshipsPage() {
  const isMobile = useIsMobile()
  const { saved, toggle } = useBookmarks()

  const [query, setQuery] = useState('')
  const [mode, setMode] = useState<string>('All')
  const [level, setLevel] = useState<string>('All')
  const [category, setCategory] = useState<string>('All')
  const [cost, setCost] = useState<string>('All')
  const [savedOnly, setSavedOnly] = useState(false)
  const [visible, setVisible] = useState(PAGE_SIZE)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PROGRAMS.filter((p) => {
      const matchesQuery =
        q === '' ||
        p.title.toLowerCase().includes(q) ||
        p.institution.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      const matchesMode = mode === 'All' || p.mode === mode
      const matchesLevel = level === 'All' || p.level === level
      const matchesCategory = category === 'All' || p.category === category
      const matchesCost = cost === 'All' || p.cost === cost
      const matchesSaved = !savedOnly || saved.includes(p.id)
      return matchesQuery && matchesMode && matchesLevel && matchesCategory && matchesCost && matchesSaved
    })
  }, [query, mode, level, category, cost, savedOnly, saved])

  const featured = PROGRAMS.slice(0, 8)
  const recommended = PROGRAMS.slice(8, 11)
  const recentlyAdded = PROGRAMS.slice(-6).reverse()

  const resetVisible = () => setVisible(PAGE_SIZE)

  return (
    <div style={{ paddingTop: '68px' }}>
      <HeroSearch
        query={query}
        setQuery={(v) => {
          setQuery(v)
          resetVisible()
        }}
        mode={mode}
        setMode={(v) => {
          setMode(v)
          resetVisible()
        }}
        level={level}
        setLevel={(v) => {
          setLevel(v)
          resetVisible()
        }}
        category={category}
        setCategory={(v) => {
          setCategory(v)
          resetVisible()
        }}
        cost={cost}
        setCost={(v) => {
          setCost(v)
          resetVisible()
        }}
        savedOnly={savedOnly}
        setSavedOnly={(v) => {
          setSavedOnly(v)
          resetVisible()
        }}
        isMobile={isMobile}
      />

      <div className="gradient-divider" />

      <FeaturedRow items={featured} isMobile={isMobile} />

      <div className="gradient-divider" />

      <RecommendedSection items={recommended} isMobile={isMobile} />

      <div className="gradient-divider" />

      <MainGrid
        items={filtered}
        visible={visible}
        onLoadMore={() => setVisible((v) => v + PAGE_SIZE)}
        isMobile={isMobile}
        saved={saved}
        toggle={toggle}
      />

      <div className="gradient-divider" />

      <RecentlyAddedSection items={recentlyAdded} isMobile={isMobile} />
    </div>
  )
}

// ─── Hero + Search + Filters ─────────────────────────────────────────────────

function HeroSearch(props: {
  query: string
  setQuery: (v: string) => void
  mode: string
  setMode: (v: string) => void
  level: string
  setLevel: (v: string) => void
  category: string
  setCategory: (v: string) => void
  cost: string
  setCost: (v: string) => void
  savedOnly: boolean
  setSavedOnly: (v: boolean) => void
  isMobile: boolean
}) {
  const { query, setQuery, mode, setMode, level, setLevel, category, setCategory, cost, setCost, savedOnly, setSavedOnly, isMobile } = props

  const selectStyle: CSSProperties = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    color: '#cbd5e1',
    fontSize: '0.8125rem',
    padding: '10px 14px',
    cursor: 'pointer',
    outline: 'none',
  }

  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '48px 20px 40px' : '80px 24px 56px' }}>
      <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'rgba(124,58,237,0.12)', top: '-100px', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <RevealSection>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.25)',
              borderRadius: '100px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#c4b5fd',
              marginBottom: '28px',
              letterSpacing: '0.05em',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a78bfa', display: 'inline-block' }} />
            {PROGRAMS.length}+ programs from India and around the world
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            Scholarships &amp; Programs
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              color: '#94a3b8',
              lineHeight: 1.75,
              maxWidth: '620px',
              margin: '0 auto 40px',
            }}
          >
            Find programs, internships, fellowships and scholarships that go beyond the syllabus.
          </p>
        </RevealSection>

        <RevealSection delay={150}>
          <div
            className="glass-card"
            style={{
              display: 'flex',
              gap: '8px',
              padding: '8px',
              borderRadius: '16px',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, institution, or keyword…"
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#e2e8f0',
                padding: '12px 16px',
                fontSize: '0.9375rem',
              }}
            />
            <button className="btn-primary" style={{ padding: '0 24px', fontSize: '0.875rem' }} onClick={() => {}}>
              <span>Search</span>
            </button>
          </div>
        </RevealSection>

        <RevealSection delay={250}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '24px' }}>
            <select style={selectStyle} value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="All">Category: All</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select style={selectStyle} value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="All">Mode: All</option>
              {MODES.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            <select style={selectStyle} value={cost} onChange={(e) => setCost(e.target.value)}>
              <option value="All">Cost: All</option>
              {COSTS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select style={selectStyle} value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="All">Level: All</option>
              {LEVELS.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>

            <button
              onClick={() => setSavedOnly(!savedOnly)}
              style={{
                ...selectStyle,
                background: savedOnly ? 'rgba(124,58,237,0.15)' : selectStyle.background,
                borderColor: savedOnly ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.1)',
                color: savedOnly ? '#c4b5fd' : '#cbd5e1',
              }}
            >
              ★ Saved Only
            </button>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

// ─── Featured Row ─────────────────────────────────────────────────────────────

function FeaturedRow({ items, isMobile }: { items: Program[]; isMobile: boolean }) {
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealSection>
          <SectionLabel>Featured Programs</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '28px' }}>
            Top opportunities worth exploring
          </h2>
        </RevealSection>

        <RevealSection delay={150}>
          <div style={{ display: 'flex', gap: '18px', overflowX: 'auto', paddingBottom: '12px' }}>
            {items.map((p) => (
              <Link key={p.id} to="/scholarships/$slug" params={{ slug: p.id }} style={{ minWidth: '230px', maxWidth: '260px', flexShrink: 0 }}>
                <div
                  className="glass-card"
                  style={{ borderRadius: '18px', padding: '24px', height: '100%', position: 'relative', overflow: 'hidden' }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: LOGO_BG,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1rem',
                      color: '#fff',
                      marginBottom: '16px',
                    }}
                  >
                    {getInitials(p.institution)}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px' }}>{p.title}</h3>
                  <div className="gradient-text" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
                    {p.cost} · {p.mode}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

// ─── Recommended ──────────────────────────────────────────────────────────────

function RecommendedSection({ items, isMobile }: { items: Program[]; isMobile: boolean }) {
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '80px 24px', background: 'rgba(0,0,0,0.2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealSection>
          <SectionLabel>Recommended For You</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '10px' }}>
            Picked for <span className="gradient-text">curious students.</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.9375rem', maxWidth: '520px', marginBottom: '28px' }}>
            Handpicked opportunities you can explore right now.
          </p>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {items.map((p, i) => (
            <RevealSection key={p.id} delay={i * 80}>
              <Link to="/scholarships/$slug" params={{ slug: p.id }}>
                <div className="glass-card" style={{ borderRadius: '18px', padding: '24px', display: 'flex', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: LOGO_BG,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      color: '#fff',
                      flexShrink: 0,
                    }}
                  >
                    {getInitials(p.institution)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>{p.title}</h3>
                    <p style={{ color: '#64748b', fontSize: '0.8125rem', margin: 0 }}>
                      {p.level} · {p.category}
                    </p>
                  </div>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Main Grid ─────────────────────────────────────────────────────────────────

function MainGrid({
  items,
  visible,
  onLoadMore,
  isMobile,
  saved,
  toggle,
}: {
  items: Program[]
  visible: number
  onLoadMore: () => void
  isMobile: boolean
  saved: string[]
  toggle: (id: string) => void
}) {
  const shown = items.slice(0, visible)
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealSection>
          <SectionLabel>Browse Programs</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '8px' }}>
            Showing {shown.length} of {items.length} program{items.length !== 1 ? 's' : ''}
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.9375rem', marginBottom: '32px' }}>
            Adjust filters above to narrow down results.
          </p>
        </RevealSection>

        {items.length === 0 ? (
          <div className="glass-card" style={{ borderRadius: '18px', padding: '48px', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', margin: 0 }}>No programs match your filters. Try broadening your search.</p>
          </div>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '22px' }}>
              {shown.map((p, i) => (
                <RevealSection key={p.id} delay={Math.min(i % PAGE_SIZE, 6) * 60}>
                  <ScholarshipCard scholarship={p} isSaved={saved.includes(p.id)} onToggleSave={() => toggle(p.id)} />
                </RevealSection>
              ))}
            </div>

            {visible < items.length && (
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button className="btn-secondary" style={{ padding: '14px 32px', fontSize: '0.9375rem', cursor: 'pointer' }} onClick={onLoadMore}>
                  Load more
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export function ScholarshipCard({
  scholarship,
  isSaved,
  onToggleSave,
}: {
  scholarship: Program
  isSaved: boolean
  onToggleSave: () => void
}) {
  const p = scholarship
  return (
    <div className="glass-card" style={{ borderRadius: '18px', padding: '22px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '10px',
            background: LOGO_BG,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '0.9rem',
            color: '#fff',
          }}
        >
          {getInitials(p.institution)}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault()
            onToggleSave()
          }}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '9px',
            border: '1px solid rgba(255,255,255,0.1)',
            background: isSaved ? 'rgba(124,58,237,0.15)' : 'transparent',
            color: isSaved ? '#c4b5fd' : '#64748b',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}
          aria-label={isSaved ? 'Remove bookmark' : 'Save program'}
        >
          {isSaved ? '★' : '☆'}
        </button>
      </div>

      <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#e2e8f0', marginTop: '16px', marginBottom: '2px' }}>{p.title}</h3>
      <div style={{ color: '#64748b', fontSize: '0.8125rem', marginBottom: '12px' }}>{p.institution}</div>

      <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
        {p.description.length > 130 ? p.description.slice(0, 130) + '…' : p.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
        <span
          style={{
            fontSize: '0.7rem',
            padding: '5px 10px',
            borderRadius: '7px',
            background: p.cost === 'Free' ? 'rgba(34,197,94,0.12)' : 'rgba(251,191,36,0.12)',
            color: p.cost === 'Free' ? '#4ade80' : '#fbbf24',
          }}
        >
          {p.cost}
        </span>
        <span style={{ fontSize: '0.7rem', padding: '5px 10px', borderRadius: '7px', background: 'rgba(255,255,255,0.05)', color: '#94a3b8' }}>
          {p.mode}
        </span>
        <span style={{ fontSize: '0.7rem', padding: '5px 10px', borderRadius: '7px', background: 'rgba(255,255,255,0.05)', color: '#94a3b8' }}>
          {p.level}
        </span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
        <span style={{ fontSize: '0.6875rem', padding: '4px 9px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.1)', color: '#64748b' }}>
          {p.category}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
        <Link to="/scholarships/$slug" params={{ slug: p.id }} style={{ flex: 1 }}>
          <div className="btn-primary" style={{ textAlign: 'center', width: '100%', fontSize: '0.8125rem', padding: '11px' }}>
            <span>View Details</span>
          </div>
        </Link>
        <a href={p.applicationUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
          <div className="btn-secondary" style={{ textAlign: 'center', width: '100%', fontSize: '0.8125rem', padding: '11px' }}>
            Apply
          </div>
        </a>
      </div>
    </div>
  )
}

// ─── Recently Added ────────────────────────────────────────────────────────────

function RecentlyAddedSection({ items, isMobile }: { items: Program[]; isMobile: boolean }) {
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '80px 24px', background: 'rgba(0,0,0,0.2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealSection>
          <SectionLabel>Recently Added</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '28px' }}>
            New on OffSyllabus
          </h2>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
          {items.map((p, i) => (
            <RevealSection key={p.id} delay={i * 70}>
              <Link to="/scholarships/$slug" params={{ slug: p.id }}>
                <div className="glass-card" style={{ borderRadius: '16px', padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '9px',
                        background: LOGO_BG,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.8rem',
                        color: '#fff',
                        flexShrink: 0,
                      }}
                    >
                      {getInitials(p.institution)}
                    </div>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#e2e8f0', margin: 0 }}>{p.title}</h3>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>
                    {p.mode} · {p.level}
                  </p>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}