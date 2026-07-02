import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/programs')({
  head: () => ({
    meta: [
      { title: 'Programs — OffSyllabus' },
      { name: 'description', content: 'Explore OffSyllabus programs designed to help students aged 15–21 discover their strengths and build future-ready skills.' },
    ],
  }),
  component: ProgramsPage,
})

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>
      {children}
    </div>
  )
}

const programs = [
  { name: 'Discovery Sprint', duration: '4 Days', tag: 'Beginner', tagColor: 'rgba(34,197,94,0.15)', tagBorder: 'rgba(34,197,94,0.3)', tagText: '#86efac', icon: '🔍', desc: 'A foundational program designed for students who are just starting to explore who they are and what they want from life.', highlights: ['Guided self-discovery exercises', 'Introduction to future-ready skills', 'Peer community access', '2 mentor sessions', 'Personal reflection journal'], forWho: 'Ages 15–17 · First-timers · Students seeking initial clarity' },
  { name: 'Growth Cohort', duration: '12 Months', tag: 'Core Program', tagColor: 'rgba(124,58,237,0.15)', tagBorder: 'rgba(124,58,237,0.35)', tagText: '#c4b5fd', icon: '🚀', desc: 'Our flagship 12 month experience. Get full access to both Discovery Sprint and Founder Track, along with', highlights: ['Exclusive mentorship', 'Hands-on projects', 'Industry experiences', 'Leadership opportunities', 'Portfolio that prepares you for your future', 'And a lot more'], forWho: 'Ages 15–21 · Serious learners · Future builders', featured: true },
  { name: 'Founder Track', duration: '4-8 Weeks', tag: 'Advanced', tagColor: 'rgba(245,158,11,0.12)', tagBorder: 'rgba(245,158,11,0.3)', tagText: '#fcd34d', icon: '💡', desc: 'An intensive program for students who already have an idea or project and want to build it into something real.', highlights: ['Startup methodology workshops', 'Idea validation frameworks', 'Pitch preparation and practice', 'Access to founder mentors', 'MVP building support', 'Investor mindset development'], forWho: 'Ages 17–21 · Aspiring entrepreneurs · Students with ideas' },
]

const workshops = [
  { icon: '🎤', name: 'Public Speaking Bootcamp', duration: '1 Weekend' },
  { icon: '🧠', name: 'Design Thinking Intensive', duration: '2 Days' },
  { icon: '💼', name: 'Career Clarity Workshop', duration: '1 Day' },
  { icon: '🌐', name: 'Digital Skills Masterclass', duration: '1 Weekend' },
  { icon: '💰', name: 'Financial Literacy for Students', duration: '1 Day' },
  { icon: '🤝', name: 'Networking & Relationship Building', duration: '1 Day' },
]

function ProgramsPage() {
  const isMobile = useIsMobile()
  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: isMobile ? '64px 16px' : '100px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(124,58,237,0.1)', filter: 'blur(80px)', top: '-100px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600', color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', display: 'inline-block' }} />
            Programs & Tracks
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '20px' }}>
            Choose your{' '}
            <span style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 40%, #4f46e5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>path forward.</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: isMobile ? '1rem' : '1.125rem', lineHeight: '1.75', margin: '0 auto' }}>
            Every student is different. That's why OffSyllabus offers multiple entry points — from introductory sprints to intensive cohorts to founder-focused tracks.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section style={{ padding: isMobile ? '32px 16px 64px' : '40px 24px 100px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
            {programs.map((prog, i) => (
              <RevealSection key={prog.name} delay={i * 100}>
                <div style={{ background: prog.featured ? 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(79,70,229,0.05))' : 'rgba(255,255,255,0.025)', border: `1px solid ${prog.featured ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.07)'}`, borderRadius: '24px', padding: isMobile ? '32px 20px' : '40px 36px', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', transition: 'border-color 0.3s ease, transform 0.3s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.4)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = prog.featured ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                  {prog.featured && (
                    <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', borderRadius: '100px', padding: '5px 18px', fontSize: '0.75rem', fontWeight: '700', color: 'white', whiteSpace: 'nowrap' }}>
                      ⭐ Most Popular
                    </div>
                  )}
                  <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{prog.icon}</div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{ padding: '4px 12px', background: prog.tagColor, border: `1px solid ${prog.tagBorder}`, borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600', color: prog.tagText }}>{prog.tag}</span>
                    <span style={{ color: '#64748b', fontSize: '0.8125rem' }}>⏱ {prog.duration}</span>
                  </div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#e2e8f0', marginBottom: '14px', letterSpacing: '-0.02em' }}>{prog.name}</h2>
                  <p style={{ color: '#64748b', fontSize: '0.9375rem', lineHeight: '1.65', marginBottom: '28px' }}>{prog.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                    {prog.highlights.map((h) => (
                      <li key={h} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: '#94a3b8', fontSize: '0.9rem' }}>
                        <span style={{ color: '#7c3aed', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', marginBottom: '24px' }}>
                    <span style={{ color: '#64748b', fontSize: '0.8rem' }}>👤 {prog.forWho}</span>
                  </div>
                  <Link to="/apply" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px 24px', background: prog.featured ? 'linear-gradient(135deg, #7c3aed, #4f46e5)' : 'transparent', border: prog.featured ? 'none' : '1px solid rgba(124,58,237,0.3)', borderRadius: '10px', color: 'white', fontWeight: '600', fontSize: '0.9375rem', textDecoration: 'none' }}>
                    Apply for {prog.name} →
                  </Link>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section style={{ padding: isMobile ? '48px 16px 64px' : '80px 24px 120px', background: 'rgba(0,0,0,0.2)', position: 'relative' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <RevealSection>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '12px' }}>
                One-Day Workshops &{' '}
                <span style={{ background: 'linear-gradient(135deg, #a78bfa, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Intensives</span>
              </h2>
              <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>Standalone experiences for students who want to develop a specific skill quickly.</p>
            </div>
          </RevealSection>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {workshops.map((w, i) => (
              <RevealSection key={w.name} delay={i * 60}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px 24px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', transition: 'border-color 0.2s ease' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.3)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)')}>
                  <span style={{ fontSize: '1.75rem' }}>{w.icon}</span>
                  <div>
                    <div style={{ fontWeight: '600', color: '#e2e8f0', fontSize: '0.9375rem' }}>{w.name}</div>
                    <div style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '4px' }}>{w.duration}</div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '48px 16px' : '80px 24px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(124,58,237,0.08)', filter: 'blur(80px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '16px' }}>Not sure which program is right for you?</h2>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7', marginBottom: '32px' }}>Apply anyway — we'll help you find the right fit during your admission conversation.</p>
          <Link to="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 36px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', borderRadius: '10px', fontWeight: '600', fontSize: '1rem', textDecoration: 'none' }}>
            Apply Now →
          </Link>
        </div>
      </section>
    </div>
  )
}