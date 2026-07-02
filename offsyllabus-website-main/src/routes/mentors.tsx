import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/mentors')({
  head: () => ({
    meta: [
      { title: 'Mentors — OffSyllabus' },
      { name: 'description', content: 'Meet the OffSyllabus mentors — experienced professionals, founders, and industry experts guiding the next generation.' },
    ],
  }),
  component: MentorsPage,
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

const mentors = [
  { name: 'Meet Shah', role: 'Technical Delivery Manager', company: 'Startups & Scaleups', icon: 'MS', area: 'Product Delivery', color: '#3b82f6', quote: "Great products aren't built, they're delivered — end to end." },
  { name: 'Priya Menon', role: 'Product Manager', company: 'Top Tech Company', icon: 'PM', area: 'Product & Design', color: '#4f46e5', quote: 'The right question at the right age changes everything.' },
  { name: 'Rahul Singh', role: 'Creative Director', company: 'Design Agency', icon: 'RS', area: 'Design & Creativity', color: '#ec4899', quote: "Creativity is a skill, not a gift — and I'm here to prove it." },
  { name: 'Deepa Krishnan', role: 'Marketing Lead', company: 'D2C Brand', icon: 'DK', area: 'Marketing & Growth', color: '#f59e0b', quote: 'I love helping students find their unique voice and story.' },
  { name: 'Vikram Nair', role: 'Software Engineer', company: 'Global Tech Firm', icon: 'VN', area: 'Technology', color: '#06b6d4', quote: 'Technical skills are learnable. Mindset is everything.' },
  { name: 'Sneha Joshi', role: 'Clinical Psychologist', company: 'Wellness Practice', icon: 'SJ', area: 'Mental Health & Wellbeing', color: '#34d399', quote: 'Self-awareness is the foundation of all success.' },
  { name: 'Aditya Patel', role: 'Investment Analyst', company: 'Venture Capital', icon: 'AP', area: 'Finance & Investing', color: '#f97316', quote: 'Understanding how money works is a superpower at any age.' },
  { name: 'Riya Sharma', role: 'Journalist & Author', company: 'National Publication', icon: 'RS', area: 'Communication & Writing', color: '#a78bfa', quote: 'Every student has a story worth telling — I help them find it.' },
]

const mentorshipAreas = [
  { icon: '🚀', label: 'Entrepreneurship & Startups' },
  { icon: '💻', label: 'Technology & Engineering' },
  { icon: '🎨', label: 'Design & Creativity' },
  { icon: '📊', label: 'Business & Finance' },
  { icon: '🎤', label: 'Communication & Media' },
  { icon: '🌱', label: 'Personal Growth & Wellbeing' },
  { icon: '📱', label: 'Product & Marketing' },
  { icon: '🏛', label: 'Social Impact & NGOs' },
]

function MentorsPage() {
  const isMobile = useIsMobile()
  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: isMobile ? '64px 16px' : '100px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '700px', height: '700px', borderRadius: '50%', background: 'rgba(124,58,237,0.09)', filter: 'blur(80px)', top: '-150px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600', color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', display: 'inline-block' }} />
            Our Mentors
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '20px' }}>
            Guided by people who've{' '}
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #7c3aed, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>been there.</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: isMobile ? '1rem' : '1.125rem', lineHeight: '1.75' }}>
            Our mentors aren't just successful professionals — they're people who genuinely believe in the potential of young minds and give their time, wisdom, and networks to help students grow.
          </p>
        </div>
      </section>

      {/* Mentors grid */}
      <section style={{ padding: isMobile ? '32px 16px 64px' : '40px 24px 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '64px' }}>
            {mentors.map((m, i) => (
              <RevealSection key={m.name + i} delay={i * 70}>
                <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: isMobile ? '24px 20px' : '32px 28px', transition: 'border-color 0.3s ease, transform 0.3s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${m.color}50`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: `linear-gradient(135deg, ${m.color}, ${m.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', color: 'white', fontSize: '1rem', flexShrink: 0 }}>{m.icon}</div>
                    <div>
                      <div style={{ fontWeight: '700', color: '#e2e8f0', fontSize: '1rem' }}>{m.name}</div>
                      <div style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '2px' }}>{m.role} · {m.company}</div>
                    </div>
                  </div>
                  <div style={{ display: 'inline-block', padding: '4px 12px', background: `${m.color}15`, border: `1px solid ${m.color}30`, borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600', color: m.color, marginBottom: '16px' }}>{m.area}</div>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.65', fontStyle: 'italic', margin: 0 }}>"{m.quote}"</p>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Areas */}
          <RevealSection delay={100}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '12px' }}>
                Mentorship across{' '}
                <span style={{ background: 'linear-gradient(135deg, #a78bfa, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>every domain.</span>
              </h2>
              <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>No matter what direction you want to grow in, we have mentors who've walked that path.</p>
            </div>
          </RevealSection>
          <RevealSection delay={200}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {mentorshipAreas.map((area) => (
                <div key={area.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.15)', borderRadius: '100px', fontSize: isMobile ? '0.8125rem' : '0.875rem', fontWeight: '500', color: '#c4b5fd' }}>
                  <span>{area.icon}</span>
                  <span>{area.label}</span>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Become a mentor */}
      <section style={{ padding: isMobile ? '48px 16px' : '80px 24px', background: 'rgba(0,0,0,0.2)', position: 'relative' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(124,58,237,0.07)', filter: 'blur(80px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))', gap: isMobile ? '40px' : '60px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <RevealSection>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '20px' }}>
              Want to become{' '}
              <span style={{ background: 'linear-gradient(135deg, #a78bfa, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>a mentor?</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7', marginBottom: '32px' }}>If you're a professional, founder, or expert who believes in paying it forward, we'd love to have you in the OffSyllabus mentor community. Your experience could change a student's trajectory.</p>
            <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', borderRadius: '10px', fontWeight: '600', fontSize: '1rem', textDecoration: 'none' }}>
              Express Interest →
            </Link>
          </RevealSection>
          <RevealSection delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: '⏰', title: 'Flexible commitment', desc: 'Mentor as little as 2–4 hours per month — we work around your schedule.' },
                { icon: '🎯', title: 'Real impact', desc: "See the direct impact of your guidance on students' growth and confidence." },
                { icon: '🌐', title: 'Community access', desc: 'Become part of a vibrant community of like-minded professionals and changemakers.' },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px 24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: '600', color: '#e2e8f0', fontSize: '0.9375rem', marginBottom: '6px' }}>{item.title}</div>
                    <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}