export const industries = [
  {
    slug: 'restaurants-cafes',
    title: 'Restaurants & Cafés',
    icon: '🍴',
    summary:
      'Food service needs a structure, FSSAI, and often GST, Shop Act and local licences — not a random stack of certificates.',
    typical: [
      'Business structure (proprietorship / partnership / company)',
      'FSSAI licence (category depends on turnover and activity)',
      'GST — subject to applicable conditions',
      'Shop & Establishment',
      'Udyam',
      'Trademark for the outlet brand',
    ],
    related: [
      'fssai-registration',
      'gst-registration',
      'shop-and-establishment-registration',
      'udyam-msme-registration',
      'trademark-registration',
    ],
    packageSlug: 'food-business-starter',
  },
  {
    slug: 'cloud-kitchens',
    title: 'Cloud Kitchens',
    icon: '🍱',
    summary:
      'Delivery-led kitchens still need food licensing and a clear entity. Marketplace listing does not replace FSSAI or GST checks.',
    typical: [
      'Entity structure',
      'FSSAI',
      'GST applicability (especially with aggregators)',
      'Shop Act for the kitchen premise',
      'Udyam',
      'Brand / trademark',
    ],
    related: [
      'fssai-registration',
      'gst-registration',
      'shop-and-establishment-registration',
      'trademark-registration',
    ],
    packageSlug: 'food-business-starter',
  },
  {
    slug: 'food-manufacturers',
    title: 'Food Manufacturers & Packaged Brands',
    icon: '🏭',
    summary:
      'Packaged food usually needs the right FSSAI category, labelling awareness, and a structure that can scale with distributors.',
    typical: [
      'Company / firm structure',
      'FSSAI state or central licence (as applicable)',
      'GST',
      'Udyam',
      'Trademark for the product brand',
      'IEC if you will export',
    ],
    related: [
      'fssai-registration',
      'gst-registration',
      'private-limited-company-registration',
      'import-export-code-registration',
      'trademark-registration',
    ],
    packageSlug: 'food-business-starter',
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce & Online Marketplaces',
    icon: '🛒',
    summary:
      'Selling on Amazon, Flipkart or your own site often changes GST and brand-protection priorities compared with a purely local shop.',
    typical: [
      'Entity structure',
      'GST (marketplace and interstate supply often make this important)',
      'Udyam',
      'Trademark',
      'IEC where export is involved',
      'Current account and marketplace seller KYC documents',
    ],
    related: [
      'gst-registration',
      'udyam-msme-registration',
      'trademark-registration',
      'import-export-code-registration',
      'private-limited-company-registration',
    ],
    packageSlug: 'ecommerce-setup',
  },
  {
    slug: 'freelancers',
    title: 'Freelancers & Professional Consultants',
    icon: '💼',
    summary:
      'Independent professionals should not copy a factory’s registration list. Structure, GST and tax filings depend on clients, turnover and location.',
    typical: [
      'Proprietorship, LLP or company — based on owners and clients',
      'GST check (service thresholds and B2B invoicing)',
      'Udyam if eligible',
      'ITR filing',
      'Trademark if you operate under a brand',
    ],
    related: [
      'sole-proprietorship-firm-registration',
      'limited-liability-partnership-registration',
      'gst-registration',
      'itr-filing',
      'trademark-registration',
    ],
    packageSlug: 'starter-business',
  },
  {
    slug: 'construction',
    title: 'Construction & Infrastructure',
    icon: '🏗️',
    summary:
      'Contractors often need a formal entity, GST for B2B work, and project-specific licences rather than a generic “startup pack”.',
    typical: [
      'Firm or company structure',
      'GST',
      'Udyam (often relevant for tenders)',
      'Shop Act / local registrations as applicable',
      'Industry-specific licences where the work requires them',
    ],
    related: [
      'private-limited-company-registration',
      'gst-registration',
      'udyam-msme-registration',
      'iso-certification',
    ],
    packageSlug: 'startup-growth',
  },
];

export function getIndustryBySlug(slug) {
  return industries.find((item) => item.slug === slug);
}
