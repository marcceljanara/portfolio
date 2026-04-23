import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#about',      label: 'About'      },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#contact',    label: 'Contact'    },
];

const Header = () => {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('');

  /* ── scroll detection ───────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── active section detection ───────────────────────────── */
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveLink(`#${e.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* ── close menu on outside click ───────────────────────── */
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => {
      if (!e.target.closest('#mobile-menu') && !e.target.closest('#hamburger-btn')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [menuOpen]);

  /* ── lock body scroll when menu is open ────────────────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      {/* ────────── HEADER BAR ────────── */}
      <header
        className={`header-bar${scrolled ? ' header-bar--scrolled' : ''}`}
        role="banner"
      >
        <nav
          className="header-nav"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="#home" className="header-logo-link" aria-label="Back to top">
            <div className="header-logo-wrapper">
              <img
                src="/logo.png"
                alt="Logo"
                className="header-logo-img"
                draggable="false"
              />
            </div>
          </a>

          {/* Desktop nav links */}
          <ul className="header-desktop-links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`header-nav-link${activeLink === href ? ' header-nav-link--active' : ''}`}
                >
                  {label}
                  <span className="header-nav-link-indicator" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger (mobile) */}
          <button
            id="hamburger-btn"
            className={`header-hamburger${menuOpen ? ' header-hamburger--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="hamburger-bar hamburger-bar--top"    />
            <span className="hamburger-bar hamburger-bar--mid"    />
            <span className="hamburger-bar hamburger-bar--bottom" />
          </button>
        </nav>

        {/* Scroll progress bar */}
        <div className="header-progress-track" aria-hidden="true">
          <div className="header-progress-fill" id="scroll-progress" />
        </div>
      </header>

      {/* ────────── MOBILE MENU OVERLAY ────────── */}
      <div
        className={`mobile-overlay${menuOpen ? ' mobile-overlay--visible' : ''}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      {/* ────────── MOBILE MENU DRAWER ────────── */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <ul className="mobile-menu-list">
          {NAV_LINKS.map(({ href, label }, idx) => (
            <li
              key={href}
              className="mobile-menu-item"
              style={{ '--delay': `${idx * 60}ms` }}
            >
              <a
                href={href}
                className={`mobile-menu-link${activeLink === href ? ' mobile-menu-link--active' : ''}`}
                onClick={handleNavClick}
              >
                <span className="mobile-menu-dot" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ────────── SCROLL PROGRESS SCRIPT ────────── */}
      <ScrollProgress />
    </>
  );
};

/* tiny inline component — avoids a separate file */
const ScrollProgress = () => {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = scrollTop / (scrollHeight - clientHeight);
      bar.style.transform = `scaleX(${pct})`;
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return null;
};

export default Header;
