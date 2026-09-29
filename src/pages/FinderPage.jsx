import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import RequirementFinder from '../components/RequirementFinder';
import { brand } from '../data/content';

export default function FinderPage() {
  return (
    <div className="bg-brand-surface">
      <Seo
        title={`Find My Business Requirements | ${brand.name}`}
        description="Answer a few questions to see which registrations, licences and compliances may apply to your business. Guidance only — Startbiz can verify."
        path="/finder"
      />
      <section className="border-b border-[#dbdbdb] bg-white pt-[72px] sm:pt-20">
        <div className="section-wrap py-10 sm:py-14">
          <nav className="mb-5 text-sm text-brand-text-soft">
            <Link to="/" className="hover:text-brand-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-text">Find requirements</span>
          </nav>
          <p className="section-label">Business requirement finder</p>
          <h1 className="heading mt-2 max-w-3xl text-3xl sm:text-4xl">
            Find My Business Requirements
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-soft sm:text-base">
            Answer a few simple questions about your business. We&apos;ll help you
            identify registrations, licences and solutions that may be relevant —
            then you can get your business solution with Startbiz.
          </p>
        </div>
      </section>
      <section className="py-10 sm:py-14">
        <div className="section-wrap max-w-4xl">
          <RequirementFinder />
        </div>
      </section>
    </div>
  );
}
