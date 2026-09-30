import { Link, Navigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { brand } from '../data/content';
import { getLegalDoc, legalNav } from '../data/legal';

function SectionBlock({ section }) {
  return (
    <section className="space-y-3">
      <h2 className="heading text-xl sm:text-2xl">{section.heading}</h2>
      {section.body ? (
        <p className="text-sm leading-relaxed text-brand-text-soft sm:text-base">
          {section.body}
        </p>
      ) : null}
      {section.paragraphs?.map((p) => (
        <p
          key={p}
          className="text-sm leading-relaxed text-brand-text-soft sm:text-base"
        >
          {p}
        </p>
      ))}
      {section.bullets?.length ? (
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-brand-text-soft sm:text-base">
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.groups?.map((group) => (
        <div key={group.title} className="space-y-2 pt-1">
          <h3 className="text-base font-semibold text-brand-text sm:text-lg">
            {group.title}
          </h3>
          {group.body ? (
            <p className="text-sm leading-relaxed text-brand-text-soft sm:text-base">
              {group.body}
            </p>
          ) : null}
          {group.bullets?.length ? (
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-brand-text-soft sm:text-base">
              {group.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
      {section.closing ? (
        <p className="text-sm leading-relaxed text-brand-text-soft sm:text-base">
          {section.closing}
        </p>
      ) : null}
    </section>
  );
}

export default function LegalPage({ docKey }) {
  const doc = getLegalDoc(docKey);
  if (!doc) return <Navigate to="/" replace />;

  const path = `/${doc.slug}`;

  return (
    <div className="bg-brand-surface">
      <Seo
        title={`${doc.title} | ${brand.name}`}
        description={doc.description}
        path={path}
      />
      <section className="border-b border-[#dbdbdb] bg-white pt-[72px] sm:pt-20">
        <div className="section-wrap max-w-3xl py-10 sm:py-14">
          <nav className="mb-5 text-sm text-brand-text-soft">
            <Link to="/" className="hover:text-brand-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-text">{doc.title}</span>
          </nav>
          <p className="section-label">Legal</p>
          <h1 className="heading mt-2 text-3xl sm:text-4xl">{doc.title}</h1>
          <p className="mt-4 text-sm text-brand-text-soft">
            Effective Date: {doc.effectiveDate}
          </p>
          <p className="mt-1 text-sm text-brand-text-soft">
            Last Updated: {doc.lastUpdated}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="section-wrap max-w-3xl space-y-8">
          {doc.intro.map((p) => (
            <p
              key={p}
              className="text-sm leading-relaxed text-brand-text-soft sm:text-base"
            >
              {p}
            </p>
          ))}

          {doc.sections.map((section) => (
            <SectionBlock key={section.heading} section={section} />
          ))}

          <div className="rounded-xl border border-[#dbdbdb] bg-white p-5">
            <p className="text-sm font-semibold text-brand-text">
              Related policies
            </p>
            <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
              {legalNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`text-sm font-semibold ${
                      item.to === path
                        ? 'text-brand-accent'
                        : 'text-brand-primary hover:text-brand-accent'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
