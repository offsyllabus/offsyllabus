import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About — OffSyllabus' },
      { name: 'description', content: 'Learn about OffSyllabus — our mission, vision, and the team behind the growth ecosystem for students aged 15–21.' },
    ],
  }),
  component: AboutPage,
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

const values = [
  { icon: '🔍', title: 'Clarity Over Grades', desc: 'We believe knowing yourself is more valuable than any score. Self-awareness is the starting point of all meaningful achievement.' },
  { icon: '🌍', title: 'Real Over Theoretical', desc: "Everything we do is rooted in real-world experience. We don't simulate reality — we take students into it." },
  { icon: '🤝', title: 'Community Over Competition', desc: "Your peer's success isn't your failure. We build a culture where everyone is invested in everyone else's growth." },
  { icon: '🚀', title: 'Action Over Passivity', desc: "We learn by doing. OffSyllabus students don't just absorb content — they create, build, present, and reflect." },
  { icon: '❤️', title: 'Holistic Over Academic', desc: 'We care about the whole student — their mental health, their relationships, their creative expression, and their sense of purpose.' },
  { icon: '♾', title: 'Growth Is Never Final', desc: 'The most successful people are lifelong learners. We instill the habit and joy of continuous self-improvement.' },
]

const teamMembers = [
  { name: 'Founder', role: 'Visionary & CEO', icon: '👑', bio: 'Built OffSyllabus after experiencing firsthand how traditional education fails to prepare students for the real world.' },
  { name: 'Head of Programs', role: 'Program Design', icon: '🎯', bio: 'Designs every cohort experience with obsessive attention to learning outcomes and student transformation.' },
  { name: 'Community Lead', role: 'Ecosystem Builder', icon: '🌐', bio: 'Builds and nurtures the community of students, mentors, founders, and professionals that makes OffSyllabus unique.' },
  { name: 'Mentor Coordinator', role: 'Mentor Relations', icon: '🤝', bio: 'Curates and manages the mentor network, ensuring students have access to the right guidance at the right time.' },
]

function AboutPage() {
  const isMobile = useIsMobile()
  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: isMobile ? '64px 16px' : '100px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '700px', height: '700px', borderRadius: '50%', background: 'rgba(124,58,237,0.09)', filter: 'blur(80px)', top: '-200px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))', gap: isMobile ? '40px' : '64px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600', color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', display: 'inline-block' }} />
              About OffSyllabus
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '24px' }}>
              We exist because<br />
              <span style={{ background: 'linear-gradient(135deg, #a78bfa, #7c3aed, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                school isn't enough.
              </span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '32px' }}>
              OffSyllabus was founded with a simple belief: the skills, experiences, and self-awareness that define exceptional human beings are almost never taught in a classroom. We built the alternative.
            </p>
            <Link to="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', borderRadius: '10px', fontWeight: '600', fontSize: '1rem', textDecoration: 'none' }}>
              Join Our Mission →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { value: '500+', label: 'Students Transformed' },
              { value: '3+', label: 'Years of Impact' },
              { value: '50+', label: 'Expert Mentors' },
              { value: '95%', label: 'Would Recommend' },
            ].map((stat) => (
              <div key={stat.label} style={{ padding: '28px 20px', background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)', borderRadius: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '800', background: 'linear-gradient(135deg, #a78bfa, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ color: '#64748b', fontSize: '0.8125rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: isMobile ? '48px 16px' : '80px 24px', background: 'rgba(0,0,0,0.2)', position: 'relative' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(124,58,237,0.07)', filter: 'blur(80px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px', position: 'relative', zIndex: 1 }}>
          {[
            { icon: '🎯', title: 'Our Mission', bg: 'rgba(124,58,237,0.07)', border: 'rgba(124,58,237,0.2)', text: 'To create a structured growth ecosystem where students aged 15–21 can discover their strengths, develop future-ready skills, gain real-world experience, and build the mindset needed to thrive in any path they choose.' },
            { icon: '🌍', title: 'Our Vision', bg: 'rgba(79,70,229,0.07)', border: 'rgba(79,70,229,0.2)', text: 'A world where every young person has access to the kind of growth experiences that were once reserved for the privileged few — a world where potential is discovered, not wasted.' },
            { icon: '💡', title: "What We're Not", bg: 'rgba(168,85,247,0.07)', border: 'rgba(168,85,247,0.2)', text: "We are not a coaching class, a tuition center, an online course platform, or a university. We don't prepare students for exams. We prepare them for life — for challenges, opportunities, and their own unique version of success." },
          ].map((item, i) => (
            <RevealSection key={item.title} delay={i * 150}>
              <div style={{ padding: isMobile ? '28px 20px' : '44px 36px', background: item.bg, border: `1px solid ${item.border}`, borderRadius: '24px', height: '100%' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{item.icon}</div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '16px', color: '#e2e8f0', letterSpacing: '-0.02em' }}>{item.title}</h2>
                <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.8', margin: 0 }}>{item.text}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: isMobile ? '64px 16px' : '100px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <RevealSection>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '16px' }}>
                The principles we{' '}
                <span style={{ background: 'linear-gradient(135deg, #a78bfa, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  never compromise on.
                </span>
              </h2>
              <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
                These values aren't just words on a wall — they shape every decision we make and every experience we design.
              </p>
            </div>
          </RevealSection>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {values.map((val, i) => (
              <RevealSection key={val.title} delay={i * 70}>
                <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: isMobile ? '24px 20px' : '32px 28px', transition: 'border-color 0.3s ease, transform 0.3s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{val.icon}</div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '10px' }}>{val.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.65', margin: 0 }}>{val.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: isMobile ? '48px 16px 64px' : '80px 24px 100px', background: 'rgba(0,0,0,0.2)', position: 'relative' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(124,58,237,0.06)', filter: 'blur(80px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <RevealSection>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '12px' }}>
                The team behind{' '}
                <span style={{ background: 'linear-gradient(135deg, #a78bfa, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>OffSyllabus.</span>
              </h2>
              <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>A small, passionate team obsessed with student growth and educational transformation.</p>
            </div>
          </RevealSection>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {teamMembers.map((m, i) => (
              <RevealSection key={m.name} delay={i * 80}>
                <div style={{ textAlign: 'center', padding: isMobile ? '24px 16px' : '36px 24px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', transition: 'border-color 0.3s ease' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.3)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)')}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 16px' }}>{m.icon}</div>
                  <div style={{ fontWeight: '700', color: '#e2e8f0', fontSize: '0.9375rem', marginBottom: '4px' }}>{m.name}</div>
                  <div style={{ color: '#a78bfa', fontSize: '0.75rem', fontWeight: '600', marginBottom: '10px' }}>{m.role}</div>
                  <p style={{ color: '#64748b', fontSize: '0.8125rem', lineHeight: '1.6', margin: 0 }}>{m.bio}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '48px 16px' : '80px 24px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', width: '600px', height: '400px', borderRadius: '50%', background: 'rgba(124,58,237,0.08)', filter: 'blur(80px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '16px' }}>Believe in what we're building?</h2>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7', marginBottom: '32px' }}>Whether you're a student, parent, mentor, or partner — we'd love to connect.</p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <Link to="/apply" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px 28px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', borderRadius: '10px', fontWeight: '600', fontSize: '1rem', textDecoration: 'none' }}>
              Apply as Student →
            </Link>
            <Link to="/mentors" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px 28px', background: 'transparent', border: '1px solid rgba(124,58,237,0.3)', color: '#e2e8f0', borderRadius: '10px', fontWeight: '500', fontSize: '1rem', textDecoration: 'none' }}>
              Join as Mentor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
