import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import {
  categories,
  countries,
  fundingTypes,
  scholarships,
  studyLevels,
  type Scholarship,
} from '../../data/scholarships'
import { RevealSection, SectionLabel, useIsMobile } from '../../components/scholarship-ui'

export const Route = createFileRoute('/scholarships/')({
  component: ScholarshipsPage,
})

const BOOKMARK_KEY = 'offsyllabus_saved_scholarships'

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

  const toggle = (slug: string) => {
    setSaved((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
      window.localStorage.setItem(BOOKMARK_KEY, JSON.stringify(next))
      return next
    })
  }

  return { saved, toggle }
}

function ScholarshipsPage() {
  const isMobile = useIsMobile()
  const { saved, toggle } = useBookmarks()

  const [query, setQuery] = useState('')
  const [country, setCountry] = useState<string>('All')
  const [studyLevel, setStudyLevel] = useState<string>('All')
  const [category, setCategory] = useState<string>('All')
  const [fundingType, setFundingType] = useState<string>('All')
  const [eligibilityOnly, setEligibilityOnly] = useState(false)

  const filtered = useMemo(() => {
    return scholarships.filter((s) => {
      const matchesQuery =
        query.trim() === '' ||
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.organization.toLowerCase().includes(query.toLowerCase()) ||
        s.country.toLowerCase().includes(query.toLowerCase()) ||
        s.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      const matchesCountry = country === 'All' || s.country === country
      const matchesLevel = studyLevel === 'All' || s.studyLevel === studyLevel
      const matchesCategory = category === 'All' || s.category === category
      const matchesFunding = fundingType === 'All' || s.fundingType === fundingType
      const matchesEligibility = !eligibilityOnly || saved.includes(s.slug)
      return (
        matchesQuery &&
        matchesCountry &&
        matchesLevel &&
        matchesCategory &&
        matchesFunding &&
        matchesEligibility
      )
    })
  }, [query, country, studyLevel, category, fundingType, eligibilityOnly, saved])

  const featured = scholarships.filter((s) => s.featured)
  const recentlyAdded = scholarships.filter((s) => s.recentlyAdded)
  const recommended = scholarships.slice(0, 3)

  return (
    <div style={{ paddingTop: '68px' }}>
      <HeroSearch
        query={query}
        setQuery={setQuery}
        country={country}
        setCountry={setCountry}
        studyLevel={studyLevel}
        setStudyLevel={setStudyLevel}
        category={category}
        setCategory={setCategory}
        fundingType={fundingType}
        setFundingType={setFundingType}
        eligibilityOnly={eligibilityOnly}
        setEligibilityOnly={setEligibilityOnly}
        isMobile={isMobile}
      />

      <div className="gradient-divider" />

      <FeaturedRow scholarships={featured} isMobile={isMobile} />

      <div className="gradient-divider" />

      <RecommendedSection scholarships={recommended} isMobile={isMobile} />

      <div className="gradient-divider" />

      <MainGrid
        scholarships={filtered}
        isMobile={isMobile}
        saved={saved}
        toggle={toggle}
      />

      <div className="gradient-divider" />

      <RecentlyAddedSection scholarships={recentlyAdded} isMobile={isMobile} />
    </div>
  )
}

// ─── Hero + Search + Filters ─────────────────────────────────────────────────

function HeroSearch(props: {
  query: string
  setQuery: (v: string) => void
  country: string
  setCountry: (v: string) => void
  studyLevel: string
  setStudyLevel: (v: string) => void
  category: string
  setCategory: (v: string) => void
  fundingType: string
  setFundingType: (v: string) => void
  eligibilityOnly: boolean
  setEligibilityOnly: (v: boolean) => void
  isMobile: boolean
}) {
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
    isMobile,
  } = props

  const selectStyle: React.CSSProperties = {
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
            {scholarships.length}+ scholarships from India and around the world
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
            Scholarships
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
            Find scholarships that can help fund your education, research, competitions, and global
            opportunities.
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
              placeholder="Search by organization, country, or keyword…"
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
            <button
              className="btn-primary"
              style={{ padding: '0 24px', fontSize: '0.875rem' }}
              onClick={() => {}}
            >
              <span>Search</span>
            </button>
          </div>
        </RevealSection>

        <RevealSection delay={250}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
              marginTop: '24px',
            }}
          >
            <select style={selectStyle} value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="All">Country: All</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select style={selectStyle} value={studyLevel} onChange={(e) => setStudyLevel(e.target.value)}>
              <option value="All">Study Level: All</option>
              {studyLevels.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>

            <select style={selectStyle} value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="All">Category: All</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select style={selectStyle} value={fundingType} onChange={(e) => setFundingType(e.target.value)}>
              <option value="All">Funding Type: All</option>
              {fundingTypes.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>

            <button
              onClick={() => setEligibilityOnly(!eligibilityOnly)}
              style={{
                ...selectStyle,
                background: eligibilityOnly ? 'rgba(124,58,237,0.15)' : selectStyle.background,
                borderColor: eligibilityOnly ? 'rgba(124,58,237,0.4)' : (selectStyle.border as string),
                color: eligibilityOnly ? '#c4b5fd' : '#cbd5e1',
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

function FeaturedRow({ scholarships: items, isMobile }: { scholarships: Scholarship[]; isMobile: boolean }) {
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealSection>
          <SectionLabel>Featured Scholarships</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '28px' }}>
            Top opportunities worth exploring
          </h2>
        </RevealSection>

        <RevealSection delay={150}>
          <div
            style={{
              display: 'flex',
              gap: '18px',
              overflowX: 'auto',
              paddingBottom: '12px',
            }}
          >
            {items.map((s) => (
              <Link
                key={s.slug}
                to="/scholarships/$slug"
                params={{ slug: s.slug }}
                style={{ minWidth: '230px', flexShrink: 0 }}
              >
                <div
                  className="glass-card"
                  style={{
                    borderRadius: '18px',
                    padding: '24px',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: s.logoColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1rem',
                      color: '#fff',
                      marginBottom: '16px',
                    }}
                  >
                    {s.logoText}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px' }}>
                    {s.name}
                  </h3>
                  <div className="gradient-text" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
                    {s.fundingType} · {s.country}
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

function RecommendedSection({ scholarships: items, isMobile }: { scholarships: Scholarship[]; isMobile: boolean }) {
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '80px 24px', background: 'rgba(0,0,0,0.2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealSection>
          <SectionLabel>Recommended For You</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '10px' }}>
            Picked using{' '}
            <span className="gradient-text">AI-powered matching.</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.9375rem', maxWidth: '520px', marginBottom: '28px' }}>
            Based on your interests and saved scholarships, here are opportunities you're likely to
            qualify for.
          </p>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {items.map((s, i) => (
            <RevealSection key={s.slug} delay={i * 80}>
              <Link to="/scholarships/$slug" params={{ slug: s.slug }}>
                <div className="glass-card" style={{ borderRadius: '18px', padding: '24px', display: 'flex', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: s.logoColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      color: '#fff',
                      flexShrink: 0,
                    }}
                  >
                    {s.logoText}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>
                      {s.name}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.8125rem', margin: 0 }}>
                      {s.studyLevel} · {s.category}
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
  scholarships: items,
  isMobile,
  saved,
  toggle,
}: {
  scholarships: Scholarship[]
  isMobile: boolean
  saved: string[]
  toggle: (slug: string) => void
}) {
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealSection>
          <SectionLabel>Browse Scholarships</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '8px' }}>
            Showing {items.length} scholarship{items.length !== 1 ? 's' : ''}
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.9375rem', marginBottom: '32px' }}>
            Adjust filters above to narrow down results.
          </p>
        </RevealSection>

        {items.length === 0 ? (
          <div className="glass-card" style={{ borderRadius: '18px', padding: '48px', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', margin: 0 }}>No scholarships match your filters. Try broadening your search.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '22px' }}>
            {items.map((s, i) => (
              <RevealSection key={s.slug} delay={Math.min(i, 6) * 60}>
                <ScholarshipCard scholarship={s} isSaved={saved.includes(s.slug)} onToggleSave={() => toggle(s.slug)} />
              </RevealSection>
            ))}
          </div>
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
  scholarship: Scholarship
  isSaved: boolean
  onToggleSave: () => void
}) {
  const s = scholarship
  return (
    <div
      className="glass-card"
      style={{ borderRadius: '18px', padding: '22px', display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '10px',
            background: s.logoColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '0.9rem',
            color: '#fff',
          }}
        >
          {s.logoText}
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
          aria-label={isSaved ? 'Remove bookmark' : 'Save scholarship'}
        >
          {isSaved ? '★' : '☆'}
        </button>
      </div>

      <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#e2e8f0', marginTop: '16px', marginBottom: '2px' }}>
        {s.name}
      </h3>
      <div style={{ color: '#64748b', fontSize: '0.8125rem', marginBottom: '12px' }}>{s.organization}</div>

      <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
        {s.shortDescription.length > 130 ? s.shortDescription.slice(0, 130) + '…' : s.shortDescription}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
        <span
          style={{
            fontSize: '0.7rem',
            padding: '5px 10px',
            borderRadius: '7px',
            background: 'rgba(34,197,94,0.12)',
            color: '#4ade80',
          }}
        >
          {s.fundingType}
        </span>
        <span style={{ fontSize: '0.7rem', padding: '5px 10px', borderRadius: '7px', background: 'rgba(255,255,255,0.05)', color: '#94a3b8' }}>
          {s.country}
        </span>
        <span style={{ fontSize: '0.7rem', padding: '5px 10px', borderRadius: '7px', background: 'rgba(255,255,255,0.05)', color: '#94a3b8' }}>
          {s.studyLevel}
        </span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
        {s.tags.slice(0, 3).map((t) => (
          <span key={t} style={{ fontSize: '0.6875rem', padding: '4px 9px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.1)', color: '#64748b' }}>
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
        <Link to="/scholarships/$slug" params={{ slug: s.slug }} style={{ flex: 1 }}>
          <div className="btn-primary" style={{ textAlign: 'center', width: '100%', fontSize: '0.8125rem', padding: '11px' }}>
            <span>View Details</span>
          </div>
        </Link>
        <a href={s.officialLink} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
          <div className="btn-secondary" style={{ textAlign: 'center', width: '100%', fontSize: '0.8125rem', padding: '11px' }}>
            Official Website
          </div>
        </a>
      </div>
    </div>
  )
}

// ─── Recently Added ────────────────────────────────────────────────────────────

function RecentlyAddedSection({ scholarships: items, isMobile }: { scholarships: Scholarship[]; isMobile: boolean }) {
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
          {items.map((s, i) => (
            <RevealSection key={s.slug} delay={i * 70}>
              <Link to="/scholarships/$slug" params={{ slug: s.slug }}>
                <div className="glass-card" style={{ borderRadius: '16px', padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '9px',
                        background: s.logoColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.8rem',
                        color: '#fff',
                      }}
                    >
                      {s.logoText}
                    </div>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#e2e8f0', margin: 0 }}>{s.name}</h3>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>
                    {s.country} · {s.studyLevel}
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
