import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import ConsultationCta from '../components/ConsultationCta';
import { brand, getServiceBySlug } from '../data/content';
import { getIndustryBySlug } from '../data/industries';
import { packages } from '../data/strategyContent';

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = getIndustryBySlug(slug);

  if (!industry) return <Navigate to="/industries" replace />;

  const pack = packages.find((p) => p.slug === industry.packageSlug);
  const related = industry.related
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  return (
    <div className="bg-brand-surface">
      <Seo
        title={`${industry.title} | ${brand.name}`}
        description={industry.summary}
      />
      <section className="border-b border-[#dbdbdb] bg-white pt-[72px] sm:pt-20">
        <div className="section-wrap py-10 sm:py-14">
          <nav className="mb-5 text-sm text-brand-text-soft">
            <Link to="/" className="hover:text-brand-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/industries" className="hover:text-brand-primary">
              Industries
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-text">{industry.title}</span>
          </nav>
          <p className="section-label">Industry path</p>
          <h1 className="heading mt-2 text-3xl sm:text-4xl">
            {industry.icon} {industry.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-brand-text-soft sm:text-base">
            {industry.summary}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="section-wrap grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="heading text-2xl">Typical items to review</h2>
            <ul className="mt-5 space-y-2">
              {industry.typical.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-[#dbdbdb] bg-white px-4 py-3 text-sm"
                >
                  <span className="text-brand-green">✔</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-brand-text-soft">
              Final requirements depend on your business activities and specific
              circumstances.
            </p>
            {related.length > 0 && (
              <div className="mt-8">
                <h3 className="heading text-xl">Related services</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {related.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="rounded-xl border border-[#dbdbdb] bg-white p-4 hover:border-brand-accent"
                    >
                      <p className="font-semibold text-brand-text">{s.title}</p>
                      <p className="mt-1 line-clamp-2 text-sm text-brand-text-soft">
                        {s.summary}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="space-y-4">
            {pack && (
              <div className="rounded-xl border border-[#dbdbdb] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  Related package
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold">{pack.title}</h2>
                <p className="mt-1 text-sm text-brand-text-soft">{pack.forWho}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {pack.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-brand-green">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <ConsultationCta compact />
            <Link to="/finder" className="btn-outline w-full">
              Build my checklist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
