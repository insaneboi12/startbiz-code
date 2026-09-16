import { brand, getWhatsAppUrl } from '../data/content';

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl(brand.whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-3 text-white shadow-lg transition hover:scale-105 print:hidden sm:bottom-6 sm:right-6 sm:px-4"
      aria-label="Talk to Startbiz on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.47 1.34 4.98L2 22l5.2-1.36A9.94 9.94 0 0 0 12.04 22c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.79 14.24c-.24.68-1.4 1.26-1.93 1.34-.49.07-1.12.1-1.81-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.4-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.26-.29.58-.36.77-.36h.56c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.32.02.51-.1.2-.15.32-.3.49-.14.17-.3.38-.43.51-.14.14-.29.3-.12.5.16.36.66 1.1 1.42 1.78.98.88 1.8 1.15 2.16 1.28.36.13.56.11.76-.07.2-.17.86-.99 1.09-1.33.23-.34.46-.28.77-.17.31.11 1.98.93 2.32 1.1.34.17.57.26.65.4.08.15.08.86-.16 1.54Z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">Talk to Startbiz</span>
    </a>
  );
}
