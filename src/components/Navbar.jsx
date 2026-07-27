import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { brand, megaMenus, navLinks, slugify, whatsappHref } from '../data/content';
import ServiceSearch from './ServiceSearch';

function MegaDropdown({ menu, open, onOpen, onClose }) {
  return (
    <div
      className="relative shrink-0"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className={`whitespace-nowrap rounded px-1.5 py-2 text-[13px] font-semibold transition hover:bg-brand-muted hover:text-brand-primary 2xl:px-2.5 2xl:text-sm ${
          open ? 'bg-brand-muted text-brand-primary' : 'text-brand-text-soft'
        }`}
        onClick={() => (open ? onClose() : onOpen())}
        aria-expanded={open}
      >
        {menu.label} ▾
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 w-[min(92vw,40rem)] pt-2 xl:left-1/2 xl:-translate-x-1/2">
          <div className="rounded-xl border border-[#dbdbdb] bg-white p-4 shadow-soft">
            <div className="mb-3 flex items-center justify-between gap-3 border-b border-[#dbdbdb] pb-3">
              <div>
                <p className="whitespace-nowrap text-sm font-bold text-brand-primary">
                  {menu.label}
                </p>
                <p className="mt-0.5 text-xs text-brand-text-soft">{menu.description}</p>
              </div>
              <Link
                to={menu.path}
                className="shrink-0 whitespace-nowrap text-xs font-semibold text-brand-accent hover:underline"
              >
                View all →
              </Link>
            </div>
            <div
              className={`grid gap-4 ${
                menu.groups.length > 2 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
              }`}
            >
              {menu.groups.map((group) => (
                <div key={group.label}>
                  <p className="mb-1.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-wider text-brand-accent">
                    {group.label}
                  </p>
                  <ul className="space-y-0.5">
                    {group.items.map((title) => (
                      <li key={title}>
                        <Link
                          to={`/services/${slugify(title)}`}
                          className="block rounded-md px-2 py-1.5 text-xs font-medium leading-snug text-brand-text transition hover:bg-brand-muted hover:text-brand-primary"
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(null);
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
    setActiveMenu(null);
    setMobileMenu(null);
    setSearchOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#dbdbdb]/80 bg-white transition ${
        scrolled || open ? 'shadow-nav' : ''
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-3 sm:px-5 lg:h-[72px] lg:px-6">
        <Link to="/" className="relative z-10 flex min-w-0 shrink-0 items-center">
          <img
            src={brand.logo}
            alt={`${brand.name} — ${brand.tagline}`}
            className="h-9 w-auto max-w-[140px] object-contain sm:h-10 sm:max-w-[170px]"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 xl:flex 2xl:gap-1">
          {megaMenus.map((menu) => (
            <MegaDropdown
              key={menu.id}
              menu={menu}
              open={activeMenu === menu.id}
              onOpen={() => setActiveMenu(menu.id)}
              onClose={() => setActiveMenu(null)}
            />
          ))}

          {navLinks.map((link) => (
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
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="btn-primary ml-1 shrink-0 whitespace-nowrap px-3 py-2 text-[13px] 2xl:ml-2 2xl:px-5 2xl:py-2.5 2xl:text-sm"
          >
            Get Started
          </a>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
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
          {megaMenus.map((menu) => (
            <div key={menu.id} className="border-b border-[#dbdbdb]/70 pb-2">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded px-3 py-3 text-left text-base font-semibold text-brand-text"
                onClick={() =>
                  setMobileMenu((id) => (id === menu.id ? null : menu.id))
                }
              >
                {menu.label}
                <span className="text-brand-accent">
                  {mobileMenu === menu.id ? '−' : '+'}
                </span>
              </button>
              {mobileMenu === menu.id && (
                <div className="space-y-3 px-3 pb-3">
                  <Link
                    to={menu.path}
                    className="block text-sm font-semibold text-brand-primary"
                  >
                    View all {menu.label} →
                  </Link>
                  {menu.groups.map((group) => (
                    <div key={group.label}>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-brand-accent">
                        {group.label}
                      </p>
                      <ul className="mt-1">
                        {group.items.map((title) => (
                          <li key={title}>
                            <Link
                              to={`/services/${slugify(title)}`}
                              className="block rounded px-2 py-2 text-sm text-brand-text-soft hover:bg-brand-muted hover:text-brand-primary"
                            >
                              {title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded px-3 py-3 text-base font-semibold text-brand-text hover:bg-brand-muted hover:text-brand-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-2"
          >
            Get Started
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
