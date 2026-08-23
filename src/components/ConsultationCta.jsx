import { Link } from 'react-router-dom';
import { brand, getWhatsAppUrl } from '../data/content';

export default function ConsultationCta({
  title = 'Want Startbiz to verify this for your business?',
  text = 'Share your activity and we will help you separate what may apply from what can wait.',
  compact = false,
}) {
  return (
    <div
      className={`rounded-2xl bg-brand-primary text-white ${
        compact ? 'p-5 sm:p-6' : 'p-6 sm:p-8'
      }`}
    >
      <h3 className="font-display text-xl font-semibold sm:text-2xl">{title}</h3>
      <p className="mt-2 text-sm text-white/80 sm:text-base">{text}</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link to="/finder" className="btn-primary w-full sm:w-auto">
          Find What I Need
        </Link>
        <a href="#contact" className="btn-ghost-light w-full sm:w-auto">
          Free consultation
        </a>
        <a
          href={getWhatsAppUrl('I would like a free business consultation.')}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost-light w-full sm:w-auto"
        >
          WhatsApp {brand.shortName}
        </a>
      </div>
    </div>
  );
}
