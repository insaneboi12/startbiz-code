import { brand, features, getWhatsAppUrl } from '../data/content';

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="section-wrap">
        <div className="max-w-2xl">
          <p className="section-label">Why Startbiz?</p>
          <h2 className="heading mt-2 text-2xl sm:text-3xl lg:text-4xl">
            Why Business Owners Choose Startbiz
          </h2>
          <p className="body-muted mt-3 text-sm sm:text-base">
            Simple guidance, personalised solutions and transparent support for
            business registrations and licences across Maharashtra.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-[#dbdbdb] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-6"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-muted text-sm font-bold text-brand-primary">
                ✓
              </div>
              <h3 className="text-base font-semibold text-brand-text sm:text-lg">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-text-soft">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl bg-brand-primary px-5 py-7 text-white sm:mt-10 sm:px-8 sm:py-9 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-xl text-white">
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                Need expert guidance?
              </h3>
              <p className="mt-2 text-sm text-white sm:text-base">
                Get clarity on company registration, GST registration, trademark,
                Shop Act, FSSAI and business compliance — tailored to your goals.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#contact"
                className="btn-primary w-full !text-white sm:w-auto"
              >
                Get My Business Solution
              </a>
              <a
                href={getWhatsAppUrl(brand.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-light w-full !text-white sm:w-auto"
              >
                Talk to Startbiz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
