import { useState } from 'react';
import { brand, whatsappHref } from '../data/content';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
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
            <p className="section-label">Contact us</p>
            <h2 className="heading mt-2 text-2xl sm:text-3xl lg:text-4xl">
              Have questions? Speak with a business consulting specialist
            </h2>
            <p className="body-muted mt-3 text-sm sm:text-base">
              Share your requirement and our team will guide you with the right
              company registration, GST, or compliance path.
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
                  <p className="font-semibold text-brand-text">
                    Chat with {brand.contactPerson}
                  </p>
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
            <h3 className="heading text-xl sm:text-2xl">Send us a message</h3>
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
                  Full name
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
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-brand-text">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-brand-text">
                    Phone
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
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-brand-text">
                  Service interested in
                </span>
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className={fieldClass}
                >
                  <option value="">Select a service</option>
                  <option>GST Registration</option>
                  <option>Private Limited Company</option>
                  <option>LLP Registration</option>
                  <option>Trademark Registration</option>
                  <option>MSME Registration</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-brand-text">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  className={`${fieldClass} resize-y`}
                  placeholder="Tell us briefly about your requirement"
                />
              </label>
              <button type="submit" className="btn-primary w-full">
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
