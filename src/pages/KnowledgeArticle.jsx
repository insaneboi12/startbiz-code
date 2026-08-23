import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import ConsultationCta from '../components/ConsultationCta';
import { brand } from '../data/content';
import { getArticleBySlug, getRelatedArticles } from '../data/knowledge';

export default function KnowledgeArticle() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) return <Navigate to="/knowledge" replace />;

  const related = getRelatedArticles(slug);

  return (
    <div className="bg-brand-surface">
      <Seo title={`${article.title} | ${brand.name}`} description={article.excerpt} />
      <article className="border-b border-[#dbdbdb] bg-white pt-[72px] sm:pt-20">
        <div className="section-wrap max-w-3xl py-10 sm:py-14">
          <nav className="mb-5 text-sm text-brand-text-soft">
            <Link to="/" className="hover:text-brand-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/knowledge" className="hover:text-brand-primary">
              Knowledge
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-text">{article.title}</span>
          </nav>
          <p className="section-label">{article.readTime}</p>
          <h1 className="heading mt-2 text-3xl sm:text-4xl">{article.title}</h1>
          <p className="mt-4 text-base text-brand-text-soft">{article.excerpt}</p>
        </div>
      </article>

      <section className="py-12 sm:py-16">
        <div className="section-wrap max-w-3xl space-y-10">
          {article.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="heading text-xl sm:text-2xl">{section.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-text-soft sm:text-base">
                {section.body}
              </p>
            </div>
          ))}
          <ConsultationCta compact />
          {related.length > 0 && (
            <div>
              <h2 className="heading text-xl">Related guides</h2>
              <ul className="mt-4 space-y-2">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/knowledge/${item.slug}`}
                      className="text-sm font-semibold text-brand-primary hover:underline"
                    >
                      {item.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
