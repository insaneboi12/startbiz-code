import { Link } from 'react-router-dom';
import { brand } from '../data/content';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-textured relative overflow-hidden pt-[72px] sm:pt-20"
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
            className="mb-5 h-12 w-auto max-w-[220px] object-contain object-left sm:h-14 sm:max-w-[280px] md:h-16 md:max-w-[320px]"
          />
          <p className="mb-2 text-sm font-semibold text-brand-accent sm:text-base">
            {brand.tagline}
          </p>
          <h1 className="mt-2 max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight text-brand-text sm:text-3xl md:text-[2.35rem] md:leading-tight">
            Your Business Starts Here.
            <span className="mt-1 block text-brand-primary">
              We Help You Take the Right Step.
            </span>
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-brand-text-soft sm:text-base">
            From starting a new business to managing registrations, licences and
            compliance, Startbiz helps you find the right business solution —
            simply and professionally. GST, MSME, Shop Act, company registration,
            FSSAI, trademark and more across Maharashtra.
          </p>
          <p className="mt-3 max-w-lg text-sm font-medium text-brand-text sm:text-base">
            Tell us what you want to do. We&apos;ll tell you what you need.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/finder" className="btn-primary w-full sm:w-auto">
              Find My Business Solution
            </Link>
            <a href="#contact" className="btn-outline w-full sm:w-auto">
              Talk to a Business Expert
            </a>
          </div>

          <p className="mt-7 text-sm font-semibold text-brand-primary sm:text-base">
            Serving Businesses Across Maharashtra
          </p>
        </div>

        <div
          className="animate-fadeUp relative mx-auto w-full max-w-lg lg:max-w-none"
          style={{ animationDelay: '120ms' }}
        >
          <div className="overflow-hidden rounded-2xl border border-[#dbdbdb] bg-white p-2 shadow-soft sm:p-3">
            <img
              src={brand.cover}
              alt={`${brand.name} business registrations and licences support across Maharashtra`}
              className="h-auto w-full rounded-xl object-contain"
            />
            <div className="mt-3 rounded-xl bg-brand-surface px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                Business Solutions Partner
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-text">
                {brand.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
