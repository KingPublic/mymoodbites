import { useState, useEffect, useCallback } from 'react';

const navLinks = [
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Mitra', href: '#mitra' },
  { label: 'Dukung Kami', href: '#dukung' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
      style={{
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255,245,228,0.85)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-coral">
          MoodBites 🍜
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-sm font-medium text-text-dark hover:text-coral transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://moodbites.qzz.io/moodbites.apk"
            className="text-sm font-semibold text-white bg-coral hover:bg-coral/90 px-4 py-2 rounded-full transition-colors"
          >
            Download APK
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-text-dark transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text-dark transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text-dark transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{ backgroundColor: 'rgba(255,245,228,0.95)' }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-sm font-medium text-text-dark hover:text-coral py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://moodbites.qzz.io/moodbites.apk"
            className="text-sm font-semibold text-white bg-coral hover:bg-coral/90 px-4 py-2.5 rounded-full text-center transition-colors mt-1"
          >
            Download APP
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
