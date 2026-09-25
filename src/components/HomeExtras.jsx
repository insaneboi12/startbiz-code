import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import RequirementFinder from './RequirementFinder';
import ConsultationCta from './ConsultationCta';
import {
  askStartbizExamples,
  customerProcess,
  gstBenefitsPreview,
  intentPathways,
  journeySteps,
  packages,
  serviceSolutionGroups,
  siteFaqs,
  solutionBusinessTypes,
  solutionGoals,
  solutionRecommendations,
  structureComparison,
  structureGuide,
  whyDifferent,
} from '../data/strategyContent';
import { industries } from '../data/industries';
import { knowledgeArticles } from '../data/knowledge';
import { brand, getWhatsAppUrl } from '../data/content';

function serviceHref(slug) {
  return slug.startsWith('/') ? slug : `/services/${slug}`;
}

function ChoiceChip({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-3 py-2 text-left text-sm font-medium transition ${
        active
          ? 'border-brand-primary bg-brand-primary text-white'
          : 'border-[#dbdbdb] bg-white text-brand-text hover:border-brand-accent'
      }`}
    >
      {children}
    </button>
  );
}

export function ProblemPathways() {
  return (
    <section id="problem" className="bg-white py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">What are you trying to do?</p>
        <h2 className="heading mt-2 max-w-2xl text-2xl sm:text-3xl lg:text-4xl">
          Starting or Growing a Business?
        </h2>
        <p className="body-muted mt-3 max-w-2xl text-sm sm:text-base">
          Get the right registrations, licences and business solutions — without
          the confusion. Choose a path below instead of searching through a long
          service list.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {intentPathways.map((path) => (
            <article
              key={path.id}
              className={`rounded-xl border p-5 sm:p-6 ${path.accent}`}
            >
              <h3 className="font-display text-lg font-semibold text-brand-text sm:text-xl">
                {path.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {path.items.map((item) => (
                  <li key={`${path.id}-${item.label}`}>
                    <Link
                      to={serviceHref(item.slug)}
                      className="inline-flex rounded-md border border-white/80 bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-primary transition hover:border-brand-accent hover:text-brand-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to={path.to}
                className="mt-5 inline-flex text-sm font-semibold text-brand-primary hover:text-brand-accent"
              >
                {path.cta} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionFinderSection() {
  const [businessType, setBusinessType] = useState('');
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const resultsRef = useRef(null);

  const results = useMemo(() => {
    if (!goal) return [];
    return solutionRecommendations[goal] || [];
  }, [goal]);

  useEffect(() => {
    if (!submitted || results.length === 0) return;
    const id = window.requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
    return () => window.cancelAnimationFrame(id);
  }, [submitted, results.length, businessType, goal]);

  const onFind = (e) => {
    e.preventDefault();
    if (!businessType || !goal) return;
    setSubmitted(true);
  };

  return (
    <section id="solution-finder" className="bg-brand-surface py-12 sm:py-16 lg:py-20">
      <div className="section-wrap">
        <p className="section-label">Not sure what registration you need?</p>
        <h2 className="heading mt-2 max-w-2xl text-2xl sm:text-3xl lg:text-4xl">
          Don&apos;t worry. Tell us about your business.
        </h2>
        <p className="body-muted mt-3 max-w-2xl text-sm sm:text-base">
          Answer two questions. We&apos;ll suggest GST, MSME, Shop Act, FSSAI,
          trademark or company registration options that often apply — then you
          can talk to Startbiz to confirm.
        </p>

        <form
          onSubmit={onFind}
          className="mt-8 rounded-xl border border-[#dbdbdb] bg-white p-5 shadow-soft sm:p-7"
        >
          <fieldset>
            <legend className="text-sm font-semibold text-brand-text sm:text-base">
              What type of business are you planning?
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {solutionBusinessTypes.map((type) => (
                <ChoiceChip
                  key={type}
                  active={businessType === type}
                  onClick={() => {
                    setBusinessType(type);
                    setSubmitted(false);
                  }}
                >
                  {type}
                </ChoiceChip>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-8">
            <legend className="text-sm font-semibold text-brand-text sm:text-base">
              What do you want to do?
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {solutionGoals.map((item) => (
                <ChoiceChip
                  key={item}
                  active={goal === item}
                  onClick={() => {
                    setGoal(item);
                    setSubmitted(false);
                  }}
                >
                  {item}
                </ChoiceChip>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="btn-primary mt-8 w-full sm:w-auto"
            disabled={!businessType || !goal}
          >
            Find My Required Registrations
          </button>
        </form>

        {submitted && results.length > 0 && (
          <div
            ref={resultsRef}
            tabIndex={-1}
            className="mt-6 scroll-mt-28 rounded-xl border border-brand-primary/20 bg-white p-5 outline-none sm:p-6"
          >
            <h3 className="font-semibold text-brand-text">
              Suggested starting points for a {businessType.toLowerCase()} looking
              to {goal.toLowerCase()}
            </h3>
            <p className="mt-2 text-sm text-brand-text-soft">
              Guidance only — final requirements depend on your activity and
              location. Talk to Startbiz to confirm.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {results.map((item) => (
                <li key={item.label}>
                  <Link
                    to={serviceHref(item.slug)}
                    className="flex items-center justify-between rounded-lg border border-[#dbdbdb] px-4 py-3 text-sm font-semibold text-brand-primary transition hover:border-brand-accent"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link to="/finder" className="btn-primary">
                Get a fuller roadmap
              </Link>
              <a href="#contact" className="btn-outline">
                Get My Business Solution
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function FinderSection() {
  return (
    <section id="finder" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="section-wrap">
        <p className="section-label">Business requirement finder</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">
          Need a more detailed roadmap?
        </h2>
        <p className="body-muted mt-3 max-w-2xl text-sm sm:text-base">
          Answer a few questions. We will group GST, licences and registrations
          as essential, recommended, or depending on your activity.
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
        <p className="section-label">Business journey</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl">
          From Idea to Business Growth — We&apos;re With You
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journeySteps.map((step, index) => (
            <li
              key={step.n}
              className="relative rounded-xl border border-[#dbdbdb] bg-brand-surface p-5"
            >
              <span className="text-xs font-bold text-brand-accent">{step.n}</span>
              <h3 className="mt-2 font-semibold text-brand-text">{step.title}</h3>
              <p className="mt-2 text-sm text-brand-text-soft">{step.text}</p>
              {index < journeySteps.length - 1 && (
                <span className="mt-3 inline-block text-brand-accent lg:hidden">
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function AskStartbizSection() {
  return (
    <section id="ask-startbiz" className="bg-brand-surface py-12 sm:py-16">
      <div className="section-wrap">
        <p className="section-label">Ask Startbiz</p>
        <h2 className="heading mt-2 text-2xl sm:text-3xl lg:text-4xl">
          Have a Business Question?
        </h2>
        <p className="body-muted mt-3 max-w-2xl text-sm sm:text-base">
          Ask Startbiz. Change your mindset from &quot;Which service should I
          buy?&quot; to &quot;Startbiz can tell me what I need.&quot;
        </p>
        <ul className="mt-8 space-y-3">
          {askStartbizExamples.map((example) => (
            <li key={example}>
              <a
                href={getWhatsAppUrl(example)}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-xl border border-[#dbdbdb] bg-white px-4 py-3 text-sm text-brand-text transition hover:border-brand-accent hover:shadow-soft sm:text-base"
              >
                <span className="mt-0.5 text-brand-accent">“</span>
                <span>{example}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={getWhatsAppUrl(brand.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Ask Startbiz →
          </a>
          <a href="#contact" className="btn-outline">
            Get My Business Solution
          </a>
        </div>
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
      <div className="section-wrap text-center text-white">
        <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
          Startbiz — From Idea to Business Growth
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white sm:text-base">
          We&apos;re with you. Tell us your business requirement. We&apos;ll help
          you find the right registration, licence or business solution — for new
          entrepreneurs and existing business owners across Maharashtra.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/finder" className="btn-primary !text-white">
            Find My Business Solution
          </Link>
          <a href="#contact" className="btn-ghost-light !text-white">
            Talk to a Business Expert
          </a>
        </div>
      </div>
    </section>
  );
}

export { serviceSolutionGroups };
