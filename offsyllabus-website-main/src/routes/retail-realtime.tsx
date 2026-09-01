import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
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
  { value: '4', label: 'FOCUSED ZONES SHOWN' },
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
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function RetailRealtimePage() {
  return (
    <div className="retail-page">
      <nav className="retail-nav">
        <a
          className="retail-logo"
          href="#top"
          onClick={(e) => {
            e.preventDefault()
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
        <div
          className="retail-hero-media"
          aria-hidden="true"
        />

        <div className="retail-hero-content">
          <div className="retail-eyebrow">
            OffSyllabus × Phoenix Mall · Pune
          </div>

          <h1>
            Don't learn retail.
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
                  Retail Realtime puts the learning inside a live
                  retail environment. The focus is observation,
                  interaction, building and pitching.
                </p>
              </div>
            </div>

            <div className="retail-feature">
              <div className="retail-feature-copy">
                <h3>Learn by being there.</h3>

                <p>
                  Instead of treating retail as a case study,
                  Retail Realtime places students inside the
                  environment they are trying to understand.
                  Observe how brands, customers, spaces and
                  experiences interact, then turn those
                  observations into practical work.
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
                  Students are organised into focused interest
                  zones, with five seats proposed for each zone.
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
                  A simple progression: enter the environment,
                  learn from people in it, build with your zone
                  and present what you create.
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
                  The Phoenix Mall partnership is intended to go
                  beyond a venue arrangement, giving students
                  direct exposure to the retail ecosystem and
                  opportunities to interact with people working
                  in it.
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
                  Students learn from the environment itself:
                  the spaces, brands, customers and retail
                  decisions around them.
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
                  The programme is designed to move beyond
                  passive exposure and into practical
                  problem-solving and pitching.
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
                  25 seats · ₹7,500 per student · September
                  2026 programme window. Final dates, timings
                  and programme details are subject to
                  confirmation.
                </p>
              </div>

              <div className="retail-price">
                <b>₹7,500</b>

                <small>PER STUDENT</small>

                <button
                  className="retail-btn retail-btn-primary"
                  onClick={() =>
                    window.alert(
                      'Ticket checkout link can be connected here once the ticketing platform is selected.',
                    )
                  }
                >
                  VIEW TICKET DETAILS
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
        <span>
          © OffSyllabus · Retail Realtime
        </span>

        <span>
          OffSyllabus × Phoenix Mall · Pune
        </span>
      </footer>
    </div>
  )
}