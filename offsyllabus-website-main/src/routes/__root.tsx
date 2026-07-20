import { HeadContent, Outlet, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Linkedin, Instagram, Facebook } from 'lucide-react'
import '../styles.css'
import logoImg from '../assets/logo.png'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'OffSyllabus — Education Beyond Marks' },
      {
        name: 'description',
        content:
          'OffSyllabus is a growth ecosystem for students aged 15–21. Discover your strengths, build future-ready skills, and gain real-world experience through mentorship, projects, and community.',
      },
      { name: 'theme-color', content: '#07070f' },
      { name: 'google-site-verification', content: '_8ZMDgpyeoUtBe9i4KP1yjHiuyEkmXJ_AucXbbPykwk' },
      { property: 'og:title', content: 'OffSyllabus — Education Beyond Marks' },
      {
        property: 'og:description',
        content: 'A structured growth ecosystem helping students discover who they are and build skills that matter.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Bricolage+Grotesque:opsz,wght@12..60,400;12..60,500;12..60,600;12..60,700;12..60,800&display=swap',
      },
    ],
    scripts: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-C4DNZ01ZF1',
        async: true,
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C4DNZ01ZF1');
        `,
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Programs', to: '/programs' },
  { label: 'Quests', to: '/events-workshops' },
  { label: 'Community', to: '/community' },
  { label: 'Mentors', to: '/mentors' },
  { label: 'About', to: '/about' },
]

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

function OffSyllabusLogo({ height = 38 }: { height?: number }) {
  return (
    <img
      src={logoImg}
      alt="OFF Syllabus"
      style={{ height, width: 'auto', display: 'block' }}
    />
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Navbar CSS — handles show/hide instantly without waiting for JS */}
      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none; }
        .nav-mobile-menu { display: none; }
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>

    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled || mobileOpen ? 'rgba(7,7,15,0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <OffSyllabusLogo height={38} />
        </Link>

        {/* Desktop Nav + CTA — hidden on mobile via CSS */}
        <nav className="nav-desktop" style={{ alignItems: 'center', gap: '32px' }}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Desktop CTA */}
          <Link to="/apply" className="btn-primary nav-desktop" style={{ padding: '10px 20px', fontSize: '0.875rem' }}>
            <span>Apply Now</span>
          </Link>

          {/* Hamburger — shown on mobile via CSS */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-mobile-btn"
            style={{
              flexDirection: 'column',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
            aria-label="Toggle menu"
          >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '22px',
                    height: '2px',
                    background: '#f1f5f9',
                    borderRadius: '2px',
                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                    transform:
                      mobileOpen
                        ? i === 0
                          ? 'rotate(45deg) translate(5px, 5px)'
                          : i === 1
                            ? 'scaleX(0)'
                            : 'rotate(-45deg) translate(5px, -5px)'
                        : 'none',
                    opacity: mobileOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
        </div>
      </div>

      {/* Mobile dropdown menu — shown via mobileOpen state */}
      {mobileOpen && (
        <div
          style={{
            background: 'rgba(7,7,15,0.98)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '20px 24px 28px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/apply"
            onClick={() => setMobileOpen(false)}
            className="btn-primary"
            style={{ marginTop: '20px', width: '100%', justifyContent: 'center', display: 'flex' }}
          >
            <span>Apply Now</span>
          </Link>
        </div>
      )}
    </header>
    </>
  )
}

function Footer() {
  const isMobile = useIsMobile()

  return (
    <footer
      style={{
        background: 'rgba(0,0,0,0.4)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: isMobile ? '48px 20px 28px' : '60px 24px 32px',
        marginTop: '0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: isMobile ? '36px' : '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <OffSyllabusLogo height={42} />
            </div>
            <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.7', maxWidth: '260px' }}>
              A structured growth ecosystem for students aged 15–21. Education beyond marks.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: 'Platform',
              links: [
                { label: 'Home', to: '/' },
                { label: 'Programs', to: '/programs' },
                { label: 'Community', to: '/community' },
                { label: 'Mentors', to: '/mentors' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About', to: '/about' },
                { label: 'Apply', to: '/apply' },
                { label: 'Contact', to: '/about' },
                { label: 'Privacy Policy', to: '/' },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  color: '#f1f5f9',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  marginBottom: '16px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      style={{
                        color: '#64748b',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#ca0c12')}
                      onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#64748b')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4
              style={{
                color: '#f1f5f9',
                fontWeight: '700',
                fontSize: '0.8125rem',
                marginBottom: '10px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Phone Number
            </h4>
            <a
              href="tel:+918530779006"
              style={{
                display: 'block',
                color: '#e2e8f0',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                marginBottom: '24px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#ca0c12')}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#e2e8f0')}
            >
              (+91) 85307 79006
            </a>

            <h4
              style={{
                color: '#f1f5f9',
                fontWeight: '700',
                fontSize: '0.8125rem',
                marginBottom: '10px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Email
            </h4>
            <a
              href="mailto:offsyllabus.info@gmail.com"
              style={{
                display: 'block',
                color: '#e2e8f0',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                wordBreak: 'break-word',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#ca0c12')}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#e2e8f0')}
            >
              offsyllabus.info@gmail.com
            </a>
          </div>

          {/* CTA */}
          <div>
            <h4
              style={{
                color: '#f1f5f9',
                fontWeight: '600',
                fontSize: '0.875rem',
                marginBottom: '16px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Get Started
            </h4>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '16px' }}>
              Ready to go beyond the classroom?
            </p>
            <Link to="/apply" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.875rem' }}>
              <span>Apply Now →</span>
            </Link>
          </div>

          {/* Follow Us */}
          <div>
            <h4
              style={{
                color: '#f1f5f9',
                fontWeight: '600',
                fontSize: '0.875rem',
                marginBottom: '16px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Follow Us
            </h4>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a
                href="https://www.linkedin.com/company/off-syllabus/insights/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: '#64748b', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#ca0c12')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#64748b')}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/offsyllabus.club/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: '#64748b', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#ca0c12')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#64748b')}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582265525588"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: '#64748b', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#ca0c12')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#64748b')}
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="gradient-divider" style={{ marginBottom: '24px' }} />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <p style={{ color: '#475569', fontSize: '0.8125rem' }}>
            © 2025 OFF Syllabus. All rights reserved.
          </p>
          <p style={{ color: '#475569', fontSize: '0.8125rem' }}>
            Built for curious minds.{' '}
            <span style={{ color: '#ca0c12', fontWeight: '600' }}>
              Learn Beyond Limits.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth', overflowX: 'hidden' }}>
      <head>
        <HeadContent />
      </head>
      <body style={{ background: '#07070f', overflowX: 'hidden', maxWidth: '100vw' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}