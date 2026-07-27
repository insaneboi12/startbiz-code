import { Link } from 'react-router-dom';
import { brand, serviceCount, whatsappHref } from '../data/content';
import ServiceSearch from './ServiceSearch';

const quickLinks = [
  { label: 'Trademark Registration', slug: 'trademark-registration' },
  { label: 'Company Registration', slug: 'private-limited-company-registration' },
  { label: 'GST Registration', slug: 'gst-registration' },
  { label: 'MSME Registration', slug: 'msme-registration' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-textured relative overflow-hidden pt-16 lg:pt-[72px]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${brand.textureLight})`,
          backgroundRepeat: 'repeat',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(244,140,49,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(0,122,138,0.1),transparent_38%)]" />

      <div className="section-wrap relative grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-16">
        <div className="animate-fadeUp max-w-2xl">
          <img
            src={brand.logo}
            alt={`${brand.name} — ${brand.tagline}`}
            className="mb-5 h-14 w-auto max-w-[280px] object-contain sm:h-16 sm:max-w-[320px]"
          />
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand-accent sm:text-base">
            Starting &amp; Managing Your Business has never been easier!
          </p>
          <h1 className="mt-2 max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight text-brand-text sm:text-3xl md:text-[2.35rem] md:leading-tight">
            India&apos;s All-In-One Platform for Company Registration, GST,
            Trademark &amp; Compliance
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-brand-text-soft sm:text-base">
            {serviceCount}+ business consulting services for startups &amp;
            MSMEs across Maharashtra — from company registration and GST to
            trademark, licensing, and compliance.
          </p>

          <div className="mt-6 max-w-xl">
            <ServiceSearch variant="hero" />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Get Started
            </a>
            <Link to="/#services" className="btn-outline w-full sm:w-auto">
              Explore Services
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {quickLinks.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="rounded border border-brand-primary/20 bg-white px-3 py-2.5 text-center text-xs font-semibold text-brand-primary shadow-sm transition hover:border-brand-accent hover:text-brand-accent sm:text-sm"
              >
                {item.label.replace(' Registration', '')}
              </Link>
            ))}
          </div>
        </div>

        <div
          className="animate-fadeUp relative mx-auto w-full max-w-lg lg:max-w-none"
          style={{ animationDelay: '120ms' }}
        >
          <div className="overflow-hidden rounded-2xl border border-[#dbdbdb] bg-white p-2 shadow-soft sm:p-3">
            <img
              src={brand.cover}
              alt={`${brand.name} business consulting services — company registration and GST support`}
              className="h-auto w-full rounded-xl object-contain"
            />
            <div className="mt-3 rounded-xl bg-brand-surface px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                Trusted Business Consulting Partner
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-text">
                500+ satisfied customers · {serviceCount}+ services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
