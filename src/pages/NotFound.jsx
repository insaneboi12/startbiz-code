import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { brand } from '../data/content';

export default function NotFound() {
  return (
    <div className="bg-brand-surface pt-[72px] sm:pt-20">
      <Seo
        title={`Page not found | ${brand.name}`}
        description="The page you requested is not available. Explore Startbiz business registrations and solutions."
        path="/404"
        noindex
      />
      <section className="section-wrap py-16 text-center sm:py-24">
        <p className="section-label">404</p>
        <h1 className="heading mt-2 text-3xl sm:text-4xl">Page not found</h1>
        <p className="body-muted mx-auto mt-3 max-w-md text-sm sm:text-base">
          This link may be outdated. Head home or find the right business
          registration for your needs.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary !text-white">
            Go to Home
          </Link>
          <Link to="/finder" className="btn-outline">
            Find My Business Requirements
          </Link>
        </div>
      </section>
    </div>
  );
}
