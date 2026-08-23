import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import RequirementFinder from '../components/RequirementFinder';
import { brand } from '../data/content';

export default function FinderPage() {
  return (
    <div className="bg-brand-surface">
      <Seo
        title={`Find What Your Business Needs | ${brand.name}`}
        description="Answer a few questions to see which registrations, licences and compliances may apply to your business. Guidance only — Startbiz can verify."
      />
      <section className="border-b border-[#dbdbdb] bg-white pt-[72px] sm:pt-20">
        <div className="section-wrap py-10 sm:py-14">
          <nav className="mb-5 text-sm text-brand-text-soft">
            <Link to="/" className="hover:text-brand-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-text">Requirement finder</span>
          </nav>
          <p className="section-label">Business requirement finder</p>
          <h1 className="heading mt-2 max-w-3xl text-3xl sm:text-4xl">
            Find what your business may need
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-soft sm:text-base">
            This tool groups possible next steps from what you tell us. It is
            not a legal determination. Applicable conditions may vary.
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
