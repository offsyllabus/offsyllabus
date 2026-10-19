import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { useState } from 'react'
import type { ReactNode } from 'react'
import { PROGRAMS as scholarships } from '../../data/scholarships'
import { RevealSection, SectionLabel, useIsMobile } from '../../components/scholarship-ui'
import { ScholarshipCard } from './index'

const BOOKMARK_KEY = 'offsyllabus_saved_scholarships'

export const Route = createFileRoute('/scholarships/$slug')({
  loader: ({ params }) => {
    const scholarship = scholarships.find((s) => s.id === params.slug)
    if (!scholarship) throw notFound()
    return { scholarship }
  },
  component: ScholarshipDetailPage,
})

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

function getInitials(name: string) {
  return name
    .replace(/[^A-Za-z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}

function ScholarshipDetailPage() {
  const { scholarship: s } = Route.useLoaderData()
  const isMobile = useIsMobile()
  const { saved, toggle } = useBookmarks()
  const isSaved = saved.includes(s.id)

  const related = scholarships
    .filter((x) => x.id !== s.id && x.category === s.category)
    .slice(0, 3)

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '48px 20px 40px' : '72px 24px 56px' }}>
        <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'rgba(124,58,237,0.12)', top: '-120px', left: '50%', transform: 'translateX(-50%)' }} />
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto' }}>
          <RevealSection>
            <Link to="/scholarships" style={{ color: '#a78bfa', fontSize: '0.875rem', fontWeight: 600 }}>
              ← Back to Scholarships
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '28px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  color: '#fff',
                  flexShrink: 0,
                }}
              >
                {getInitials(s.institution)}
              </div>
              <div>
                <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '6px' }}>
                  {s.title}
                </h1>
                <p style={{ color: '#94a3b8', fontSize: '0.9375rem', margin: 0 }}>{s.institution}</p>
              </div>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: '760px', marginBottom: '32px' }}>
              {s.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
              {[
                { label: s.cost, bg: s.cost === 'Free' ? 'rgba(34,197,94,0.12)' : 'rgba(251,191,36,0.12)', color: s.cost === 'Free' ? '#4ade80' : '#fbbf24' },
                { label: s.mode, bg: 'rgba(255,255,255,0.05)', color: '#94a3b8' },
                { label: s.level, bg: 'rgba(255,255,255,0.05)', color: '#94a3b8' },
                { label: s.category, bg: 'rgba(124,58,237,0.12)', color: '#c4b5fd' },
              ].map((chip) => (
                <span
                  key={chip.label}
                  style={{ fontSize: '0.8125rem', padding: '8px 14px', borderRadius: '999px', background: chip.bg, color: chip.color, fontWeight: 600 }}
                >
                  {chip.label}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href={s.applicationUrl} target="_blank" rel="noopener noreferrer">
                <div className="btn-primary" style={{ padding: '14px 28px', fontSize: '0.9375rem' }}>
                  <span>Apply Now →</span>
                </div>
              </a>
              <button
                onClick={() => toggle(s.id)}
                className="btn-secondary"
                style={{ padding: '14px 28px', fontSize: '0.9375rem', cursor: 'pointer', color: isSaved ? '#c4b5fd' : undefined }}
              >
                {isSaved ? '★ Saved' : '☆ Save'}
              </button>
            </div>
          </RevealSection>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* Details grid */}
      <section style={{ padding: isMobile ? '56px 20px' : '80px 24px' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
            gap: '48px',
          }}
        >
          <div>
            <RevealSection>
              <DetailBlock title="About this Program">
                <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: 1.8, margin: 0 }}>{s.description}</p>
              </DetailBlock>
            </RevealSection>

            <RevealSection delay={100}>
              <DetailBlock title="Eligibility">
                <p style={{ color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: 1.7, margin: 0 }}>{s.eligibility}</p>
              </DetailBlock>
            </RevealSection>

            <RevealSection delay={150}>
              <DetailBlock title="Program Details">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <InfoRow label="Duration" value={s.duration} />
                  <InfoRow label="Location" value={s.location} />
                  <InfoRow label="Deadline" value={s.deadline} />
                  <InfoRow label="Fee" value={s.fee} />
                </div>
              </DetailBlock>
            </RevealSection>

            <RevealSection delay={200}>
              <DetailBlock title="Links">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href={s.applicationUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#a78bfa', fontSize: '0.9375rem', fontWeight: 600 }}>
                    Application page →
                  </a>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: '#a78bfa', fontSize: '0.9375rem', fontWeight: 600 }}>
                    Official website →
                  </a>
                </div>
              </DetailBlock>
            </RevealSection>
          </div>

          <div>
            <RevealSection delay={150}>
              <div className="glass-card" style={{ borderRadius: '18px', padding: '28px', position: 'sticky', top: '90px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '18px' }}>Quick Info</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <InfoRow label="Fee" value={s.fee} />
                  <InfoRow label="Mode" value={s.mode} />
                  <InfoRow label="Level" value={s.level} />
                  <InfoRow label="Duration" value={s.duration} />
                  <InfoRow label="Location" value={s.location} />
                  <InfoRow label="Deadline" value={s.deadline} />
                </div>
                <a href={s.applicationUrl} target="_blank" rel="noopener noreferrer">
                  <div className="btn-primary" style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.875rem' }}>
                    <span>Apply Now →</span>
                  </div>
                </a>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <>
          <div className="gradient-divider" />
          <section style={{ padding: isMobile ? '56px 20px' : '80px 24px', background: 'rgba(0,0,0,0.2)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <RevealSection>
                <SectionLabel>Related Programs</SectionLabel>
                <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '28px' }}>
                  You might also like
                </h2>
              </RevealSection>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '22px' }}>
                {related.map((r, i) => (
                  <RevealSection key={r.id} delay={i * 80}>
                    <ScholarshipCard scholarship={r} isSaved={saved.includes(r.id)} onToggleSave={() => toggle(r.id)} />
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

function DetailBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>{title}</h2>
      {children}
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
      <span style={{ color: '#64748b', fontSize: '0.8125rem' }}>{label}</span>
      <span style={{ color: '#cbd5e1', fontSize: '0.8125rem', fontWeight: 600, textAlign: 'right' }}>{value}</span>
    </div>
  )
}