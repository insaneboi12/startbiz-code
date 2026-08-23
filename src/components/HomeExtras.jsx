import { Link } from 'react-router-dom';
import RequirementFinder from './RequirementFinder';
import ConsultationCta from './ConsultationCta';
import {
  customerProcess,
  gstBenefitsPreview,
  journeyEntryPoints,
  journeySteps,
  packages,
  siteFaqs,
  structureComparison,
  structureGuide,
  whyDifferent,
} from '../data/strategyContent';
import { industries } from '../data/industries';
import { knowledgeArticles } from '../data/knowledge';
import { brand } from '../data/content';

function serviceHref(slug) {
  return slug.startsWith('/') ? slug : `/services/${slug}`;
}

export function ProblemPathways() {
  return (
    <section id="problem" className="bg-white py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">Start here</p>
        <h2 className="heading mt-2 max-w-2xl text-2xl sm:text-3xl lg:text-4xl">
          Not sure which registration your business needs?
        </h2>
        <p className="body-muted mt-3 max-w-2xl text-sm sm:text-base">
          Tell us what you are building. We will help you see what may apply,
          why it matters, and what can wait — before you spend on filings.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {journeyEntryPoints.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="rounded-xl border border-[#dbdbdb] bg-brand-surface p-4 transition hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-soft"
            >
              <h3 className="font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold text-brand-primary">
                {item.action} →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinderSection() {
  return (
    <section id="finder" className="bg-brand-surface py-12 sm:py-16 lg:py-20">
      <div className="section-wrap">
        <p className="section-label">Business requirement finder</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">
          Find what your business may need
        </h2>
        <p className="body-muted mt-3 max-w-2xl text-sm sm:text-base">
          Answer a few questions. We will group items as essential, recommended,
          or depending on your activity. This is guidance, not a legal order.
        </p>
        <div className="mt-8">
          <RequirementFinder embedded />
        </div>
      </div>
    </section>
  );
}

export function JourneySection() {
  return (
    <section id="journey" className="bg-white py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">From idea to growth</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">
          Startbiz is with you at each stage
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journeySteps.map((step) => (
            <li
              key={step.n}
              className="rounded-xl border border-[#dbdbdb] bg-brand-surface p-5"
            >
              <span className="text-xs font-bold text-brand-accent">{step.n}</span>
              <h3 className="mt-2 font-semibold text-brand-text">{step.title}</h3>
              <p className="mt-2 text-sm text-brand-text-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function BenefitsPreview() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="section-wrap grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-label">Benefits first</p>
          <h2 className="heading mt-2 text-2xl sm:text-3xl">
            Do you actually need GST registration?
          </h2>
          <p className="body-muted mt-3 text-sm sm:text-base">
            GST is a tax system, not a default badge. Understand whether it may
            apply, what it helps with, and what it commits you to — then decide.
          </p>
          <ul className="mt-6 space-y-2">
            {gstBenefitsPreview.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-brand-text">
                <span className="text-brand-green">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/finder?need=gst-registration" className="btn-primary">
              Check my GST requirement
            </Link>
            <Link to="/services/gst-registration" className="btn-outline">
              Learn GST benefits
            </Link>
          </div>
        </div>
        <ConsultationCta compact />
      </div>
    </section>
  );
}

export function StructureSection() {
  return (
    <section id="compare" className="bg-brand-surface py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">Choose a structure</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">
          Which business structure may fit you?
        </h2>
        <div className="mt-8 overflow-x-auto rounded-xl border border-[#dbdbdb] bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-brand-primary text-white">
              <tr>
                {structureComparison.headers.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {structureComparison.rows.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? 'bg-brand-surface' : 'bg-white'}>
                  {row.map((cell, j) => (
                    <td key={`${i}-${j}`} className="px-4 py-3 text-brand-text">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {structureGuide.map((row) => (
            <Link
              key={row.ifYou}
              to={serviceHref(row.slug)}
              className="rounded-xl border border-[#dbdbdb] bg-white p-4 hover:border-brand-accent"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                If you are
              </p>
              <p className="mt-1 font-semibold text-brand-text">{row.ifYou}</p>
              <p className="mt-2 text-sm text-brand-text-soft">
                Consider: {row.consider}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/compare" className="btn-outline">
            Compare business structures
          </Link>
        </div>
      </div>
    </section>
  );
}

export function IndustrySection() {
  return (
    <section id="industries" className="bg-white py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">Industry solutions</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">
          Typical needs by business type
        </h2>
        <p className="body-muted mt-3 max-w-2xl text-sm">
          These are common starting points. Final requirements depend on your
          activity and location.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <Link
              key={item.slug}
              to={`/industries/${item.slug}`}
              className="rounded-xl border border-[#dbdbdb] bg-brand-surface p-5 transition hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-soft"
            >
              <span className="text-2xl">{item.icon}</span>
              <h3 className="mt-3 font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-brand-text-soft">
                {item.summary}
              </p>
              <span className="mt-4 inline-flex text-sm font-semibold text-brand-primary">
                View typical path →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyDifferent() {
  return (
    <section className="bg-brand-surface py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">What Startbiz does differently</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">
          We do not simply sell registrations
        </h2>
        <p className="body-muted mt-3 max-w-2xl text-sm sm:text-base">
          We first understand your business, explain what may apply, and help you
          choose. Then we support documentation, filing and ongoing compliance.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {whyDifferent.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-[#dbdbdb] bg-white px-4 py-3 text-sm text-brand-text"
            >
              <span className="text-brand-green">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">How we work</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">
          Tell us → we analyse → we recommend → we process → we support
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {customerProcess.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-[#dbdbdb] p-4">
              <span className="text-xs font-bold text-brand-accent">0{i + 1}</span>
              <h3 className="mt-2 font-semibold text-brand-text">{step.title}</h3>
              <p className="mt-2 text-sm text-brand-text-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PackagesSection() {
  return (
    <section id="packages" className="bg-brand-surface py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">Situation-based packages</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">
          Bundles that follow a real starting situation
        </h2>
        <p className="body-muted mt-3 max-w-2xl text-sm">
          Final requirements depend on your business activities and circumstances.
          Packages are starting frameworks, not a legal determination.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {packages.map((pack) => (
            <article
              key={pack.slug}
              className="rounded-xl border border-[#dbdbdb] bg-white p-5"
            >
              <h3 className="font-display text-xl font-semibold text-brand-text">
                {pack.title}
              </h3>
              <p className="mt-1 text-sm text-brand-text-soft">{pack.forWho}</p>
              <ul className="mt-4 space-y-1.5">
                {pack.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-brand-text">
                    <span className="text-brand-green">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-5 inline-flex text-sm font-semibold text-brand-primary">
                Discuss this package →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function KnowledgePreview() {
  return (
    <section id="knowledge" className="bg-white py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">Knowledge centre</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">
          Plain-language guides before you file
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {knowledgeArticles.slice(0, 6).map((article) => (
            <Link
              key={article.slug}
              to={`/knowledge/${article.slug}`}
              className="rounded-xl border border-[#dbdbdb] bg-brand-surface p-5 hover:border-brand-accent"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                {article.readTime}
              </p>
              <h3 className="mt-2 font-semibold text-brand-text">{article.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-brand-text-soft">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
        <Link to="/knowledge" className="btn-outline mt-8">
          Open knowledge centre
        </Link>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="bg-brand-surface py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">FAQ</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">
          Common questions from people starting out
        </h2>
        <div className="mt-8 space-y-3">
          {siteFaqs.map((item) => (
            <details
              key={item.q}
              className="rounded-xl border border-[#dbdbdb] bg-white px-5 py-4"
            >
              <summary className="cursor-pointer font-semibold text-brand-text">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-brand-text-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-brand-primary py-12 text-white sm:py-16">
      <div className="section-wrap text-center">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          Talk to Startbiz today
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/80 sm:text-base">
          Tell us what you want to build. {brand.contactPerson} will help you
          understand what your business may need — then we can support the filing.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/finder" className="btn-primary">
            Find What I Need
          </Link>
          <a href="#contact" className="btn-ghost-light">
            Get free consultation
          </a>
        </div>
      </div>
    </section>
  );
}
