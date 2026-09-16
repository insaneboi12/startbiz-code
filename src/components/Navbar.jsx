import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { brand, navLinks } from '../data/content';
import ServiceSearch from './ServiceSearch';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const mainLinks = navLinks.filter((link) => link.to !== '/');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 overflow-visible border-b border-[#dbdbdb]/80 bg-white transition ${
        scrolled || open ? 'shadow-nav' : ''
      }`}
    >
      <div className="flex h-[72px] w-full items-center gap-3 px-4 sm:h-20 sm:px-6 lg:gap-6 lg:px-8">
        <Link to="/" className="relative z-20 mr-auto flex shrink-0 items-center xl:mr-4">
          <img
            src={brand.logo}
            alt={`${brand.name} — ${brand.tagline}`}
            className="h-[52px] w-auto object-contain object-left sm:h-16"
          />
        </Link>

        <nav className="ml-auto hidden min-w-0 items-center justify-end gap-0.5 xl:flex 2xl:gap-1">
          {mainLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="shrink-0 whitespace-nowrap rounded px-1.5 py-2 text-[13px] font-semibold text-brand-text-soft transition hover:bg-brand-muted hover:text-brand-primary 2xl:px-2.5 2xl:text-sm"
            >
              {link.label}
            </NavLink>
          ))}

          <button
            type="button"
            aria-label="Open search"
            className="ml-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[#dbdbdb] text-brand-primary transition hover:bg-brand-muted"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-3.5-3.5" />
            </svg>
          </button>

          <a
            href="#contact"
            className="btn-primary ml-1 shrink-0 whitespace-nowrap px-3 py-2 text-[13px] 2xl:ml-2 2xl:px-5 2xl:py-2.5 2xl:text-sm"
          >
            Get My Business Solution
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <button
            type="button"
            aria-label="Open search"
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-[#dbdbdb] text-brand-primary"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded border border-[#dbdbdb] text-brand-text"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-brand-text transition ${
                  open ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-brand-text transition ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-brand-text transition ${
                  open ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-[#dbdbdb] bg-white px-4 py-3 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <ServiceSearch variant="nav" autoFocus className="max-w-xl" />
          </div>
        </div>
      )}

      <div
        className={`border-t border-[#dbdbdb] bg-white xl:hidden ${
          open ? 'block' : 'hidden'
        }`}
      >
        <nav className="section-wrap flex max-h-[calc(100svh-4rem)] flex-col gap-1 overflow-y-auto py-3 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded px-3 py-3 text-base font-semibold text-brand-text hover:bg-brand-muted hover:text-brand-primary"
            >
              {link.label}
            </Link>
          ))}
          <a href="#contact" className="btn-primary mt-2">
            Get My Business Solution
          </a>
          <a
            href={brand.phoneHref}
            className="mt-1 text-center text-sm font-semibold text-brand-primary"
          >
            Call {brand.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
