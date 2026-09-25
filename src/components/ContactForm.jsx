import { brand, getWhatsAppUrl } from '../data/content';

const SOLUTION_MESSAGE = 'I need a business solutions';

export default function ContactForm() {
  const whatsappUrl = getWhatsAppUrl(SOLUTION_MESSAGE);
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&margin=12&data=${encodeURIComponent(whatsappUrl)}`;

  return (
    <section id="contact" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="section-label">Get in touch</p>
            <h2 className="heading mt-2 text-2xl sm:text-3xl lg:text-4xl">
              Get Your Business Solution
            </h2>
            <p className="body-muted mt-3 text-sm sm:text-base">
              Scan the WhatsApp QR or tap the button to message Startbiz. Share
              what you need help with — GST, company registration, Shop Act,
              MSME, FSSAI, trademark and more.
            </p>

            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              <a
                href={brand.phoneHref}
                className="flex items-center gap-3 rounded-xl border border-[#dbdbdb] bg-brand-surface px-4 py-3 transition hover:border-brand-accent"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-brand-primary">
                  📞
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-soft">
                    Call
                  </p>
                  <p className="truncate font-semibold text-brand-text">
                    {brand.phone}
                  </p>
                </div>
              </a>
              <a
                href={brand.emailHref}
                className="flex items-center gap-3 rounded-xl border border-[#dbdbdb] bg-brand-surface px-4 py-3 transition hover:border-brand-accent"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-brand-primary">
                  ✉
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-soft">
                    Email
                  </p>
                  <p className="truncate font-semibold text-brand-text">
                    {brand.email}
                  </p>
                </div>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-[#dbdbdb] bg-brand-surface px-4 py-3 transition hover:border-brand-accent"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-brand-primary">
                  💬
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-soft">
                    WhatsApp
                  </p>
                  <p className="font-semibold text-brand-text">{brand.phone}</p>
                </div>
              </a>
            </div>

            <div className="mt-6 rounded-xl border border-[#dbdbdb] p-4 sm:mt-8 sm:max-w-md">
              <p className="text-sm font-semibold text-brand-text">
                Business hours
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-brand-text-soft">
                {brand.hours.map((item) => (
                  <li key={item.day} className="flex justify-between gap-3">
                    <span>{item.day}</span>
                    <span className="shrink-0 font-medium text-brand-text">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-[#dbdbdb] bg-brand-surface p-5 text-center shadow-soft sm:p-7 lg:p-8">
            <h3 className="heading text-xl text-brand-text sm:text-2xl">
              Chat on WhatsApp
            </h3>
            <p className="mt-2 text-sm text-brand-text-soft">
              Scan this QR code to message {brand.phone}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 rounded-xl border border-[#dbdbdb] bg-white p-3 transition hover:border-brand-accent"
            >
              <img
                src={qrSrc}
                alt={`WhatsApp QR code for ${brand.phone}`}
                width={280}
                height={280}
                className="h-52 w-52 object-contain sm:h-64 sm:w-64"
              />
            </a>
            <p className="mt-5 max-w-xs text-sm font-semibold text-brand-text">
              &ldquo;{SOLUTION_MESSAGE}&rdquo;
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-5 w-full max-w-xs !text-white"
            >
              Open WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
