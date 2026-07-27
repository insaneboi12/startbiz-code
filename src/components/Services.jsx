import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  megaMenus,
  serviceCategories,
  serviceCount,
  services,
  slugify,
  whatsappHref,
} from '../data/content';
import ServiceSearch from './ServiceSearch';

export default function Services() {
  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const visible = showAllFeatured ? services : services.slice(0, 6);

  const activeCat = useMemo(
    () => serviceCategories.find((c) => c.id === activeCategory) || serviceCategories[0],
    [activeCategory]
  );

  return (
    <section id="services" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="section-wrap">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Popular services</p>
            <h2 className="heading mt-2 text-2xl sm:text-3xl lg:text-4xl">
              Bouquet of highly preferred services by MSMEs
            </h2>
            <p className="body-muted mt-3 text-sm sm:text-base">
              Explore {serviceCount}+ business consulting services — from GST
              and company registration to trademark and compliance filings.
            </p>
          </div>
          <ServiceSearch variant="nav" className="w-full max-w-md" />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {megaMenus.map((menu) => (
            <Link
              key={menu.id}
              to={menu.path}
              className="rounded-full border border-brand-primary/20 bg-brand-muted px-4 py-2 text-sm font-semibold text-brand-primary transition hover:border-brand-accent hover:text-brand-accent"
            >
              {menu.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {visible.map((service) => (
            <article
              key={service.id}
              className="flex flex-col overflow-hidden rounded-xl border border-[#dbdbdb] bg-brand-surface transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <Link to={`/services/${service.slug}`} className="bg-brand-muted p-3 sm:p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-auto w-full object-contain transition duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </Link>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  {String(service.id).padStart(2, '0')}
                </p>
                <h3 className="mt-1 text-base font-semibold text-brand-text sm:text-lg">
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-brand-primary"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-text-soft">
                  {service.summary}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.points.slice(0, 3).map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-brand-text-soft"
                    >
                      <span className="mt-0.5 shrink-0 text-brand-green">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-brand-primary transition hover:text-brand-accent"
                >
                  View details →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-stretch justify-between gap-4 rounded-xl border border-dashed border-brand-primary/25 bg-brand-muted/70 px-5 py-6 text-center sm:mt-10 sm:flex-row sm:items-center sm:px-6 sm:py-8 sm:text-left">
          <div className="min-w-0">
            <h3 className="heading text-xl sm:text-2xl">
              Need help choosing your business setup?
            </h3>
            <p className="body-muted mt-1 text-sm">
              Talk to our business consulting team and pick the right company
              registration path for your goals.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-end">
            <button
              type="button"
              onClick={() => setShowAllFeatured((v) => !v)}
              className="btn-outline w-full sm:w-auto"
            >
              {showAllFeatured ? 'Show Less' : `Show Featured (${services.length})`}
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="mt-12 sm:mt-14">
          <p className="section-label">Full catalogue</p>
          <h3 className="heading mt-2 text-xl sm:text-2xl lg:text-3xl">
            Browse all {serviceCount}+ business consulting services
          </h3>
          <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === cat.id
                    ? 'bg-brand-primary text-white'
                    : 'bg-brand-muted text-brand-text hover:bg-brand-primary/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {activeCat.items.map((title) => (
              <Link
                key={title}
                to={`/services/${slugify(title)}`}
                className="rounded-lg border border-[#dbdbdb] bg-brand-surface px-4 py-3 text-sm font-medium text-brand-text transition hover:border-brand-accent hover:text-brand-primary"
              >
                {title}
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to={activeCat.path || `/category/${activeCat.id}`} className="btn-outline">
              Open {activeCat.label} page →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
