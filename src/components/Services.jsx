import { Link } from 'react-router-dom';
import {
  serviceCategories,
  serviceCount,
  slugify,
} from '../data/content';
import { serviceSolutionGroups } from '../data/strategyContent';
import ServiceSearch from './ServiceSearch';
import { useMemo, useState } from 'react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  const activeCat = useMemo(
    () =>
      serviceCategories.find((c) => c.id === activeCategory) ||
      serviceCategories[0],
    [activeCategory]
  );

  return (
    <section id="services" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="section-wrap">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Business registrations &amp; solutions</p>
            <h2 className="heading mt-2 text-2xl sm:text-3xl lg:text-4xl">
              Business Registrations &amp; Solutions
            </h2>
            <p className="body-muted mt-3 text-sm sm:text-base">
              Explore GST registration, company registration, MSME, Shop Act,
              FSSAI, trademark and {serviceCount}+ business consulting services —
              grouped by what you want to achieve.
            </p>
          </div>
          <ServiceSearch variant="nav" className="w-full max-w-md" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {serviceSolutionGroups.map((group) => (
            <Link
              key={group.title}
              to={group.to}
              className="rounded-xl border border-[#dbdbdb] bg-brand-surface p-5 transition hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-soft sm:p-6"
            >
              <h3 className="font-display text-lg font-semibold text-brand-text">
                {group.title}
              </h3>
              <p className="mt-2 text-sm text-brand-text-soft">{group.text}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-brand-primary">
                Explore →
              </span>
            </Link>
          ))}
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
            <Link
              to={activeCat.path || `/category/${activeCat.id}`}
              className="btn-outline"
            >
              Open {activeCat.label} page →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
