import { Link } from 'react-router-dom';
import { aboutText, brand, gallery } from '../data/content';

export default function About() {
  return (
    <section id="about" className="bg-brand-surface py-12 sm:py-16 lg:py-20">
      <div className="section-wrap">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <p className="section-label">About us</p>
            <h2 className="heading mt-2 text-2xl sm:text-3xl lg:text-4xl">
              Business consulting services that keep you compliant while you grow
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-text-soft sm:text-base">
              {aboutText}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-xl bg-white p-4 shadow-soft">
                <p className="font-display text-2xl font-semibold text-brand-accent">
                  500+
                </p>
                <p className="mt-1 text-sm text-brand-text-soft">
                  समाधानी ग्राहकांचा विश्वास
                </p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-soft">
                <p className="font-display text-2xl font-semibold text-brand-accent">
                  MH
                </p>
                <p className="mt-1 text-sm text-brand-text-soft">
                  संपूर्ण महाराष्ट्रात सेवा उपलब्ध
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-full bg-brand-accent/20 blur-2xl sm:-left-4 sm:-top-4 sm:h-24 sm:w-24" />
            <div className="absolute -bottom-4 -right-3 h-24 w-24 rounded-full bg-brand-primary/15 blur-2xl sm:-bottom-6 sm:-right-4 sm:h-28 sm:w-28" />
            <img
              src={brand.cover}
              alt={`${brand.name} business consulting services overview`}
              className="relative h-auto w-full rounded-2xl object-contain shadow-soft"
            />
          </div>
        </div>

        <div className="mt-12 sm:mt-14">
          <p className="section-label">Portfolio</p>
          <h3 className="heading mt-2 text-xl sm:text-2xl lg:text-3xl">
            Selected works
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5">
            {gallery.map((item) => (
              <Link
                key={item.title}
                to={`/services/${item.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#dbdbdb] bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-soft"
              >
                <div className="bg-brand-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 border-t border-[#dbdbdb] px-3 py-3 sm:px-4 sm:py-3.5">
                  <h4 className="text-sm font-semibold text-brand-text sm:text-base">
                    {item.title}
                  </h4>
                  <span className="shrink-0 text-sm font-semibold text-brand-primary transition group-hover:text-brand-accent">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
