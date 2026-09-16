import { useState } from 'react';
import { brand, getWhatsAppUrl, whatsappHref } from '../data/content';

const helpOptions = [
  'Start a Business',
  'GST',
  'FSSAI',
  'Trademark',
  'Company Registration',
  'Shop Act',
  'MSME/Udyam',
  'GeM',
  'Import Export',
  'Not Sure',
];

const businessTypes = [
  'Food Business',
  'Shop / Retail',
  'Service Business',
  'Manufacturing',
  'Online Business',
  'Freelancer',
  'Trader / Wholesaler',
  'Professional',
  'Other',
];

const initialForm = {
  name: '',
  phone: '',
  businessType: '',
  needHelp: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const text = `Get Your Business Solution
Name: ${form.name}
Mobile: ${form.phone}
Business Type: ${form.businessType || 'Not specified'}
Need help with: ${form.needHelp || 'Not Sure'}`;
    window.open(getWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setForm(initialForm);
  };

  const fieldClass =
    'w-full rounded border border-[#dbdbdb] bg-white px-3 py-2.5 text-sm text-brand-text outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20';

  return (
    <section id="contact" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="section-label">Lead generation</p>
            <h2 className="heading mt-2 text-2xl sm:text-3xl lg:text-4xl">
              Get Your Business Solution
            </h2>
            <p className="body-muted mt-3 text-sm sm:text-base">
              Share what you need help with — GST, company registration, Shop
              Act, MSME, FSSAI, trademark, GeM or Import Export — and our team
              will guide you to the right path.
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
                href={whatsappHref}
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
                  <p className="font-semibold text-brand-text">Talk to Startbiz</p>
                </div>
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
              <div className="rounded-xl border border-[#dbdbdb] p-4">
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
              <div className="rounded-xl border border-[#dbdbdb] p-4 text-center">
                <p className="text-sm font-semibold text-brand-text">
                  Scan to pay
                </p>
                <img
                  src={brand.qr}
                  alt="Payment QR code"
                  className="mx-auto mt-3 h-32 w-32 rounded-lg object-contain sm:h-36 sm:w-36"
                />
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-[#dbdbdb] bg-brand-surface p-5 shadow-soft sm:p-7 lg:p-8"
          >
            <h3 className="heading text-xl sm:text-2xl">Get Your Business Solution</h3>
            <p className="mt-1 text-sm text-brand-text-soft">
              We typically respond within business hours.
            </p>

            {submitted && (
              <div className="mt-4 rounded-lg border border-brand-green/30 bg-[#def7cf] px-3 py-2 text-sm text-brand-dark">
                Thanks! Your enquiry has been recorded. We will contact you soon.
              </div>
            )}

            <div className="mt-5 grid gap-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-brand-text">
                  Name
                </span>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className={fieldClass}
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-brand-text">
                  Mobile Number
                </span>
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  className={fieldClass}
                  placeholder="10-digit mobile"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-brand-text">
                  Business Type
                </span>
                <select
                  required
                  name="businessType"
                  value={form.businessType}
                  onChange={onChange}
                  className={fieldClass}
                >
                  <option value="">Select business type</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-brand-text">
                  What do you need help with?
                </span>
                <select
                  required
                  name="needHelp"
                  value={form.needHelp}
                  onChange={onChange}
                  className={fieldClass}
                >
                  <option value="">Select an option</option>
                  {helpOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" className="btn-primary w-full">
                Get My Solution
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
