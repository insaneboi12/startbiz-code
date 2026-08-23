import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ConsultationCta from '../components/ConsultationCta';
import { brand } from '../data/content';
import { industries } from '../data/industries';

export default function IndustriesPage() {
  return (
    <div className="bg-brand-surface">
      <Seo
        title={`Industry Solutions | ${brand.name}`}
        description="Typical registration paths for restaurants, cloud kitchens, e-commerce, freelancers and construction businesses in India."
      />
      <section className="border-b border-[#dbdbdb] bg-white pt-[72px] sm:pt-20">
        <div className="section-wrap py-10 sm:py-14">
          <nav className="mb-5 text-sm text-brand-text-soft">
            <Link to="/" className="hover:text-brand-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-text">Industries</span>
          </nav>
          <p className="section-label">Industry solutions</p>
          <h1 className="heading mt-2 max-w-3xl text-3xl sm:text-4xl">
            What businesses like yours often need
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-brand-text-soft sm:text-base">
            These pages list typical items. They are not a complete legal list
            for every operator. Startbiz can verify against your activity.
          </p>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="section-wrap grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <Link
              key={item.slug}
              to={`/industries/${item.slug}`}
              className="rounded-xl border border-[#dbdbdb] bg-white p-5 hover:border-brand-accent hover:shadow-soft"
            >
              <span className="text-2xl">{item.icon}</span>
              <h2 className="mt-3 font-semibold text-brand-text">{item.title}</h2>
              <p className="mt-2 text-sm text-brand-text-soft">{item.summary}</p>
            </Link>
          ))}
        </div>
        <div className="section-wrap mt-10">
          <ConsultationCta compact />
        </div>
      </section>
    </div>
  );
}
