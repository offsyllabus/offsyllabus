import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, X } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
import logoImg from '../assets/logo.png'
import '../retail-realtime.css'

export const Route = createFileRoute('/retail-realtime')({
  head: () => ({
    meta: [
      { title: 'Retail Realtime — OffSyllabus' },
      {
        name: 'description',
        content:
          'Retail Realtime by OffSyllabus — a hands-on retail experience at Phoenix Mall, Pune.',
      },
    ],
  }),
  component: RetailRealtimePage,
})

type SeatSummary = {
  totalSeatsTaken: number
  totalSeatsAvailable: number
  soldOut: boolean
}

const TOTAL_SEATS = 25

type Zone = 'marketing' | 'business' | 'design' | 'tech'

const ZONE_OPTIONS: { value: Zone; label: string }[] = [
  { value: 'marketing', label: 'Marketing' },
  { value: 'business', label: 'Business' },
  { value: 'design', label: 'Design' },
  { value: 'tech', label: 'Tech & Engineering' },
]

declare global {
  interface Window {
    Razorpay: any
  }
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'

    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)

    document.body.appendChild(script)
  })
}

function useSeatSummary() {
  const [data, setData] = useState<SeatSummary | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const fetchSeats = async () => {
      try {
        const response = await fetch('/api/retail-realtime/seats')

        if (!response.ok) {
          throw new Error('Failed to fetch seat availability')
        }

        const json = (await response.json()) as SeatSummary

        if (!cancelled) {
          setData(json)
        }
      } catch {
        if (!cancelled) {
          setData(null)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchSeats()

    return () => {
      cancelled = true
    }
  }, [])

  return { data, loading }
}

function ApplyModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [zone, setZone] = useState<Zone>('marketing')

  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'error' | 'pending_payment'
  >('idle')

  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setStatus('submitting')
    setErrorMsg('')

    try {
      const bookRes = await fetch('/api/retail-realtime/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          zone,
        }),
      })

      const bookData = await bookRes.json()

      if (!bookRes.ok) {
        if (bookData.error === 'SOLD_OUT') {
          setErrorMsg('Sorry — all 25 seats are taken.')
        } else if (bookData.error === 'ZONE_FULL') {
          setErrorMsg('That zone is full. Please pick another.')
        } else {
          setErrorMsg(
            bookData.message ||
              'Something went wrong while reserving your spot.',
          )
        }

        setStatus('error')
        return
      }

      const bookingId = bookData.bookingId

      if (!bookingId) {
        setErrorMsg('Booking could not be created. Please try again.')
        setStatus('error')
        return
      }

      const orderRes = await fetch('/api/retail-realtime/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookingId,
        }),
      })

      const orderData = await orderRes.json()

      if (orderRes.status === 501) {
        setStatus('pending_payment')
        return
      }

      if (!orderRes.ok) {
        if (orderData.error === 'SOLD_OUT') {
          setErrorMsg('Sorry — all seats have been taken.')
        } else if (orderData.error === 'ZONE_FULL') {
          setErrorMsg('That zone is now full. Please choose another zone.')
        } else if (orderData.error === 'ALREADY_PAID') {
          setErrorMsg('This booking has already been paid.')
        } else {
          setErrorMsg(
            orderData.message ||
              'Could not start payment. Please try again shortly.',
          )
        }

        setStatus('error')
        return
      }

      const scriptLoaded = await loadRazorpayScript()

      if (!scriptLoaded) {
        setErrorMsg(
          'Could not load the payment gateway. Please check your connection and try again.',
        )
        setStatus('error')
        return
      }

      const razorpay = new window.Razorpay({
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,
        name: 'OffSyllabus',
        description: 'Retail Realtime — 25-seat cohort',
        prefill: {
          name,
          email,
          contact: phone,
        },
        theme: {
          color: '#7757ff',
        },
        handler: () => {
          window.location.href = '/retail-realtime?booked=1'
        },
        modal: {
          ondismiss: () => {
            setStatus('idle')
          },
        },
      })

      razorpay.open()
      setStatus('idle')
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'pending_payment') {
    return (
      <div className="retail-modal-overlay" onClick={onClose}>
        <div
          className="retail-modal"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="retail-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <h3>You&apos;re on the list.</h3>

          <p>
            Your spot has been reserved. Payment isn&apos;t open yet. We&apos;ll
            email you at <b>{email}</b> as soon as payment is available.
          </p>

          <button
            type="button"
            className="retail-btn retail-btn-primary"
            onClick={onClose}
          >
            CLOSE
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="retail-modal-overlay" onClick={onClose}>
      <div
        className="retail-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="retail-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <h3>Reserve your spot.</h3>

        <p className="retail-modal-sub">
          ₹7,500 · 25-seat cohort
        </p>

        <form onSubmit={handleSubmit} className="retail-form">
          <label>
            Full name

            <input
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label>
            Email

            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label>
            Phone

            <input
              type="tel"
              required
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </label>

          <label>
            Preferred zone

            <select
              value={zone}
              onChange={(event) =>
                setZone(event.target.value as Zone)
              }
            >
              {ZONE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          {status === 'error' && (
            <p className="retail-form-error">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="retail-btn retail-btn-primary"
            disabled={status === 'submitting'}
          >
            {status === 'submitting'
              ? 'PROCESSING…'
              : 'CONTINUE TO PAYMENT'}
          </button>
        </form>
      </div>
    </div>
  )
}

const steps = [
  {
    num: '01 · OBSERVE',
    title: 'See retail live.',
    text: 'Understand how brands, customers, spaces and experiences work together.',
  },
  {
    num: '02 · BUILD',
    title: 'Work on a challenge.',
    text: 'Work with your zone on a practical problem and develop a solution.',
  },
  {
    num: '03 · PITCH',
    title: 'Show your thinking.',
    text: 'Present the work to mentors and an expert panel.',
  },
]

const stats = [
  { value: '25', label: 'CURATED STUDENTS' },
  { value: '4', label: 'FOCUSED ZONES' },
  { value: '₹7.5K', label: 'PROGRAM FEE' },
  { value: '1', label: 'LIVE RETAIL ENVIRONMENT' },
]

const zones = [
  {
    name: 'Marketing',
    text: 'Brand, campaigns and customer engagement.',
  },
  {
    name: 'Business',
    text: 'Strategy, operations and retail thinking.',
  },
  {
    name: 'Design',
    text: 'Design thinking and experience.',
  },
  {
    name: 'Tech & Engineering',
    text: 'Technology and retail applications.',
  },
]

const timeline = [
  {
    label: '01 · EXPLORE',
    title: 'Step inside retail.',
    text: 'Experience Phoenix Mall as a live retail environment.',
  },
  {
    label: '02 · LEARN',
    title: 'Meet practitioners.',
    text: 'Learn through mentor interactions and industry exposure.',
  },
  {
    label: '03 · BUILD',
    title: 'Create with your zone.',
    text: 'Develop a practical solution with your team.',
  },
  {
    label: '04 · PITCH',
    title: 'Take the stage.',
    text: 'Present your work to mentors and experts.',
  },
]

const faqs = [
  {
    q: 'Who is this for?',
    a: 'The programme is positioned for students interested in retail, business, marketing, design, technology and related areas.',
  },
  {
    q: 'How many students are in the cohort?',
    a: 'Retail Realtime is designed around a curated cohort of 25 students.',
  },
  {
    q: 'What does the programme involve?',
    a: 'Observation in a live retail environment, practitioner interactions, a practical challenge, team work and a final pitch.',
  },
  {
    q: 'Are the dates final?',
    a: 'No. The current programme window is presented as proposed, with final dates, timings and programme details subject to confirmation.',
  },
]

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function RetailRealtimePage() {
  const { data: seats, loading } = useSeatSummary()

  const [showApply, setShowApply] = useState(false)

  const seatsLeft = seats
    ? Math.max(0, Math.min(TOTAL_SEATS, seats.totalSeatsAvailable))
    : TOTAL_SEATS

  const soldOut = seats?.soldOut ?? false

  const handleTicketClick = () => {
    if (soldOut) return

    setShowApply(true)
  }

  return (
    <div className="retail-page">
      <nav className="retail-nav">
        <a
          className="retail-logo"
          href="#top"
          onClick={(event) => {
            event.preventDefault()
            scrollToId('top')
          }}
        >
          <img src={logoImg} alt="OffSyllabus" />
        </a>

        <div className="retail-navlinks">
          <button onClick={() => scrollToId('experience')}>
            Experience
          </button>

          <button onClick={() => scrollToId('zones')}>
            Zones
          </button>

          <button onClick={() => scrollToId('journey')}>
            Journey
          </button>

          <button
            className="retail-navcta"
            onClick={() => scrollToId('ticket')}
          >
            View Tickets
          </button>
        </div>
      </nav>

      <header className="retail-hero" id="top">
        <div className="retail-hero-media" aria-hidden="true" />

        <div className="retail-hero-content">
          <div className="retail-eyebrow">
            OffSyllabus × Phoenix Mall · Pune
          </div>

          <h1>
            Don&apos;t learn retail.
            <br />
            <em>Experience it.</em>
          </h1>

          <p className="retail-hero-copy">
            A hands-on retail experience where students step into a live
            retail environment, learn from industry practitioners, work on a
            real-world challenge and pitch what they build.
          </p>

          <div className="retail-hero-meta">
            <span className="retail-pill">25 STUDENTS</span>
            <span className="retail-pill">CURATED COHORT</span>
            <span className="retail-pill">₹7,500</span>
            <span className="retail-pill">
              SEPTEMBER 2026 · DATES TO BE CONFIRMED
            </span>
          </div>

          <div className="retail-hero-actions">
            <button
              className="retail-btn retail-btn-primary"
              onClick={() => scrollToId('ticket')}
            >
              VIEW TICKET DETAILS
              <ArrowRight size={15} />
            </button>

            <button
              className="retail-btn retail-btn-secondary"
              onClick={() => scrollToId('experience')}
            >
              EXPLORE THE EXPERIENCE
            </button>
          </div>
        </div>

        <div className="retail-scrollhint">
          Scroll to explore
        </div>
      </header>

      <main>
        <section id="experience">
          <div className="retail-container">
            <div className="retail-section-head">
              <div>
                <div className="retail-kicker">
                  The classroom
                </div>

                <h2>
                  Your classroom
                  <br />
                  is the mall.
                </h2>
              </div>

              <div>
                <p className="retail-intro">
                  Retail Realtime puts the learning inside a live retail
                  environment. The focus is observation, interaction,
                  building and pitching.
                </p>
              </div>
            </div>

            <div className="retail-feature">
              <div className="retail-feature-copy">
                <h3>Learn by being there.</h3>

                <p>
                  Instead of treating retail as a case study, Retail Realtime
                  places students inside the environment they are trying to
                  understand. Observe how brands, customers, spaces and
                  experiences interact, then turn those observations into
                  practical work.
                </p>
              </div>

              <div
                className="retail-feature-img"
                role="img"
                aria-label="Retail environment at Phoenix Mall"
              />
            </div>

            <div className="retail-steps">
              {steps.map((step) => (
                <article
                  className="retail-card"
                  key={step.num}
                >
                  <div className="retail-num">
                    {step.num}
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="zones">
          <div className="retail-container">
            <div className="retail-section-head">
              <div>
                <div className="retail-kicker">
                  The cohort
                </div>

                <h2>
                  25 seats.
                  <br />
                  One cohort.
                </h2>
              </div>

              <div>
                <p className="retail-intro">
                  Students are organised into focused interest zones, with
                  five seats proposed for each zone.
                </p>
              </div>
            </div>

            <div className="retail-stats">
              {stats.map((stat) => (
                <div
                  className="retail-stat"
                  key={stat.label}
                >
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="retail-zones">
              {zones.map((zone) => (
                <article
                  className="retail-zone"
                  key={zone.name}
                >
                  <b>{zone.name}</b>

                  <p>{zone.text}</p>

                  <strong>5 SEATS PROPOSED</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="journey">
          <div className="retail-container">
            <div className="retail-section-head">
              <div>
                <div className="retail-kicker">
                  The journey
                </div>

                <h2>
                  From observation
                  <br />
                  to pitch.
                </h2>
              </div>

              <div>
                <p className="retail-intro">
                  A simple progression: enter the environment, learn from
                  people in it, build with your zone and present what you
                  create.
                </p>
              </div>
            </div>

            <div className="retail-timeline">
              {timeline.map((step) => (
                <article
                  className="retail-time"
                  key={step.label}
                >
                  <span>{step.label}</span>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="retail-container">
            <div className="retail-section-head">
              <div>
                <div className="retail-kicker">
                  The partnership
                </div>

                <h2>
                  Built inside
                  <br />
                  Phoenix.
                </h2>
              </div>

              <div>
                <p className="retail-intro">
                  The Phoenix Mall partnership is intended to go beyond a
                  venue arrangement, giving students direct exposure to the
                  retail ecosystem and opportunities to interact with people
                  working in it.
                </p>
              </div>
            </div>

            <div className="retail-partnership">
              <div className="retail-partnership-card">
                <div className="retail-kicker">
                  REAL ENVIRONMENT
                </div>

                <h3>
                  The mall becomes part of the curriculum.
                </h3>

                <p>
                  Students learn from the environment itself: the spaces,
                  brands, customers and retail decisions around them.
                </p>
              </div>

              <div className="retail-partnership-card">
                <div className="retail-kicker">
                  REAL-WORLD THINKING
                </div>

                <h3>
                  Observation turns into output.
                </h3>

                <p>
                  The programme is designed to move beyond passive exposure
                  and into practical problem-solving and pitching.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="ticket"
          className="retail-ticket-wrap"
        >
          <div className="retail-container">
            <div className="retail-ticket">
              <div>
                <div className="retail-kicker">
                  Limited cohort
                </div>

                <h2>Get inside.</h2>

                <p>
                  25 seats · ₹7,500 per student · September 2026 programme
                  window. Final dates, timings and programme details are
                  subject to confirmation.
                </p>
              </div>

              <div className="retail-price">
                <b>₹7,500</b>

                <small>PER STUDENT</small>

                <div
                  className="retail-seat-counter"
                  aria-live="polite"
                >
                  {loading ? (
                    'Checking availability…'
                  ) : soldOut ? (
                    <span className="retail-soldout">
                      SOLD OUT
                    </span>
                  ) : (
                    <>
                      <strong>{seatsLeft}</strong> of{' '}
                      {TOTAL_SEATS} seats left
                    </>
                  )}
                </div>

                <button
                  type="button"
                  className="retail-btn retail-btn-primary"
                  disabled={soldOut}
                  onClick={handleTicketClick}
                >
                  {soldOut
                    ? 'SOLD OUT'
                    : 'VIEW TICKET DETAILS'}
                </button>
              </div>
            </div>

            <div className="retail-faq-block">
              <div className="retail-kicker">
                Questions
              </div>

              <div className="retail-faq">
                {faqs.map((faq) => (
                  <details key={faq.q}>
                    <summary>{faq.q}</summary>

                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="retail-container retail-footer">
        <span>© OffSyllabus · Retail Realtime</span>
        <span>
          OffSyllabus × Phoenix Mall · Pune
        </span>
      </footer>

      {showApply && (
        <ApplyModal
          onClose={() => setShowApply(false)}
        />
      )}
    </div>
  )
}