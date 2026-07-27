import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import {
  brand,
  getRelatedServices,
  getServiceBySlug,
  getWhatsAppUrl,
  megaMenus,
  serviceCount,
  whatsappHref,
} from '../data/content';

function IncludedTable({ points, title }) {
  if (!points?.length) return null;

  return (
    <section className="py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">What&apos;s included</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">
          Why choose {brand.name} for {title}?
        </h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-[#dbdbdb] bg-white shadow-soft">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-brand-primary text-white">
              <tr>
                <th className="px-4 py-3 font-semibold sm:px-5">Feature</th>
                <th className="px-4 py-3 font-semibold sm:px-5">
                  With {brand.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {points.map((point, index) => (
                <tr
                  key={point}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-brand-surface'}
                >
                  <td className="px-4 py-3 text-brand-text sm:px-5">{point}</td>
                  <td className="px-4 py-3 font-semibold text-brand-green sm:px-5">
                    ✔ Included
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ProcessSteps({ process, title }) {
  if (!process?.length) return null;

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">Process</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">
          How {title} works with {brand.name}
        </h2>
        <p className="body-muted mt-3 max-w-2xl text-sm sm:text-base">
          A clear, guided process from enquiry to completion.
        </p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => (
            <li
              key={step}
              className="relative rounded-xl border border-[#dbdbdb] bg-brand-surface p-5"
            >
              <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="text-sm font-semibold text-brand-text sm:text-base">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ChecklistSection({ label, title, items }) {
  if (!items?.length) return null;

  return (
    <section className="py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">{label}</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">{title}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-[#dbdbdb] bg-white px-4 py-3 text-sm text-brand-text"
            >
              <span className="mt-0.5 shrink-0 text-brand-green">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function EnquiryCard({ service }) {
  return (
    <aside className="rounded-xl border border-[#dbdbdb] bg-white p-5 shadow-soft sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
        Get started
      </p>
      <h2 className="mt-2 font-display text-xl font-semibold text-brand-text">
        Talk to a business consultant
      </h2>
      <p className="mt-2 text-sm text-brand-text-soft">
        Share your requirement for {service.title}. Our team will guide you with
        the right next steps.
      </p>
      <ul className="mt-5 space-y-3 text-sm">
        <li>
          <a href={brand.phoneHref} className="font-semibold text-brand-primary hover:underline">
            {brand.phone}
          </a>
        </li>
        <li>
          <a href={brand.emailHref} className="break-all font-semibold text-brand-primary hover:underline">
            {brand.email}
          </a>
        </li>
        <li className="text-brand-text-soft">Contact: {brand.contactPerson}</li>
        <li className="text-brand-text-soft">Mon–Sat · 09:00 – 18:00</li>
      </ul>
      <a
        href={getWhatsAppUrl(`Get Started — ${service.title}`)}
        target="_blank"
        rel="noreferrer"
        className="btn-primary mt-5 w-full"
      >
        WhatsApp
      </a>
    </aside>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const related = getRelatedServices(service.slug, 3);
  const categoryPath =
    megaMenus.find((m) => m.id === service.categoryId)?.path || '/#services';

  const pageTitle =
    service.seoTitle ||
    `${service.title} | ${brand.name} Business Consulting Services`;
  const pageDescription =
    service.seoDescription ||
    `${service.summary} Expert business consulting services from ${brand.name} across Maharashtra, India.`;
  const pageKeywords = Array.isArray(service.keywords)
    ? service.keywords.join(', ')
    : undefined;

  return (
    <div className="bg-brand-surface">
      <Seo
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
      />

      <section className="border-b border-[#dbdbdb] bg-white pt-16 lg:pt-[72px]">
        <div className="section-wrap py-8 sm:py-12 lg:py-14">
          <nav className="mb-5 text-sm text-brand-text-soft">
            <Link to="/" className="hover:text-brand-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            {service.categoryId ? (
              <>
                <Link to={categoryPath} className="hover:text-brand-primary">
                  {service.category}
                </Link>
                <span className="mx-2">/</span>
              </>
            ) : null}
            <span className="text-brand-text">{service.title}</span>
          </nav>

          <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div>
              {service.group && (
                <p className="section-label">{service.group}</p>
              )}
              <h1 className="heading mt-2 text-3xl sm:text-4xl lg:text-[2.75rem]">
                {service.title}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-brand-text-soft sm:text-base">
                {service.summary}
              </p>
              <ul className="mt-6 space-y-2">
                {service.points.slice(0, 5).map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm text-brand-text sm:text-base"
                  >
                    <span className="text-brand-green">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  Get Started
                </a>
                <a href={brand.phoneHref} className="btn-outline w-full sm:w-auto">
                  Call {brand.phone}
                </a>
              </div>

              {service.image ? (
                <div className="mt-8 overflow-hidden rounded-xl border border-[#dbdbdb] bg-brand-muted p-3 lg:hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-auto w-full object-contain"
                  />
                </div>
              ) : null}
            </div>

            <div className="space-y-4">
              <EnquiryCard service={service} />
              {service.image ? (
                <div className="hidden overflow-hidden rounded-xl border border-[#dbdbdb] bg-brand-muted p-3 lg:block">
                  <img
                    src={service.image}
                    alt={`${service.title} — ${brand.name}`}
                    className="h-auto w-full object-contain"
                  />
                </div>
              ) : (
                <div className="hidden rounded-xl border border-[#dbdbdb] bg-brand-muted p-6 text-center lg:block">
                  <img
                    src={brand.logo}
                    alt=""
                    className="mx-auto h-12 w-auto object-contain"
                  />
                  <p className="mt-3 text-sm font-semibold text-brand-text">
                    {service.title}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="section-wrap max-w-3xl">
          <p className="section-label">Introduction</p>
          <h2 className="heading mt-2 text-2xl sm:text-3xl">
            What is {service.title}?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-text-soft sm:text-base">
            {service.about || service.summary}
          </p>
        </div>
      </section>

      <IncludedTable points={service.points} title={service.title} />

      <ChecklistSection
        label="Benefits"
        title={`Benefits of ${service.title}`}
        items={service.points}
      />

      <ChecklistSection
        label="Eligibility"
        title={`Who can apply for ${service.title}?`}
        items={service.whoCanApply}
      />

      <ChecklistSection
        label="Documents"
        title={`Documents required for ${service.title}`}
        items={service.documents}
      />

      <ChecklistSection
        label="Types"
        title="Popular options"
        items={service.types}
      />

      <ChecklistSection
        label="Why needed"
        title={`Why is ${service.title} important?`}
        items={service.whyNeeded}
      />

      <ProcessSteps process={service.process} title={service.title} />

      <section className="bg-brand-primary py-10 text-white sm:py-12">
        <div className="section-wrap flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Need help with {service.title}?
            </h2>
            <p className="mt-2 text-sm text-white/80 sm:text-base">
              Contact {brand.contactPerson} for expert business consulting
              services across Maharashtra.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={getWhatsAppUrl(`Get Started — ${service.title}`)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              WhatsApp
            </a>
            <a href={brand.phoneHref} className="btn-ghost-light w-full sm:w-auto">
              Call {brand.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="section-wrap">
          <p className="section-label">Explore more</p>
          <h2 className="heading mt-2 text-2xl sm:text-3xl">
            Related services
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="rounded-xl border border-[#dbdbdb] bg-white p-4 transition hover:-translate-y-1 hover:shadow-soft"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mb-3 h-auto w-full object-contain"
                    loading="lazy"
                  />
                ) : null}
                <h3 className="font-semibold text-brand-text">{item.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-brand-text-soft">
                  {item.summary}
                </p>
                <span className="mt-3 inline-flex text-sm font-semibold text-brand-primary">
                  View details →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {service.categoryId ? (
              <Link to={categoryPath} className="btn-outline">
                More in {service.category}
              </Link>
            ) : null}
            <Link to="/#services" className="btn-primary">
              Browse {serviceCount}+ services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
