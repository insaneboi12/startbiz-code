import { Link } from 'react-router-dom';
import { brand, megaMenus, navLinks, services } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="section-wrap py-10 sm:py-12 lg:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src={brand.logo}
                alt={`${brand.name} — ${brand.tagline}`}
                className="h-12 w-auto max-w-[220px] object-contain sm:h-14"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {brand.shortName} — {brand.tagline}. Tell us your business
              requirement. We&apos;ll help you find the right registration,
              licence or business solution across Maharashtra.
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/finder" className="text-sm text-white/75 hover:text-white">
                  Find My Business Solution
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-sm text-white/75 hover:text-white">
                  Compare structures
                </Link>
              </li>
              <li>
                <Link to="/knowledge" className="text-sm text-white/75 hover:text-white">
                  Knowledge centre
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-sm text-white/75 hover:text-white">
                  Industry solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
              Explore
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {megaMenus
                .filter((menu) => !menu.hideFromNav)
                .map((menu) => (
                  <li key={menu.id}>
                    <Link
                      to={menu.path}
                      className="text-sm text-white/75 transition hover:text-white"
                    >
                      {menu.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
              Popular services
            </h4>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a href={brand.phoneHref} className="hover:text-white">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={brand.emailHref}
                  className="break-all hover:text-white"
                >
                  {brand.email}
                </a>
              </li>
              <li>{brand.contactPerson}</li>
              <li>Mon–Sat · 09:00 – 18:00</li>
              <li>
                <a href="/#contact" className="font-semibold text-brand-accent hover:text-white">
                  Get My Business Solution
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/55 sm:mt-10">
          <p>
            © {new Date().getFullYear()} {brand.domain} — Business registrations,
            licences &amp; solutions for startups and MSMEs in Maharashtra.
          </p>
          <p className="mt-2 max-w-3xl text-xs leading-relaxed">
            We act as a facilitation platform connecting entrepreneurs with
            registration and compliance support. Content on this website is for
            general informational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
