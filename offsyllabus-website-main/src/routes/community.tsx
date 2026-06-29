import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/community')({
  head: () => ({
    meta: [
      { title: 'Community — OffSyllabus' },
      { name: 'description', content: 'Join the OffSyllabus community of ambitious students, mentors, founders, and professionals.' },
    ],
  }),
  component: CommunityPage,
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

const communityValues = [
  { icon: '🔗', title: 'Real Connections', desc: "We facilitate genuine relationships between students, mentors, founders, and professionals — not superficial LinkedIn connections, but meaningful bonds built through shared experiences." },
  { icon: '⚖️', title: 'Accountability', desc: "Your community holds you to your commitments. When you declare a goal, your peers cheer you on and check in. Growth happens faster when someone else believes in your potential." },
  { icon: '🤲', title: 'Collaboration Over Competition', desc: "OffSyllabus deliberately fosters a culture of sharing, helping, and building together. Your peers' success is your success." },
  { icon: '♾', title: 'Lifelong Network', desc: 'The relationships you build during your cohort outlast the program. Alumni regularly return as mentors, collaborators, and friends.' },
]

const events = [
  { icon: '🎙', name: 'Weekly Cohort Calls', freq: 'Weekly', desc: 'All cohort members gather to share progress, wins, and challenges in a supportive group setting.' },
  { icon: '☕', name: 'Community Meetups', freq: 'Monthly', desc: 'In-person gatherings where students, mentors, and alumni connect over conversations and collaboration.' },
  { icon: '🏆', name: 'Cohort Showcase', freq: 'End of Cohort', desc: 'Students present their projects and growth journeys to the full OffSyllabus community and invited guests.' },
  { icon: '🌿', name: 'Alumni Circles', freq: 'Quarterly', desc: "Past cohort members come back to share what they've learned and offer guidance to current students." },
  { icon: '🚀', name: 'Startup Saturdays', freq: 'Monthly', desc: 'Deep-dive sessions with founders and builders sharing their real stories and lessons.' },
  { icon: '🎯', name: 'Skill Sprints', freq: 'Bi-weekly', desc: 'Focused mini-workshops on specific skills — from public speaking to negotiation to productivity.' },
]

function CommunityPage() {
  const isMobile = useIsMobile()
  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: isMobile ? '64px 16px' : '100px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '700px', height: '700px', borderRadius: '50%', background: 'rgba(124,58,237,0.1)', filter: 'blur(80px)', top: '-150px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '740px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600', color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', display: 'inline-block' }} />
            Community
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '20px' }}>
            You don't grow in isolation.<br />
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #7c3aed, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>You grow together.</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: isMobile ? '1rem' : '1.125rem', lineHeight: '1.75' }}>
            OffSyllabus is more than a program — it's a living ecosystem of curious students, experienced mentors, ambitious founders, and inspiring professionals all moving in the same direction.
          </p>
        </div>
      </section>

      {/* Ecosystem stats */}
      <section style={{ padding: isMobile ? '32px 16px 64px' : '40px 24px 100px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <RevealSection>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '64px' }}>
              {[
                { icon: '🧑‍🎓', label: 'Students', count: '500+', color: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.25)' },
                { icon: '🧑‍💼', label: 'Mentors', count: '50+', color: 'rgba(79,70,229,0.1)', border: 'rgba(79,70,229,0.25)' },
                { icon: '🚀', label: 'Founders', count: '30+', color: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)' },
                { icon: '🌐', label: 'Professionals', count: '100+', color: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)' },
                { icon: '🏆', label: 'Alumni', count: '200+', color: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)' },
              ].map((m) => (
                <div key={m.label} style={{ textAlign: 'center', padding: isMobile ? '24px 12px' : '36px 20px', background: m.color, border: `1px solid ${m.border}`, borderRadius: '20px' }}>
                  <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '10px' }}>{m.icon}</div>
                  <div style={{ fontSize: isMobile ? '1.5rem' : '1.75rem', fontWeight: '800', background: 'linear-gradient(135deg, #a78bfa, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '4px' }}>{m.count}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8125rem', fontWeight: '500' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* Values */}
          <RevealSection delay={200}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '40px' }}>
              What makes the community{' '}
              <span style={{ background: 'linear-gradient(135deg, #a78bfa, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>different.</span>
            </h2>
          </RevealSection>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '64px' }}>
            {communityValues.map((val, i) => (
              <RevealSection key={val.title} delay={i * 80}>
                <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: isMobile ? '24px 20px' : '32px 28px', transition: 'border-color 0.3s ease, transform 0.3s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{val.icon}</div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '10px' }}>{val.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>{val.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Events */}
          <RevealSection delay={100}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '40px' }}>
              How the community{' '}
              <span style={{ background: 'linear-gradient(135deg, #a78bfa, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>stays alive.</span>
            </h2>
          </RevealSection>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {events.map((ev, i) => (
              <RevealSection key={ev.name} delay={i * 60}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px' }}>
                  <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{ev.icon}</span>
                  <div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontWeight: '600', color: '#e2e8f0', fontSize: '0.9375rem' }}>{ev.name}</span>
                      <span style={{ padding: '2px 10px', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '100px', fontSize: '0.7rem', color: '#a78bfa', fontWeight: '600' }}>{ev.freq}</span>
                    </div>
                    <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>{ev.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '48px 16px' : '80px 24px', textAlign: 'center', background: 'rgba(0,0,0,0.2)', position: 'relative' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(124,58,237,0.07)', filter: 'blur(80px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '16px' }}>Ready to find your people?</h2>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7', marginBottom: '32px' }}>The OffSyllabus community is waiting for someone like you.</p>
          <Link to="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 36px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', borderRadius: '10px', fontWeight: '600', fontSize: '1rem', textDecoration: 'none' }}>
            Join the Community →
          </Link>
        </div>
      </section>
    </div>
  )
}
