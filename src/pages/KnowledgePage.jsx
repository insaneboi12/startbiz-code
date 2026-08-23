import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ConsultationCta from '../components/ConsultationCta';
import { brand } from '../data/content';
import { knowledgeArticles, knowledgeCategories } from '../data/knowledge';

export default function KnowledgePage() {
  const [active, setActive] = useState('all');
  const list = useMemo(
    () =>
      active === 'all'
        ? knowledgeArticles
        : knowledgeArticles.filter((a) => a.category === active),
    [active]
  );

  return (
    <div className="bg-brand-surface">
      <Seo
        title={`Business Knowledge Centre | ${brand.name}`}
        description="Guides on business structure, GST, Udyam, FSSAI and trademarks — written to help you decide what may apply before you file."
      />
      <section className="border-b border-[#dbdbdb] bg-white pt-[72px] sm:pt-20">
        <div className="section-wrap py-10 sm:py-14">
          <nav className="mb-5 text-sm text-brand-text-soft">
            <Link to="/" className="hover:text-brand-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-text">Knowledge centre</span>
          </nav>
          <p className="section-label">Education hub</p>
          <h1 className="heading mt-2 max-w-3xl text-3xl sm:text-4xl">
            Business knowledge centre
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-brand-text-soft sm:text-base">
            Short explainers so you can see the difference between a structure, a
            tax registration, a licence and a brand filing.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="section-wrap">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              type="button"
              onClick={() => setActive('all')}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${
                active === 'all'
                  ? 'bg-brand-primary text-white'
                  : 'bg-white text-brand-text'
              }`}
            >
              All guides
            </button>
            {knowledgeCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${
                  active === cat.id
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-brand-text'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((article) => (
              <Link
                key={article.slug}
                to={`/knowledge/${article.slug}`}
                className="rounded-xl border border-[#dbdbdb] bg-white p-5 hover:border-brand-accent hover:shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  {article.readTime}
                </p>
                <h2 className="mt-2 font-semibold text-brand-text">{article.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-brand-text-soft">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <ConsultationCta compact />
          </div>
        </div>
      </section>
    </div>
  );
}
