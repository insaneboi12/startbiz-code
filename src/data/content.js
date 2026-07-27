import {
  allServices as catalogAll,
  getCatalogServiceBySlug,
  getRelatedByCategory,
} from './serviceCatalog';

export {
  allServices,
  featuredServices,
  searchServices,
  serviceCategories,
  serviceCount,
  getCatalogServiceBySlug,
  megaMenus,
  getMegaMenuById,
  getServicesByCategoryId,
  getRelatedByCategory,
  slugify,
} from './serviceCatalog';

export const brand = {
  name: 'startbiz.in',
  shortName: 'StartBiz',
  domain: 'startbiz.in',
  tagline: 'Business Consulting Services',
  seoTitle:
    'startbiz.in | Business Consulting Services — Company Registration, GST & Compliance',
  seoDescription:
    'startbiz.in offers business consulting services in India for company registration, GST registration, MSME, trademark, FSSAI, Shop Act, LLP and compliance across Maharashtra.',
  keywords: [
    'business consulting services',
    'business consulting India',
    'startup consulting',
    'company registration',
    'GST registration',
    'MSME registration',
    'trademark registration',
    'private limited company registration',
    'LLP registration',
    'FSSAI food license',
    'Shop Act registration',
    'business compliance Maharashtra',
    'startbiz.in',
  ],
  phone: '+91 75192 21199',
  phoneHref: 'tel:+917519221199',
  whatsapp: '917519221199',
  whatsappMessage: 'Get Started',
  email: 'starbiz.in@gmail.com',
  emailHref: 'mailto:starbiz.in@gmail.com',
  contactPerson: 'Amol Ghoderao',
  logo: '/images/logo-transparent.png',
  logoDark: '/images/logo-transparent.png',
  cover: '/images/cover.webp',
  qr: '/images/qr.webp',
  texture: '/textures/asfalt-dark.png',
  textureAlt: '/textures/debut-dark.png',
  textureLight: '/textures/light-paper-fibers.png',
  hours: [
    { day: 'Monday', time: '09:00 – 18:00' },
    { day: 'Tuesday', time: '09:00 – 18:00' },
    { day: 'Wednesday', time: '09:00 – 18:00' },
    { day: 'Thursday', time: '09:00 – 18:00' },
    { day: 'Friday', time: '09:00 – 18:00' },
    { day: 'Saturday', time: '09:00 – 18:00' },
    { day: 'Sunday', time: 'Closed' },
  ],
};

export function getWhatsAppUrl(message = brand.whatsappMessage) {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const whatsappHref = getWhatsAppUrl();


export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/#about' },
  { label: 'Contact Us', to: '/#contact' },
];

export const features = [
  {
    title: '100% Hassle-Free Process',
    description:
      'End-to-end business consulting services with clear steps and documentation support for company registration and compliance.',
  },
  {
    title: 'Expert Startup Consulting',
    description:
      'Practical guidance from professionals who understand CSC, MSME, and startup consulting needs across India.',
  },
  {
    title: 'Fast & Reliable Service',
    description:
      'Quick turnaround on GST registration, trademark filing, and licensing so you can focus on growing your business.',
  },
  {
    title: 'Affordable & Transparent Fees',
    description:
      'Clear pricing for business consulting services with no hidden charges before you get started.',
  },
];

export const trustStats = [
  { value: '500+', label: 'Satisfied Customers' },
  { value: '100%', label: 'Hassle-Free Process' },
  { value: 'MH', label: 'Pan-Maharashtra Service' },
  { value: '110+', label: 'Business Consulting Services' },
];

export const aboutText = `Welcome to startbiz.in — your trusted partner for business consulting services in India. We empower entrepreneurs, startups, and MSMEs with end-to-end support for company registration, GST registration, trademark registration, Shop Act, FSSAI, LLP, and business compliance. From licensing to tax filing, our expert team guides you through every step so you can focus on growth. Whether you need startup consulting, MSME registration, or ongoing compliance support across Maharashtra, startbiz.in makes starting and managing your business simpler, faster, and more reliable.`;

export const services = [
  {
    id: 1,
    slug: 'gst-registration',
    title: 'GST Registration',
    image: '/images/services/service-1.webp',
    summary:
      'GST registration is essential for businesses operating in India. startbiz.in business consulting services help you complete GST registration quickly, accurately, and with full documentation support.',
    points: [
      'Expert guidance through the registration process',
      'Quick and hassle-free service',
      'Assistance with required documentation',
      'Support for GST compliance and filing',
      'Affordable pricing for all business sizes',
    ],
  },
  {
    id: 2,
    slug: 'llp-registration',
    title: 'LLP Registration',
    image: '/images/services/service-2.webp',
    summary:
      'LLP registration made easy with startbiz.in. Our business consulting services guide you through Limited Liability Partnership registration with full compliance support.',
    points: [
      'Seamless online registration process',
      'Expert assistance in documentation',
      'Quick turnaround time for approvals',
      'Cost-effective service packages',
      'Post-registration support and guidance',
    ],
  },
  {
    id: 3,
    slug: 'shop-act-registration',
    title: 'Shop Act Registration',
    image: '/images/services/service-3.webp',
    summary:
      'Shop Act registration is required for businesses to operate legally in their state. startbiz.in simplifies Shop Act registration with expert documentation and compliance guidance.',
    points: [
      'Quick and easy registration process',
      'Assistance with required documentation',
      'Guidance on legal compliance and regulations',
      'Dedicated support from experienced professionals',
      'Affordable pricing for all business types',
    ],
  },
  {
    id: 4,
    slug: 'fssai-food-license',
    title: 'FSSAI Food License',
    image: '/images/services/service-4.webp',
    summary:
      'FSSAI food license is essential for food businesses in India. Get fast FSSAI registration and renewal support through startbiz.in business consulting services.',
    points: [
      'Expert guidance throughout the application process',
      'Quick processing time for license acquisition',
      'Assistance with documentation and compliance',
      'Affordable service fees for small and large businesses',
      'Ongoing support for license renewal and updates',
    ],
  },
  {
    id: 5,
    slug: 'partnership-firm-registration',
    title: 'Partnership Firm Registration',
    image: '/images/services/service-5.webp',
    summary:
      'Partnership firm registration establishes a formal business structure. startbiz.in handles partnership registration paperwork and legal compliance for entrepreneurs across India.',
    points: [
      'Expert guidance through the registration process',
      'Assistance with required documentation and compliance',
      'Quick turnaround time for registration completion',
      'Affordable pricing tailored to your business needs',
      'Ongoing support for future legal requirements',
    ],
  },
  {
    id: 6,
    slug: 'msme-registration',
    title: 'MSME Registration',
    image: '/images/services/service-6.webp',
    summary:
      'MSME registration helps small and medium enterprises unlock government schemes and benefits. startbiz.in streamlines MSME registration for startups and growing businesses across India.',
    points: [
      'Quick and hassle-free registration process',
      'Access to government schemes and financial support',
      'Eligibility for subsidies and grants',
      'Enhanced credibility and visibility in the market',
      'Expert assistance and guidance throughout the process',
    ],
  },
  {
    id: 7,
    slug: 'one-person-company-registration',
    title: 'One Person Company Registration',
    image: '/images/services/service-7.webp',
    summary:
      'One Person Company (OPC) registration lets sole founders enjoy limited liability. startbiz.in provides startup consulting for fast, compliant OPC registration in India.',
    points: [
      'Quick and hassle-free registration process',
      'Expert assistance for all required documentation',
      'Compliance with regulatory norms and guidelines',
      'Affordable packages tailored for individual entrepreneurs',
      'Ongoing support for business growth and management',
    ],
  },
  {
    id: 8,
    slug: 'private-limited-company-registration',
    title: 'Private Limited Company Registration',
    image: '/images/services/service-8.webp',
    summary:
      'Private limited company registration made simple with startbiz.in. Our business consulting experts handle documentation, compliance, and filings so you can launch faster.',
    points: [
      'Quick and hassle-free registration process',
      'Expert guidance on legal requirements',
      'Assistance with required documentation',
      'Support for obtaining necessary licenses',
      'Dedicated customer service throughout the process',
    ],
  },
  {
    id: 9,
    slug: 'trademark-registration',
    title: 'Trademark Registration',
    image: '/images/services/service-9.webp',
    summary:
      'Trademark registration protects your business name, logo, brand name, and tagline. Get expert trademark registration support from startbiz.in business consulting services.',
    about:
      'Trademark म्हणजे काय? Trademark (TM) हे तुमच्या व्यवसायाचे नाव, लोगो, ब्रँड नाव, टॅगलाइन किंवा चिन्ह यांचे कायदेशीर संरक्षण करते. त्यामुळे इतर कोणीही तुमचा ब्रँड वापरू शकत नाही.',
    points: [
      'Brand Protection',
      'Exclusive Legal Rights',
      'Brand Value वाढते',
      'Copying पासून संरक्षण',
      'Customer Trust वाढतो',
      '® Symbol वापरण्याचा अधिकार',
      'Business Expansion साठी उपयुक्त',
    ],
    whoCanApply: [
      'Proprietorship Firm',
      'Partnership Firm',
      'LLP',
      'Private Limited Company',
      'One Person Company (OPC)',
      'Startups',
      'Individuals',
    ],
    documents: [
      'PAN Card',
      'Aadhaar Card',
      'Logo (असल्यास)',
      'Business Registration Proof',
      'Address Proof',
      'MSME Certificate (असल्यास)',
    ],
    process: [
      'Trademark Search',
      'Application Filing',
      'Government Examination',
      'Objection Reply (असल्यास)',
      'Journal Publication',
      'Trademark Registration Certificate',
    ],
  },
  {
    id: 10,
    slug: 'iso-certification',
    title: 'ISO Certification',
    image: '/images/services/service-10.webp',
    summary:
      'ISO certification demonstrates your business quality and reliability. startbiz.in helps startups and MSMEs obtain ISO certification for tenders, trust, and market growth.',
    about:
      'ISO Certification म्हणजे काय? ISO (International Organization for Standardization) Certification हे तुमच्या व्यवसायाच्या गुणवत्ता, कार्यपद्धती आणि विश्वासार्हतेचे आंतरराष्ट्रीय प्रमाणपत्र आहे. यामुळे ग्राहकांचा विश्वास वाढतो आणि व्यवसायाची प्रतिमा मजबूत होते.',
    points: [
      'International Recognition',
      'Customer Trust वाढतो',
      'Business Credibility वाढते',
      'Government & Private Tenders साठी उपयुक्त',
      'Better Quality Management',
      'Risk Management सुधारते',
      'Market Expansion साठी मदत',
      'Competitive Advantage मिळतो',
    ],
    types: [
      'ISO 9001 – Quality Management System',
      'ISO 14001 – Environmental Management',
      'ISO 45001 – Occupational Health & Safety',
      'ISO 22000 – Food Safety Management',
      'ISO 27001 – Information Security Management',
    ],
    whoCanApply: [
      'Startups',
      'MSMEs',
      'Manufacturers',
      'Traders',
      'Service Providers',
      'Educational Institutes',
      'Hospitals & Clinics',
      'Restaurants & Food Businesses',
    ],
    documents: [
      'PAN Card',
      'Aadhaar Card',
      'Business Registration Proof',
      'GST Certificate (असल्यास)',
      'Address Proof',
      'Company Profile / Business Details',
    ],
    process: [
      'Application Submission',
      'Document Verification',
      'Audit / Assessment',
      'Compliance Review',
      'Certificate Approval',
      'ISO Certificate Issued',
    ],
  },
  {
    id: 11,
    slug: 'import-export-registration',
    title: 'Import Export Registration (IEC)',
    image: '/images/services/service-11.webp',
    summary:
      'IEC (Import Export Code) is required to import or export from India. Get Import Export registration with DGFT filing support from startbiz.in business consulting experts.',
    about:
      'IEC (Import Export Code) म्हणजे काय? IEC (Import Export Code) हा 10 अंकी युनिक कोड आहे जो भारतातून वस्तू किंवा सेवा Import (आयात) आणि Export (निर्यात) करण्यासाठी आवश्यक असतो. हा कोड DGFT (Directorate General of Foreign Trade) द्वारे जारी केला जातो.',
    points: [
      'जागतिक बाजारपेठेत व्यवसाय विस्तार',
      'Import & Export करण्याचा कायदेशीर अधिकार',
      'आंतरराष्ट्रीय ग्राहक मिळवण्याची संधी',
      'Government Export Benefits मिळतात',
      'Online Selling (Amazon, Alibaba, eBay) साठी उपयुक्त',
      'Business Credibility वाढते',
      'Foreign Currency Transactions साठी आवश्यक',
    ],
    whoCanApply: [
      'Proprietorship Firm',
      'Partnership Firm',
      'LLP',
      'Private Limited Company',
      'One Person Company (OPC)',
      'Manufacturers',
      'Traders',
      'Exporters & Importers',
    ],
    documents: [
      'PAN Card',
      'Aadhaar Card',
      'Passport Size Photo',
      'Business Address Proof',
      'Bank Cancelled Cheque / Bank Certificate',
      'GST Certificate (असल्यास)',
    ],
    process: [
      'Document Collection',
      'Application Filing',
      'DGFT Verification',
      'IEC Code Approval',
      'Certificate Issued',
    ],
    whyNeeded: [
      'International Business साठी',
      'Import-Export Operations साठी',
      'Foreign Payments Receive करण्यासाठी',
      'Business Growth आणि Global Expansion साठी',
    ],
  },
];

export const gallery = [
  {
    title: 'GST Registration',
    image: '/images/gallery/gallery-2.webp',
    slug: 'gst-registration',
  },
  {
    title: 'LLP Registration',
    image: '/images/gallery/gallery-3.webp',
    slug: 'llp-registration',
  },
  {
    title: 'Shop Act Registration',
    image: '/images/gallery/gallery-4.webp',
    slug: 'shop-act-registration',
  },
  {
    title: 'FSSAI Food License',
    image: '/images/gallery/gallery-5.webp',
    slug: 'fssai-food-license',
  },
  {
    title: 'Partnership Firm',
    image: '/images/gallery/gallery-6.webp',
    slug: 'partnership-firm-registration',
  },
  {
    title: 'MSME Registration',
    image: '/images/gallery/gallery-7.webp',
    slug: 'msme-registration',
  },
  {
    title: 'OPC Registration',
    image: '/images/gallery/gallery-8.webp',
    slug: 'one-person-company-registration',
  },
  {
    title: 'Private Limited Company',
    image: '/images/gallery/gallery-9.webp',
    slug: 'private-limited-company-registration',
  },
];

export function getServiceBySlug(slug) {
  const catalog = getCatalogServiceBySlug(slug);
  const detailed = services.find((service) => service.slug === slug);
  if (detailed && catalog) {
    return {
      ...catalog,
      ...detailed,
      category: catalog.category || detailed.category,
      categoryId: catalog.categoryId,
      group: catalog.group,
      seoTitle: catalog.seoTitle,
      seoDescription: catalog.seoDescription,
      keywords: catalog.keywords,
    };
  }
  return detailed || catalog;
}

export function getRelatedServices(slug, limit = 3) {
  const fromCategory = getRelatedByCategory(slug, limit);
  if (fromCategory.length) return fromCategory;

  const related = services.filter((service) => service.slug !== slug);
  if (related.length >= limit) return related.slice(0, limit);

  const extra = catalogAll
    .filter(
      (s) =>
        !s.aliasOf &&
        s.slug !== slug &&
        !related.some((r) => r.slug === s.slug)
    )
    .slice(0, limit - related.length);
  return [...related, ...extra].slice(0, limit);
}
