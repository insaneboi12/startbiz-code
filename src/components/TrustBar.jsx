import { trustStats } from '../data/content';

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-6 sm:-mt-8">
      <div className="section-wrap">
        <div className="grid grid-cols-2 rounded-xl bg-white shadow-soft sm:grid-cols-4">
          {trustStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-3 py-5 text-center sm:px-4 sm:py-6 ${
                index === 0 || index === 2
                  ? 'border-r border-brand-muted'
                  : ''
              } ${index < 2 ? 'border-b border-brand-muted sm:border-b-0' : ''} ${
                index < 3 ? 'sm:border-r sm:border-brand-muted' : ''
              }`}
            >
              <p className="font-display text-2xl font-semibold text-brand-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-brand-text-soft sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
