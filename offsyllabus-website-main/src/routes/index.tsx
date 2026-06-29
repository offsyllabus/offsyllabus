import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// ─── Reusable helpers ────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label" style={{ marginBottom: '20px' }}>
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#a78bfa',
          display: 'inline-block',
        }}
      />
      {children}
    </div>
  )
}

function useIntersection(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, visible }
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 767px)').matches
  })
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}

function RevealSection({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useIntersection()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '68px',
      }}
    >
      {/* Background glows */}
      <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'rgba(124,58,237,0.12)', top: '-100px', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="glow-orb" style={{ width: '400px', height: '400px', background: 'rgba(79,70,229,0.08)', bottom: '0', right: '-100px' }} />
      <div className="glow-orb" style={{ width: '300px', height: '300px', background: 'rgba(139,92,246,0.06)', bottom: '100px', left: '-50px' }} />

      {/* Grid */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: isMobile ? '48px 20px' : '80px 24px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {/* Badge */}
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            marginBottom: '32px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
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
              fontWeight: '600',
              color: '#c4b5fd',
              letterSpacing: '0.05em',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a78bfa', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
            Now Accepting Cohort Applications
          </div>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: '800',
            lineHeight: '1.05',
            letterSpacing: '-0.03em',
            marginBottom: '28px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          Education
          <br />
          <span className="gradient-text">Beyond Marks.</span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
            color: '#94a3b8',
            lineHeight: '1.75',
            maxWidth: '680px',
            margin: '0 auto 48px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
          }}
        >
          Helping students discover who they are, build future-ready skills, and gain real-world
          experience through mentorship, projects, and community.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s',
          }}
        >
          <Link to="/apply" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 32px' }}>
            <span>Apply for the Next Cohort →</span>
          </Link>
          <a href="#journey" className="btn-secondary" style={{ fontSize: '1rem', padding: '16px 32px' }}>
            Explore the Journey
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: isMobile ? '24px 32px' : '48px',
            marginTop: isMobile ? '48px' : '72px',
            paddingTop: isMobile ? '32px' : '48px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.7s ease 0.7s',
          }}
        >
          {[
            { value: '500+', label: 'Students Impacted' },
            { value: '50+', label: 'Expert Mentors' },
            { value: '30+', label: 'Industry Partners' },
            { value: '95%', label: 'Student Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                className="gradient-text"
                style={{ fontSize: '2rem', fontWeight: '800', lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <div style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '6px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: mounted ? 0.5 : 0,
          transition: 'opacity 0.7s ease 1s',
        }}
      >
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent, #7c3aed)', animation: 'float 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}

// ─── Problem ─────────────────────────────────────────────────────────────────

function ProblemSection() {
  const problems = [
    { icon: '📚', text: 'Students are taught what to think, not how to think.' },
    { icon: '🎓', text: 'Academic success does not guarantee life success.' },
    { icon: '🧭', text: 'Most students lack clarity, confidence, and practical exposure.' },
    { icon: '💡', text: 'Traditional education overlooks creativity, communication, and self-awareness.' },
  ]
  const isMobile = useIsMobile()

  return (
    <section style={{ padding: isMobile ? '72px 20px' : '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'rgba(239,68,68,0.04)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <SectionLabel>The Problem</SectionLabel>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
              The education system is{' '}
              <span className="gradient-text-warm">broken.</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Students graduate with degrees but not direction. With knowledge but not wisdom.
            </p>
          </div>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {problems.map((p, i) => (
            <RevealSection key={i} delay={i * 100}>
              <div
                className="glass-card"
                style={{
                  borderRadius: '16px',
                  padding: '32px 28px',
                  borderLeft: '3px solid rgba(239,68,68,0.3)',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{p.icon}</div>
                <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.65', margin: 0, fontWeight: '500' }}>
                  {p.text}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={400}>
          <div
            style={{
              marginTop: '48px',
              padding: isMobile ? '28px 24px' : '40px 48px',
              background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(79,70,229,0.05))',
              border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: '700', color: '#e2e8f0', lineHeight: 1.5, margin: 0 }}>
              OffSyllabus exists to fill the gap —{' '}
              <span className="gradient-text">
                the space between academic success and real-world readiness.
              </span>
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

// ─── Journey ─────────────────────────────────────────────────────────────────

function JourneySection() {
  const isMobile = useIsMobile()
  const steps = [
    {
      num: '01',
      label: 'Discover',
      icon: '🔍',
      color: 'rgba(168,85,247,0.15)',
      border: 'rgba(168,85,247,0.3)',
      desc: 'Understand your strengths, values, and unique potential through guided self-discovery exercises.',
    },
    {
      num: '02',
      label: 'Explore',
      icon: '🌍',
      color: 'rgba(79,70,229,0.15)',
      border: 'rgba(79,70,229,0.3)',
      desc: 'Get real-world exposure through industry visits, mentor interactions, and field experiences.',
    },
    {
      num: '03',
      label: 'Build',
      icon: '🛠',
      color: 'rgba(59,130,246,0.15)',
      border: 'rgba(59,130,246,0.3)',
      desc: 'Work on real challenges, team projects, and create a tangible portfolio that reflects your growth.',
    },
    {
      num: '04',
      label: 'Reflect',
      icon: '💭',
      color: 'rgba(20,184,166,0.15)',
      border: 'rgba(20,184,166,0.3)',
      desc: 'Process your experiences, extract lessons, and develop metacognitive skills for lifelong learning.',
    },
    {
      num: '05',
      label: 'Grow',
      icon: '🚀',
      color: 'rgba(34,197,94,0.15)',
      border: 'rgba(34,197,94,0.3)',
      desc: 'Emerge as a confident, self-aware, future-ready individual prepared to shape your own path.',
    },
  ]

  return (
    <section id="journey" style={{ padding: isMobile ? '72px 20px' : '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'rgba(124,58,237,0.07)', top: '50%', right: '-200px', transform: 'translateY(-50%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <SectionLabel>The Journey</SectionLabel>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
              Your transformation,{' '}
              <span className="gradient-text">step by step.</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto' }}>
              A carefully designed roadmap that takes you from confusion to clarity.
            </p>
          </div>
        </RevealSection>

        {/* Desktop: horizontal flow */}
        {!isMobile && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '16px',
            position: 'relative',
          }}
        >
          {/* Connector line */}
          <div
            style={{
              position: 'absolute',
              top: '52px',
              left: '10%',
              right: '10%',
              height: '2px',
              background: 'linear-gradient(90deg, rgba(168,85,247,0.4), rgba(34,197,94,0.4))',
              zIndex: 0,
            }}
          />
          {steps.map((s, i) => (
            <RevealSection key={s.label} delay={i * 100}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                {/* Icon circle */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: s.color,
                    border: `2px solid ${s.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    marginBottom: '20px',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                >
                  {s.icon}
                </div>
                <div className="gradient-text" style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  {s.num}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#e2e8f0' }}>
                  {s.label}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.8125rem', lineHeight: '1.6', margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
        )}

        {/* Mobile: vertical */}
        {isMobile && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {steps.map((s, i) => (
            <RevealSection key={s.label} delay={i * 80}>
              <div
                className="glass-card"
                style={{ borderRadius: '16px', padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: s.color,
                    border: `1px solid ${s.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <div className="gradient-text" style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {s.num}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '8px', color: '#e2e8f0' }}>
                    {s.label}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
        )}
      </div>
    </section>
  )
}

// ─── What Happens Inside ──────────────────────────────────────────────────────

function FeaturesSection() {
  const isMobile = useIsMobile()
  const features = [
    { icon: '⚡', title: 'Real-World Challenges', desc: 'Tackle genuine business problems and community challenges that push your thinking beyond textbooks.' },
    { icon: '🤝', title: 'Mentor Sessions', desc: 'Regular 1:1 and group sessions with industry professionals who\'ve walked the path you\'re on.' },
    { icon: '🏢', title: 'Industry Exposure', desc: 'Visit startups, enterprises, and creative studios to understand how real organizations operate.' },
    { icon: '🛠', title: 'Team Projects', desc: 'Collaborate on multi-week projects that simulate real professional environments and dynamics.' },
    { icon: '🎓', title: 'Expert Workshops', desc: 'Deep-dive workshops on communication, design thinking, entrepreneurship, and leadership.' },
    { icon: '🌐', title: 'Peer Community', desc: 'Connect with a curated network of ambitious students across cities and industries.' },
    { icon: '📁', title: 'Portfolio Building', desc: 'Create a documented showcase of your projects, skills, and growth story.' },
    { icon: '🧭', title: 'Self-Discovery', desc: 'Guided frameworks to understand your strengths, values, and the life you want to build.' },
    { icon: '👑', title: 'Leadership Development', desc: 'Step into roles that challenge you to lead, decide, and take responsibility for outcomes.' },
  ]

  return (
    <section style={{ padding: isMobile ? '72px 20px' : '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'rgba(79,70,229,0.08)', top: '50%', left: '-100px', transform: 'translateY(-50%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <SectionLabel>What Happens Inside</SectionLabel>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
              Experiences that{' '}
              <span className="gradient-text">actually matter.</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto' }}>
              Every activity inside OffSyllabus is designed to build something real — skills, relationships, and self-knowledge.
            </p>
          </div>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {features.map((f, i) => (
            <RevealSection key={f.title} delay={i * 60}>
              <div
                className="glass-card"
                style={{ borderRadius: '20px', padding: '32px 28px', height: '100%' }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(124,58,237,0.1)',
                    border: '1px solid rgba(124,58,237,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    marginBottom: '20px',
                  }}
                >
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '10px' }}>
                  {f.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Future-Ready Skills ──────────────────────────────────────────────────────

function SkillsSection() {
  const isMobile = useIsMobile()
  const skills = [
    { label: 'Communication', icon: '🗣' },
    { label: 'Problem Solving', icon: '🧩' },
    { label: 'Leadership', icon: '👑' },
    { label: 'Critical Thinking', icon: '🧠' },
    { label: 'Creativity', icon: '🎨' },
    { label: 'Collaboration', icon: '🤝' },
    { label: 'Adaptability', icon: '🔄' },
    { label: 'Entrepreneurship', icon: '🚀' },
    { label: 'Digital Literacy', icon: '💻' },
    { label: 'Emotional Intelligence', icon: '❤️' },
    { label: 'Decision Making', icon: '⚖️' },
    { label: 'Public Speaking', icon: '🎤' },
  ]

  return (
    <section
      style={{
        padding: isMobile ? '72px 20px' : '120px 24px',
        background: 'rgba(0,0,0,0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="glow-orb" style={{ width: '700px', height: '700px', background: 'rgba(124,58,237,0.06)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <SectionLabel>Future-Ready Skills</SectionLabel>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
              Skills that{' '}
              <span className="gradient-text">no textbook teaches.</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto' }}>
              The capabilities that separate exceptional individuals from average ones are not found in any curriculum.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {skills.map((skill, i) => (
              <div
                key={skill.label}
                className="skill-pill"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span>{skill.icon}</span>
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* Visual representation */}
        <RevealSection delay={400}>
          <div
            style={{
              marginTop: '72px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
            }}
          >
            {[
              { label: 'Academic Knowledge', value: 20, color: '#ef4444', suffix: '% of what matters' },
              { label: 'Soft Skills & Character', value: 80, color: '#7c3aed', suffix: '% of what matters' },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card"
                style={{ borderRadius: '20px', padding: '32px 28px', textAlign: 'center' }}
              >
                <div
                  style={{
                    fontSize: 'clamp(3rem, 7vw, 5rem)',
                    fontWeight: '800',
                    color: item.color,
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  {item.value}%
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: '500' }}>
                  {item.label}
                </div>
                <div style={{ color: '#475569', fontSize: '0.8rem', marginTop: '4px' }}>
                  {item.suffix}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

// ─── Cohort Experience ────────────────────────────────────────────────────────

function CohortSection() {
  const isMobile = useIsMobile()
  const experiences = [
    { icon: '🏬', title: 'Mall Challenges', desc: 'Real-world social experiments to build confidence, communication, and quick thinking.' },
    { icon: '🏢', title: 'Startup Visits', desc: 'Behind-the-scenes tours of thriving startups, meeting founders and understanding their journeys.' },
    { icon: '🎯', title: 'Field Workshops', desc: 'Hands-on workshops in creative and professional settings beyond traditional classrooms.' },
    { icon: '🎙', title: 'Group Presentations', desc: 'Regular opportunities to present ideas, receive feedback, and develop stage confidence.' },
    { icon: '🌿', title: 'Community Events', desc: 'Regular meetups, celebrations, and community-building activities that forge real friendships.' },
    { icon: '🔬', title: 'Industry Labs', desc: 'Immersive sessions inside organizations where students observe and participate in real work.' },
  ]

  return (
    <section style={{ padding: isMobile ? '72px 20px' : '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'rgba(124,58,237,0.07)', top: '20%', right: '-100px' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <SectionLabel>Cohort Experience</SectionLabel>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
              Learning is an{' '}
              <span className="gradient-text">adventure.</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto' }}>
              OffSyllabus takes you out of the classroom and into the real world — where the real learning happens.
            </p>
          </div>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {experiences.map((exp, i) => (
            <RevealSection key={exp.title} delay={i * 80}>
              <div
                className="glass-card"
                style={{
                  borderRadius: '20px',
                  padding: '36px 32px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,70,229,0.1))',
                    border: '1px solid rgba(124,58,237,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    flexShrink: 0,
                  }}
                >
                  {exp.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '10px' }}>
                    {exp.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>
                    {exp.desc}
                  </p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Transformation ───────────────────────────────────────────────────────────

function TransformationSection() {
  const isMobile = useIsMobile()
  const before = [
    { icon: '😕', text: 'Confused about the future' },
    { icon: '😴', text: 'Passive learner, waiting for direction' },
    { icon: '😰', text: 'Career uncertainty and anxiety' },
    { icon: '🤫', text: 'Lack of confidence in self-expression' },
    { icon: '📖', text: 'Only knows what textbooks teach' },
  ]

  const after = [
    { icon: '🎯', text: 'Self-aware with clarity and purpose' },
    { icon: '⚡', text: 'Confident, action-oriented go-getter' },
    { icon: '🚀', text: 'Future-ready with a clear direction' },
    { icon: '🎤', text: 'Strong communicator who commands rooms' },
    { icon: '🌍', text: 'Builder of real-world experiences' },
  ]

  const testimonials = [
  {
    name: 'Raghav Omkar',
    age: '18',
    text: 'The mentorship and learning environment at OffSyllabus changed my perspective completely. I realized success is not just about marks—it is about mindset, skills, execution, and continuous growth.',
    city: 'Science',
  },
  {
    name: 'Mahi Pawar',
    age: '17',
    text: 'The community at OffSyllabus is unlike anything I have experienced. Being surrounded by ambitious students motivated me to learn faster, think bigger, and become a better version of myself every day.',
    city: 'Commerce',
  },
  {
    name: 'Aditri',
    age: '17',
    text: 'Before OffSyllabus, I was unsure about my direction. The mentorship, projects, and supportive environment helped me gain confidence, discover my strengths, and take meaningful steps toward my goals.',
    city: 'Science',
  },
]
  return (
    <section
      style={{
        padding: isMobile ? '72px 20px' : '120px 24px',
        background: 'rgba(0,0,0,0.25)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'rgba(124,58,237,0.06)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <SectionLabel>Student Transformation</SectionLabel>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
              See who you become{' '}
              <span className="gradient-text">after.</span>
            </h2>
          </div>
        </RevealSection>

        {/* Before / After */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          <RevealSection>
            <div
              className="comparison-before"
              style={{ borderRadius: '20px', padding: '36px 32px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                  }}
                >
                  ✗
                </div>
                <h3 style={{ fontWeight: '700', fontSize: '1.125rem', color: '#fca5a5' }}>Before OffSyllabus</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {before.map((item) => (
                  <div key={item.text} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.9375rem' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={150}>
            <div
              className="comparison-after"
              style={{ borderRadius: '20px', padding: '36px 32px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(124,58,237,0.1)',
                    border: '1px solid rgba(124,58,237,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontWeight: '700', fontSize: '1.125rem', color: '#c4b5fd' }}>After OffSyllabus</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {after.map((item) => (
                  <div key={item.text} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ color: '#e2e8f0', fontSize: '0.9375rem', fontWeight: '500' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Testimonials */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {testimonials.map((t, i) => (
            <RevealSection key={t.name} delay={i * 100}>
              <div
                className="glass-card"
                style={{ borderRadius: '20px', padding: '32px 28px' }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} style={{ color: '#f59e0b', fontSize: '0.875rem' }}>★</span>
                  ))}
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '24px', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      color: 'white',
                      fontSize: '0.875rem',
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#e2e8f0', fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ color: '#64748b', fontSize: '0.8125rem' }}>Age {t.age} · {t.city}</div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Community ────────────────────────────────────────────────────────────────

function CommunitySection() {
  const isMobile = useIsMobile()
  const members = [
    { icon: '🧑‍🎓', label: 'Students', desc: 'Curious, ambitious learners aged 15–21 from diverse backgrounds' },
    { icon: '🧑‍💼', label: 'Mentors', desc: 'Experienced professionals who\'ve built real things in the real world' },
    { icon: '🚀', label: 'Founders', desc: 'Entrepreneurs who share their playbooks and open their networks' },
    { icon: '🌐', label: 'Professionals', desc: 'Industry experts from tech, design, business, and creative fields' },
    { icon: '🏆', label: 'Alumni', desc: 'Past cohort members who give back and keep the ecosystem thriving' },
  ]

  return (
    <section style={{ padding: isMobile ? '72px 20px' : '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'rgba(124,58,237,0.07)', top: '30%', right: '-150px' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <SectionLabel>The Community</SectionLabel>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
              You don't grow alone.
              <br />
              <span className="gradient-text">You grow together.</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto' }}>
              OffSyllabus is an ecosystem — a network of people who push each other forward, hold each other accountable, and celebrate each other's wins.
            </p>
          </div>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '64px' }}>
          {members.map((m, i) => (
            <RevealSection key={m.label} delay={i * 80}>
              <div
                className="glass-card"
                style={{ borderRadius: '20px', padding: '32px 24px', textAlign: 'center' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{m.icon}</div>
                <h3 style={{ fontWeight: '700', fontSize: '1rem', color: '#e2e8f0', marginBottom: '10px' }}>
                  {m.label}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.8125rem', lineHeight: '1.6', margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Community values */}
        <RevealSection delay={400}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { icon: '🔗', label: 'Networking', desc: 'Real connections, not LinkedIn requests' },
              { icon: '⚖️', label: 'Accountability', desc: 'Peers who keep you on track' },
              { icon: '🤲', label: 'Collaboration', desc: 'Building together, growing together' },
              { icon: '♾', label: 'Lifelong Bonds', desc: 'Relationships that outlast the cohort' },
            ].map((val) => (
              <div
                key={val.label}
                style={{
                  padding: '24px 20px',
                  background: 'rgba(124,58,237,0.05)',
                  border: '1px solid rgba(124,58,237,0.12)',
                  borderRadius: '14px',
                  textAlign: 'center',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.3)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.12)')}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '10px' }}>{val.icon}</div>
                <div style={{ fontWeight: '700', color: '#e2e8f0', fontSize: '0.9rem', marginBottom: '6px' }}>{val.label}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{val.desc}</div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

// ─── Who Should Apply ─────────────────────────────────────────────────────────

function EligibilitySection() {
  const isMobile = useIsMobile()
  const criteria = [
    'Curious learners who never stop asking why',
    'Students aged 15–21 looking to grow beyond grades',
    'Builders and creators who love making things',
    'Future entrepreneurs with ideas and ambition',
    'Students seeking clarity about their path',
    'Learners who want more than academics can offer',
    'People who are willing to be challenged and grow',
    'Those ready to step outside their comfort zone',
  ]

  return (
    <section
      style={{
        padding: isMobile ? '72px 20px' : '120px 24px',
        background: 'rgba(0,0,0,0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'rgba(124,58,237,0.07)', top: '50%', left: '-100px', transform: 'translateY(-50%)' }} />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: isMobile ? '48px' : '80px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <RevealSection>
          <SectionLabel>Who Should Apply</SectionLabel>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '20px', marginTop: '0' }}>
            This is for students who{' '}
            <span className="gradient-text">dare to be different.</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7', marginBottom: '32px' }}>
            OffSyllabus is selective — not because we want to exclude, but because transformation requires commitment. We're looking for students who are genuinely ready to grow.
          </p>
          <Link to="/apply" className="btn-primary">
            <span>Check if You Qualify →</span>
          </Link>
        </RevealSection>

        <RevealSection delay={200}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {criteria.map((c, i) => (
              <div key={i} className="check-item">
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    color: 'white',
                    fontWeight: '700',
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>
                <span style={{ color: '#cbd5e1', fontSize: '0.9375rem' }}>{c}</span>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

// ─── Application Process ──────────────────────────────────────────────────────

function ApplicationSection() {
  const isMobile = useIsMobile()
  const steps = [
    {
      num: '01',
      title: 'Apply',
      desc: 'Fill out our application form. Tell us about yourself, your interests, and why you\'re ready for OffSyllabus.',
      icon: '📝',
    },
    {
      num: '02',
      title: 'Conversation',
      desc: 'We schedule a short call to get to know you better — your aspirations, your mindset, and your readiness to grow.',
      icon: '💬',
    },
    {
      num: '03',
      title: 'Join the Cohort',
      desc: 'Selected students receive an offer to join the cohort. Welcome to a community that will change your life.',
      icon: '🎉',
    },
  ]

  return (
    <section style={{ padding: isMobile ? '72px 20px' : '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'rgba(79,70,229,0.07)', top: '50%', right: '-100px', transform: 'translateY(-50%)' }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <SectionLabel>Application Process</SectionLabel>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
              Three steps to{' '}
              <span className="gradient-text">your transformation.</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto' }}>
              Admission is selective. We carefully evaluate every applicant to ensure the cohort is the right fit.
            </p>
          </div>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px', marginBottom: '56px' }}>
          {steps.map((step, i) => (
            <RevealSection key={step.title} delay={i * 100}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '20px',
                  padding: '40px 32px',
                  position: 'relative',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.35)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)')}
              >
                {/* Step number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '32px',
                    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                    borderRadius: '8px',
                    padding: '4px 14px',
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    color: 'white',
                    letterSpacing: '0.05em',
                  }}
                >
                  Step {step.num}
                </div>
                <div style={{ fontSize: '2.5rem', marginBottom: '20px', marginTop: '8px' }}>{step.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '12px' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={400}>
          <div style={{ textAlign: 'center' }}>
            <Link to="/apply" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
              <span>Start Your Application →</span>
            </Link>
            <p style={{ color: '#475569', fontSize: '0.8125rem', marginTop: '16px' }}>
              Applications reviewed on a rolling basis. Limited seats per cohort.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)
  const isMobile = useIsMobile()

  const faqs = [
    {
      q: 'What is OffSyllabus?',
      a: 'OffSyllabus is a structured growth ecosystem for students aged 15–21. It\'s not a coaching class, tuition center, or online course platform. It\'s a community-driven experience focused on self-discovery, real-world learning, mentorship, and future-ready skill development — everything that traditional education misses.',
    },
    {
      q: 'Who can join OffSyllabus?',
      a: 'Any student between 15–21 years old who is curious, motivated, and genuinely looking to grow beyond academic performance. We welcome students from any background, stream, or city — what matters is your mindset and readiness to be challenged.',
    },
    {
      q: 'Is it career-focused?',
      a: 'Indirectly, yes. OffSyllabus doesn\'t train you for a specific job — it develops the foundational skills, self-awareness, and real-world exposure that make you exceptional in whatever career path you choose. Students gain clarity about their direction, which often leads to much clearer career choices.',
    },
    {
      q: 'How much time is required per week?',
      a: 'Expect to commit 8–12 hours per week including sessions, project work, and community participation. This is a serious commitment — but it\'s the kind of commitment that changes your life. The program is designed to be intense but manageable alongside school or college.',
    },
    {
      q: 'How is OffSyllabus different from coaching classes?',
      a: 'Coaching classes focus on marks. OffSyllabus focuses on you as a person. We don\'t teach subjects — we develop people. You won\'t sit in rows listening to lectures. You\'ll be out in the world, building things, meeting professionals, reflecting on your experiences, and growing into the person you\'re meant to be.',
    },
    {
      q: 'What outcomes can students expect?',
      a: 'By the end of a cohort, students typically report: significantly increased self-awareness, a portfolio of real projects, a network of mentors and peers, improved communication and leadership skills, and most importantly — clarity about who they are and where they\'re headed.',
    },
  ]

  return (
    <section
      style={{
        padding: isMobile ? '72px 20px' : '120px 24px',
        background: 'rgba(0,0,0,0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'rgba(124,58,237,0.06)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <SectionLabel>FAQ</SectionLabel>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
              Questions?{' '}
              <span className="gradient-text">Answered.</span>
            </h2>
          </div>
        </RevealSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <RevealSection key={i} delay={i * 60}>
              <div
                style={{
                  background: open === i ? 'rgba(124,58,237,0.05)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${open === i ? 'rgba(124,58,237,0.25)' : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'background 0.2s ease, border-color 0.2s ease',
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: isMobile ? '18px 20px' : '24px 28px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '16px',
                  }}
                >
                  <span style={{ fontWeight: '600', color: '#e2e8f0', fontSize: '0.9375rem' }}>
                    {faq.q}
                  </span>
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: open === i ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      color: open === i ? '#a78bfa' : '#64748b',
                      flexShrink: 0,
                      transition: 'transform 0.3s ease, background 0.2s ease',
                      transform: open === i ? 'rotate(45deg)' : 'none',
                    }}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div style={{ padding: '0 28px 24px' }}>
                    <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.7', margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function CTASection() {
  const isMobile = useIsMobile()
  return (
    <section style={{ padding: isMobile ? '72px 20px' : '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: '800px', height: '800px', background: 'rgba(124,58,237,0.1)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
      <div className="glow-orb" style={{ width: '400px', height: '400px', background: 'rgba(79,70,229,0.08)', top: '20%', right: '10%' }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
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
              fontWeight: '600',
              color: '#c4b5fd',
              marginBottom: '32px',
              letterSpacing: '0.05em',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', display: 'inline-block' }} />
            Limited Cohort Seats
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: '800',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}
          >
            Your Future Won't Be Built
            <br />
            <span className="gradient-text">Inside a Textbook.</span>
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#94a3b8',
              lineHeight: '1.75',
              maxWidth: '600px',
              margin: '0 auto 48px',
            }}
          >
            Join a community of ambitious students building the skills, mindset, and experiences needed to thrive in the real world.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <Link to="/apply" className="btn-primary" style={{ fontSize: '1.0625rem', padding: '18px 40px' }}>
              <span>Apply for the Next Cohort →</span>
            </Link>
            <Link to="/about" className="btn-secondary" style={{ fontSize: '1.0625rem', padding: '18px 40px' }}>
              Learn More About Us
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <div style={{ paddingTop: 0 }}>
      <HeroSection />
      <div className="gradient-divider" />
      <ProblemSection />
      <div className="gradient-divider" />
      <JourneySection />
      <div className="gradient-divider" />
      <FeaturesSection />
      <div className="gradient-divider" />
      <SkillsSection />
      <div className="gradient-divider" />
      <CohortSection />
      <div className="gradient-divider" />
      <TransformationSection />
      <div className="gradient-divider" />
      <CommunitySection />
      <div className="gradient-divider" />
      <EligibilitySection />
      <div className="gradient-divider" />
      <ApplicationSection />
      <div className="gradient-divider" />
      <FAQSection />
      <div className="gradient-divider" />
      <CTASection />
    </div>
  )
}
