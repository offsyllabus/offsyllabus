import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'

export const Route = createFileRoute('/mentors/apply')({
  head: () => ({
    meta: [
      { title: 'Apply as a Mentor — OffSyllabus' },
      { name: 'description', content: 'Join our mentor community. Share your expertise and guide the next generation. Quick 3-minute application.' },
    ],
  }),
  component: MentorApplyPage,
})

function MentorApplyPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    expertise: [] as string[],
    portfolio: '',
    resume: null as File | null,
  })

  const update = (field: string, value: any) =>
    setForm((f) => ({ ...f, [field]: value }))

  const toggleExpertise = (area: string) => {
    setForm((f) => ({
      ...f,
      expertise: f.expertise.includes(area)
        ? f.expertise.filter((e) => e !== area)
        : [...f.expertise, area],
    }))
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    color: '#f1f5f9',
    fontSize: '0.9375rem',
    outline: 'none',
    transition: 'border-color 0.2s ease, background 0.2s ease',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    color: '#94a3b8',
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '8px',
  }

  const fieldStyle: React.CSSProperties = {
    marginBottom: '24px',
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append('fullName', form.fullName)
    formData.append('email', form.email)
    formData.append('phone', form.phone)
    formData.append('expertise', form.expertise.join(', '))
    formData.append('portfolio', form.portfolio)
    if (form.resume) {
      formData.append('resume', form.resume)
    }

    try {
      await fetch(
        'https://script.google.com/macros/s/YOUR_GOOGLE_APPS_SCRIPT_ID/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      )
      setSubmitted(true)
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ position: 'fixed', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(124,58,237,0.12)', filter: 'blur(80px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 32px' }}>
              🎓
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '20px' }}>
              Welcome to the
              <span style={{ background: 'linear-gradient(135deg, #a78bfa, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {' '}Mentor Community!
              </span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.0625rem', lineHeight: '1.75', marginBottom: '32px' }}>
              Thank you, <strong style={{ color: '#e2e8f0' }}>{form.fullName}</strong>! We've received your application.
              <br /><br />
              We'll review it carefully and reach out within <strong style={{ color: '#a78bfa' }}>3–5 business days</strong> with next steps.
            </p>
            <div style={{ padding: '24px 28px', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '16px', marginBottom: '32px', textAlign: 'left' }}>
              <h3 style={{ fontWeight: '700', color: '#e2e8f0', fontSize: '1rem', marginBottom: '16px' }}>What's next?</h3>
              {[
                { num: '01', text: 'We review your profile and expertise' },
                { num: '02', text: 'You receive an email with mentor onboarding details' },
                { num: '03', text: 'Complete your full profile and get matched with mentees' },
              ].map((s) => (
                <div key={s.num} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700', color: 'white', flexShrink: 0 }}>{s.num}</div>
                  <span style={{ color: '#94a3b8', fontSize: '0.9375rem' }}>{s.text}</span>
                </div>
              ))}
            </div>
            <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', borderRadius: '10px', fontWeight: '600', fontSize: '1rem', textDecoration: 'none' }}>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    )
  }

  const expertiseAreas = [
    'AI & Machine Learning',
    'Product Management',
    'Software Engineering',
    'Design (UX/UI)',
    'Marketing & Growth',
    'Sales',
    'Entrepreneurship',
    'Finance & Investing',
    'Data Science',
    'Leadership & Management',
    'Career Guidance',
    'Other',
  ]

  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(124,58,237,0.1)', filter: 'blur(80px)', top: '-150px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '620px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600', color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', display: 'inline-block' }} />
            Become a Mentor · Guide the Next Generation
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
            Share Your
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #7c3aed, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {' '}Expertise
            </span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', lineHeight: '1.75', maxWidth: '500px', margin: '0 auto' }}>
            Join our community of mentors. Help students navigate their path beyond traditional education. Takes just 3 minutes to apply.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '20px 24px 100px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '24px', padding: '48px 44px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#e2e8f0', marginBottom: '8px', letterSpacing: '-0.02em' }}>Quick Application</h2>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '36px' }}>Tell us about yourself and your expertise.</p>

              {/* Full Name */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => update('fullName', e.target.value)}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLInputElement).style.background = 'rgba(124,58,237,0.04)' }}
                  onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)' }}
                />
              </div>

              {/* Email */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@example.com"
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLInputElement).style.background = 'rgba(124,58,237,0.04)' }}
                  onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)' }}
                />
              </div>

              {/* Phone */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLInputElement).style.background = 'rgba(124,58,237,0.04)' }}
                  onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)' }}
                />
              </div>

              {/* Areas of Expertise */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Areas of Expertise *</label>
                <p style={{ color: '#64748b', fontSize: '0.8125rem', marginBottom: '16px' }}>Select all that apply</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
                  {expertiseAreas.map((area) => (
                    <label
                      key={area}
                      style={{
                        padding: '12px 16px',
                        background: form.expertise.includes(area) ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)',
                        border: form.expertise.includes(area) ? '1px solid rgba(124,58,237,0.5)' : '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.875rem',
                        color: form.expertise.includes(area) ? '#a78bfa' : '#94a3b8',
                      }}
                      onMouseEnter={(e) => {
                        if (!form.expertise.includes(area)) {
                          (e.currentTarget as HTMLLabelElement).style.borderColor = 'rgba(255,255,255,0.15)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!form.expertise.includes(area)) {
                          (e.currentTarget as HTMLLabelElement).style.borderColor = 'rgba(255,255,255,0.1)'
                        }
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={form.expertise.includes(area)}
                        onChange={() => toggleExpertise(area)}
                        style={{
                          accentColor: '#7c3aed',
                          cursor: 'pointer',
                          width: '16px',
                          height: '16px',
                        }}
                      />
                      {area}
                    </label>
                  ))}
                </div>
              </div>

              {/* Portfolio Website */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Portfolio Website (Optional)</label>
                <input
                  type="url"
                  value={form.portfolio}
                  onChange={(e) => update('portfolio', e.target.value)}
                  placeholder="https://yourportfolio.com or LinkedIn/GitHub URL"
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLInputElement).style.background = 'rgba(124,58,237,0.04)' }}
                  onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)' }}
                />
                <p style={{ color: '#475569', fontSize: '0.75rem', marginTop: '6px' }}>Portfolio, GitHub, Behance, or LinkedIn profile</p>
              </div>

              {/* Resume Upload */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Resume/CV (Optional)</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => update('resume', e.target.files?.[0] || null)}
                    style={{
                      position: 'absolute',
                      opacity: 0,
                      width: '100%',
                      height: '100%',
                      cursor: 'pointer',
                    }}
                  />
                  <div
                    style={{
                      padding: '20px 24px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '2px dashed rgba(124,58,237,0.3)',
                      borderRadius: '10px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(124,58,237,0.6)'
                      (e.currentTarget as HTMLDivElement).style.background = 'rgba(124,58,237,0.08)'
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(124,58,237,0.3)'
                      (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)'
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📄</div>
                    <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: '0' }}>
                      {form.resume ? form.resume.name : 'Click to upload or drag & drop'}
                    </p>
                    <p style={{ color: '#64748b', fontSize: '0.75rem', margin: '4px 0 0' }}>PDF, DOC, or DOCX</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !form.fullName || !form.email || !form.phone || form.expertise.length === 0}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  background: loading || !form.fullName || !form.email || !form.phone || form.expertise.length === 0 ? 'rgba(124,58,237,0.5)' : 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                  border: 'none',
                  borderRadius: '10px',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1rem',
                  cursor: loading || !form.fullName || !form.email || !form.phone || form.expertise.length === 0 ? 'not-allowed' : 'pointer',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  opacity: loading || !form.fullName || !form.email || !form.phone || form.expertise.length === 0 ? 0.7 : 1,
                  marginTop: '12px',
                }}
              >
                {loading ? 'Submitting…' : 'Apply Now 🚀'}
              </button>
            </div>
          </form>

          {/* Trust signals */}
          <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
            {[
              { icon: '⚡', text: 'Takes 3 minutes' },
              { icon: '🔒', text: 'Your info is safe' },
              { icon: '🤝', text: 'We read every application' },
            ].map((t) => (
              <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '0.8125rem' }}>
                <span>{t.icon}</span>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}