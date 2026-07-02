import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/apply')({
  head: () => ({
    meta: [
      { title: 'Apply — OffSyllabus' },
      { name: 'description', content: 'Apply for the next OffSyllabus cohort. Limited seats available. Start your transformation today.' },
    ],
  }),
  component: ApplyPage,
})

function ApplyPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    age: '',
    city: '',
    email: '',
    phone: '',
    school: '',
    stream: '',
    program: '',
    why: '',
    goals: '',
    challenge: '',
    commitment: '',
  })

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }))

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
    formData.append('name', form.name)
    formData.append('age', form.age)
    formData.append('city', form.city)
    formData.append('email', form.email)
    formData.append('phone', form.phone)
    formData.append('school', form.school)
    formData.append('stream', form.stream)
    formData.append('program', form.program)
    formData.append('why', form.why)
    formData.append('goals', form.goals)
    formData.append('challenge', form.challenge)
    formData.append('commitment', form.commitment)

    try {
      // mode: 'no-cors' is required for Google Apps Script endpoints.
      // The response will be opaque but the data will still be received by the script.
      await fetch(
        'https://script.google.com/macros/s/AKfycbwfpF-mm7XoyFDgASnIQhkhbj13nrnC9DlrtD9ylVCEg6Nco0_Wcn1FOec3NduD0SxcxQ/exec',
        {
          method: 'POST',
          mode: 'no-cors', // ← FIXED: prevents CORS error from blocking submission
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
      // FIXED: removed conflicting paddingTop — use padding shorthand only
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ position: 'fixed', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(124,58,237,0.12)', filter: 'blur(80px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 32px' }}>
              🎉
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '20px' }}>
              Application{' '}
              <span style={{ background: 'linear-gradient(135deg, #a78bfa, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Received!
              </span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.0625rem', lineHeight: '1.75', marginBottom: '32px' }}>
              Thank you, <strong style={{ color: '#e2e8f0' }}>{form.name || 'there'}</strong>! We've received your application and will review it carefully.
              <br /><br />
              Expect to hear from us within <strong style={{ color: '#a78bfa' }}>3–5 business days</strong> with next steps. Keep an eye on your email.
            </p>
            <div style={{ padding: '24px 28px', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '16px', marginBottom: '32px', textAlign: 'left' }}>
              <h3 style={{ fontWeight: '700', color: '#e2e8f0', fontSize: '1rem', marginBottom: '16px' }}>What happens next?</h3>
              {[
                { num: '01', text: 'We review your application thoroughly' },
                { num: '02', text: "You'll receive an email to schedule a conversation call" },
                { num: '03', text: 'Selected students receive cohort onboarding details' },
              ].map((s) => (
                <div key={s.num} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700', color: 'white', flexShrink: 0 }}>{s.num}</div>
                  <span style={{ color: '#94a3b8', fontSize: '0.9375rem' }}>{s.text}</span>
                </div>
              ))}
            </div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', borderRadius: '10px', fontWeight: '600', fontSize: '1rem', textDecoration: 'none' }}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(124,58,237,0.1)', filter: 'blur(80px)', top: '-150px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '620px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600', color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', display: 'inline-block' }} />
            Selective Admissions · Limited Seats
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
            Apply for the{' '}
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #7c3aed, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Next Cohort.
            </span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', lineHeight: '1.75', maxWidth: '500px', margin: '0 auto' }}>
            Tell us about yourself. We read every application personally and look for curiosity, drive, and genuine readiness to grow.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '20px 24px 100px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {/* Progress steps */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '48px', justifyContent: 'center' }}>
            {[
              { num: 1, label: 'Basic Info' },
              { num: 2, label: 'Background' },
              { num: 3, label: 'Motivation' },
            ].map((s) => (
              <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: step >= s.num ? 'linear-gradient(135deg, #7c3aed, #4f46e5)' : 'rgba(255,255,255,0.06)', border: `1px solid ${step >= s.num ? 'transparent' : 'rgba(255,255,255,0.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: '700', color: step >= s.num ? 'white' : '#64748b', transition: 'all 0.3s ease' }}>
                    {step > s.num ? '✓' : s.num}
                  </div>
                  <span style={{ color: step >= s.num ? '#e2e8f0' : '#475569', fontSize: '0.875rem', fontWeight: step >= s.num ? '600' : '400', display: 'none' }} className="sm:block">
                    {s.label}
                  </span>
                </div>
                {s.num < 3 && (
                  <div style={{ width: '40px', height: '2px', background: step > s.num ? 'linear-gradient(90deg, #7c3aed, #4f46e5)' : 'rgba(255,255,255,0.08)', borderRadius: '2px', transition: 'background 0.3s ease', marginLeft: '8px' }} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '24px', padding: '48px 44px' }}>

              {/* Step 1 */}
              {step === 1 && (
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#e2e8f0', marginBottom: '8px', letterSpacing: '-0.02em' }}>Tell us about yourself</h2>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '36px' }}>Basic information to get started.</p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your full name" style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLInputElement).style.background = 'rgba(124,58,237,0.04)' }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)' }} />
                    </div>
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Age *</label>
                      <input type="number" required min={15} max={21} value={form.age} onChange={(e) => update('age', e.target.value)} placeholder="15–21" style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLInputElement).style.background = 'rgba(124,58,237,0.04)' }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)' }} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Email Address *</label>
                      <input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLInputElement).style.background = 'rgba(124,58,237,0.04)' }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)' }} />
                    </div>
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Phone Number *</label>
                      <input type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLInputElement).style.background = 'rgba(124,58,237,0.04)' }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)' }} />
                    </div>
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>City *</label>
                    <input type="text" required value={form.city} onChange={(e) => update('city', e.target.value)} placeholder="Your city" style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLInputElement).style.background = 'rgba(124,58,237,0.04)' }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)' }} />
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Program of Interest *</label>
                    <select required value={form.program} onChange={(e) => update('program', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = 'rgba(124,58,237,0.5)' }}
                      onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = 'rgba(255,255,255,0.1)' }}>
                      <option value="" style={{ background: '#0d0d1a' }}>Select a program...</option>
                      <option value="discovery" style={{ background: '#0d0d1a' }}>Discovery Sprint (4 Days)</option>
                      <option value="growth" style={{ background: '#0d0d1a' }}>Growth Cohort (12 Months) — Most Popular</option>
                      <option value="founder" style={{ background: '#0d0d1a' }}>Founder Track (4-8 Weeks)</option>
                      <option value="unsure" style={{ background: '#0d0d1a' }}>I'm not sure yet</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#e2e8f0', marginBottom: '8px', letterSpacing: '-0.02em' }}>Your background</h2>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '36px' }}>Help us understand where you are right now.</p>

                  <div style={fieldStyle}>
                    <label style={labelStyle}>School / College Name *</label>
                    <input type="text" required value={form.school} onChange={(e) => update('school', e.target.value)} placeholder="Name of your institution" style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLInputElement).style.background = 'rgba(124,58,237,0.04)' }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)' }} />
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Stream / Field of Study</label>
                    <input type="text" value={form.stream} onChange={(e) => update('stream', e.target.value)} placeholder="e.g., Science, Commerce, Arts, Engineering" style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLInputElement).style.background = 'rgba(124,58,237,0.04)' }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)' }} />
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Weekly Time Commitment *</label>
                    <select required value={form.commitment} onChange={(e) => update('commitment', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = 'rgba(124,58,237,0.5)' }}
                      onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = 'rgba(255,255,255,0.1)' }}>
                      <option value="" style={{ background: '#0d0d1a' }}>How many hours can you commit per week?</option>
                      <option value="4-6" style={{ background: '#0d0d1a' }}>4–6 hours/week</option>
                      <option value="8-10" style={{ background: '#0d0d1a' }}>8–10 hours/week</option>
                      <option value="10+" style={{ background: '#0d0d1a' }}>10+ hours/week (Full commitment)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#e2e8f0', marginBottom: '8px', letterSpacing: '-0.02em' }}>Your motivation</h2>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '36px' }}>This is the most important part. Be honest and thoughtful.</p>

                  <div style={fieldStyle}>
                    <label style={labelStyle}>Why do you want to join OffSyllabus? *</label>
                    <textarea required value={form.why} onChange={(e) => update('why', e.target.value)} placeholder="What's missing from your current education? What do you hope to gain? Be specific." rows={4} style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit', lineHeight: '1.6' }}
                      onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLTextAreaElement).style.background = 'rgba(124,58,237,0.04)' }}
                      onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLTextAreaElement).style.background = 'rgba(255,255,255,0.04)' }} />
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>What are your goals for the next 2 years? *</label>
                    <textarea required value={form.goals} onChange={(e) => update('goals', e.target.value)} placeholder="Where do you want to be? What do you want to build, achieve, or become?" rows={4} style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit', lineHeight: '1.6' }}
                      onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLTextAreaElement).style.background = 'rgba(124,58,237,0.04)' }}
                      onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLTextAreaElement).style.background = 'rgba(255,255,255,0.04)' }} />
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Describe a challenge you've overcome *</label>
                    <textarea required value={form.challenge} onChange={(e) => update('challenge', e.target.value)} placeholder="Tell us about a difficulty you faced and how you dealt with it. This tells us a lot about your character." rows={4} style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit', lineHeight: '1.6' }}
                      onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.target as HTMLTextAreaElement).style.background = 'rgba(124,58,237,0.04)' }}
                      onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLTextAreaElement).style.background = 'rgba(255,255,255,0.04)' }} />
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between', marginTop: '8px' }}>
                {step > 1 ? (
                  <button type="button" onClick={() => setStep(step - 1)} style={{ padding: '13px 24px', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#94a3b8', fontWeight: '500', fontSize: '0.9375rem', cursor: 'pointer', transition: 'border-color 0.2s ease' }}>
                    ← Back
                  </button>
                ) : <div />}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (step === 1 && (!form.name || !form.age || !form.email || !form.phone || !form.city || !form.program)) {
                        alert('Please fill in all required fields.')
                        return
                      }
                      if (step === 2 && (!form.school || !form.commitment)) {
                        alert('Please fill in all required fields.')
                        return
                      }
                      setStep(step + 1)
                    }}
                    style={{ padding: '13px 28px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', border: 'none', borderRadius: '10px', color: 'white', fontWeight: '600', fontSize: '0.9375rem', cursor: 'pointer', transition: 'opacity 0.2s ease' }}
                  >
                    Continue →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    style={{ padding: '13px 32px', background: loading ? 'rgba(124,58,237,0.5)' : 'linear-gradient(135deg, #7c3aed, #4f46e5)', border: 'none', borderRadius: '10px', color: 'white', fontWeight: '700', fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer', transition: 'opacity 0.2s ease, transform 0.2s ease', opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? 'Submitting…' : 'Submit Application 🚀'}
                  </button>
                )}
              </div>
            </div>
          </form>

          {/* Trust signals */}
          <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
            {[
              { icon: '🔒', text: 'Your info is confidential' },
              { icon: '⏱', text: 'Takes about 10 minutes' },
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
