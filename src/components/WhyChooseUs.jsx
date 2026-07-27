import { brand, features, whatsappHref } from '../data/content';

const icons = [
  (
    <svg key="check" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  (
    <svg key="guide" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.684-.163c-.35.027-.69.07-1.019.128m3.703.035A48.7 48.7 0 0 1 12 7.5c2.652 0 5.208.36 7.64 1.018m-15.482 0A50.717 50.717 0 0 1 12 5.25c2.76 0 5.42.386 7.96 1.1" />
    </svg>
  ),
  (
    <svg key="fast" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  (
    <svg key="fee" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg>
  ),
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="section-wrap">
        <div className="max-w-2xl">
          <p className="section-label">Why choose us</p>
          <h2 className="heading mt-2 text-2xl sm:text-3xl lg:text-4xl">
            Why choose {brand.name} for business consulting
          </h2>
          <p className="body-muted mt-3 text-sm sm:text-base">
            Trusted business consulting services with transparent fees, startup
            consulting expertise, and reliable delivery across Maharashtra.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-xl border border-[#dbdbdb] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-muted text-brand-primary">
                {icons[index]}
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
            <div className="max-w-xl">
              <h3 className="font-display text-xl font-semibold sm:text-2xl lg:text-3xl">
                Need expert guidance?
              </h3>
              <p className="mt-2 text-sm text-white/80 sm:text-base">
                Get clarity on company registration, GST registration,
                trademark, and business compliance with support tailored to your
                goals.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Get Started
              </a>
              <a href={brand.phoneHref} className="btn-ghost-light w-full sm:w-auto">
                Call {brand.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
