export const journeySteps = [
  {
    n: '01',
    title: 'Tell Us Your Requirement',
    text: 'Share what you want to do — start, register, grow, protect your brand, or sell to government.',
  },
  {
    n: '02',
    title: 'We Understand Your Business',
    text: 'We look at your business type, owners and goals before recommending any filing.',
  },
  {
    n: '03',
    title: 'We Recommend the Right Solution',
    text: 'You get clarity on registrations, licences and options that fit your situation.',
  },
  {
    n: '04',
    title: 'We Handle the Registration Process',
    text: 'Documentation, application support and follow-up with the concerned authorities.',
  },
  {
    n: '05',
    title: 'You Receive Your Documents',
    text: 'Certificates and acknowledgements are shared with clear next-step guidance.',
  },
  {
    n: '06',
    title: 'Come Back When Your Business Grows',
    text: 'Return for GST compliance, trademark, GeM, IEC or expansion support as you scale.',
  },
];

export const intentPathways = [
  {
    id: 'start',
    accent: 'border-emerald-200 bg-emerald-50/60',
    title: "I'm Starting a Business",
    cta: 'Help Me Start',
    to: '/finder?stage=start',
    items: [
      { label: 'Proprietorship', slug: 'sole-proprietorship-firm-registration' },
      { label: 'Partnership', slug: 'partnership-firm-registration' },
      { label: 'LLP', slug: 'limited-liability-partnership-registration' },
      { label: 'Private Limited', slug: 'private-limited-company-registration' },
      { label: 'OPC', slug: 'one-person-company-registration' },
      { label: 'Shop Act', slug: 'shop-and-establishment-registration' },
      { label: 'Udyam', slug: 'udyam-msme-registration' },
      { label: 'GST', slug: 'gst-registration' },
    ],
  },
  {
    id: 'grow',
    accent: 'border-sky-200 bg-sky-50/60',
    title: 'I Already Have a Business',
    cta: 'Help Me Grow',
    to: '/finder?stage=running',
    items: [
      { label: 'GST', slug: 'gst-registration' },
      { label: 'Shop Act', slug: 'shop-and-establishment-registration' },
      { label: 'Udyam', slug: 'udyam-msme-registration' },
      { label: 'FSSAI', slug: 'fssai-registration' },
      { label: 'ISO', slug: 'iso-certification' },
      { label: 'Trademark', slug: 'trademark-registration' },
      { label: 'Import Export', slug: 'import-export-code-registration' },
      { label: 'GeM', slug: '/#contact' },
    ],
  },
  {
    id: 'brand',
    accent: 'border-orange-200 bg-orange-50/60',
    title: 'I Want to Protect My Brand',
    cta: 'Protect My Brand',
    to: '/category/intellectual-property',
    items: [
      { label: 'Trademark Registration', slug: 'trademark-registration' },
      { label: 'Brand Name Protection', slug: 'trademark-registration' },
      { label: 'Logo Protection', slug: 'trademark-registration' },
      { label: 'Business Identity', slug: '/category/intellectual-property' },
    ],
  },
  {
    id: 'government',
    accent: 'border-violet-200 bg-violet-50/60',
    title: 'I Want to Sell to Government',
    cta: 'Explore Government Business',
    to: '/#contact',
    items: [
      { label: 'GeM Registration', slug: '/#contact' },
      { label: 'Import Export', slug: 'import-export-code-registration' },
      { label: 'Business registrations', slug: '/finder' },
      { label: 'Required documentation', slug: '/#contact' },
    ],
  },
];

export const solutionBusinessTypes = [
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

export const solutionGoals = [
  'Start a Business',
  'Register My Existing Business',
  'Sell Online',
  'Get Government Contracts',
  'Protect My Brand',
  'Get Food Licence',
  'Make My Business Compliant',
];

export const solutionRecommendations = {
  'Start a Business': [
    { label: 'Company / firm structure', slug: '/category/start-business' },
    { label: 'GST Registration', slug: 'gst-registration' },
    { label: 'Udyam MSME', slug: 'udyam-msme-registration' },
    { label: 'Shop Act', slug: 'shop-and-establishment-registration' },
  ],
  'Register My Existing Business': [
    { label: 'GST Registration', slug: 'gst-registration' },
    { label: 'Shop Act', slug: 'shop-and-establishment-registration' },
    { label: 'Udyam MSME', slug: 'udyam-msme-registration' },
    { label: 'Structure guidance', slug: '/compare' },
  ],
  'Sell Online': [
    { label: 'GST Registration', slug: 'gst-registration' },
    { label: 'Trademark', slug: 'trademark-registration' },
    { label: 'Udyam MSME', slug: 'udyam-msme-registration' },
    { label: 'IEC (if exporting)', slug: 'import-export-code-registration' },
  ],
  'Get Government Contracts': [
    { label: 'GST Registration', slug: 'gst-registration' },
    { label: 'Udyam MSME', slug: 'udyam-msme-registration' },
    { label: 'Import Export Code', slug: 'import-export-code-registration' },
    { label: 'GeM / documentation help', slug: '/#contact' },
  ],
  'Protect My Brand': [
    { label: 'Trademark Registration', slug: 'trademark-registration' },
    { label: 'Brand & logo protection', slug: '/category/intellectual-property' },
  ],
  'Get Food Licence': [
    { label: 'FSSAI Registration', slug: 'fssai-registration' },
    { label: 'GST Registration', slug: 'gst-registration' },
    { label: 'Shop Act', slug: 'shop-and-establishment-registration' },
    { label: 'Udyam MSME', slug: 'udyam-msme-registration' },
  ],
  'Make My Business Compliant': [
    { label: 'GST Registration', slug: 'gst-registration' },
    { label: 'Shop Act', slug: 'shop-and-establishment-registration' },
    { label: 'Udyam MSME', slug: 'udyam-msme-registration' },
    { label: 'Talk to Startbiz', slug: '/#contact' },
  ],
};

export const serviceSolutionGroups = [
  {
    title: 'Start Your Business',
    text: 'Proprietorship • Partnership • LLP • Pvt Ltd • OPC',
    to: '/category/start-business',
  },
  {
    title: 'Licences & Registrations',
    text: 'GST • Shop Act • Udyam • FSSAI',
    to: '/category/registrations-filings',
  },
  {
    title: 'Protect Your Brand',
    text: 'Trademark • ISO',
    to: '/category/intellectual-property',
  },
  {
    title: 'Expand Your Business',
    text: 'Import Export • GeM',
    to: '/category/grow-your-business',
  },
];

export const askStartbizExamples = [
  'I want to start a cloud kitchen. What registrations do I need?',
  'I want to sell products online. What should I register?',
  'I want to start a partnership business with my friend.',
  'I want to register my brand.',
  'I want to sell products to government departments.',
];

export const journeyEntryPoints = [
  {
    title: 'I have a business idea',
    action: 'Help me start',
    to: '/finder?stage=idea',
  },
  {
    title: "I'm starting my business",
    action: 'Help me register',
    to: '/finder?stage=start',
  },
  {
    title: 'My business is already running',
    action: 'Help me become compliant',
    to: '/finder?stage=running',
  },
  {
    title: 'I want to grow',
    action: 'Help me scale',
    to: '/industries',
  },
  {
    title: "I don't know what I need",
    action: 'Guide me',
    to: '/finder',
  },
];

export const structureGuide = [
  {
    ifYou: 'Individual / small local business',
    consider: 'Proprietorship',
    slug: 'sole-proprietorship-firm-registration',
  },
  {
    ifYou: 'Two or more partners',
    consider: 'Partnership / LLP',
    slug: 'limited-liability-partnership-registration',
  },
  {
    ifYou: 'Single founder wanting a corporate structure',
    consider: 'OPC',
    slug: 'one-person-company-registration',
  },
  {
    ifYou: 'Multiple founders / growth-oriented company',
    consider: 'Private Limited',
    slug: 'private-limited-company-registration',
  },
  {
    ifYou: 'Professional service business',
    consider: 'Depends on structure & requirements',
    slug: '/compare',
  },
  {
    ifYou: 'Startup seeking investors',
    consider: 'Often Private Limited (subject to needs)',
    slug: 'private-limited-company-registration',
  },
];

export const structureComparison = {
  headers: ['Feature', 'Proprietorship', 'LLP', 'Pvt Ltd'],
  rows: [
    ['Owners', '1', '2+', '2+ generally'],
    ['Separate legal entity', 'No', 'Yes', 'Yes'],
    ['Liability protection', 'Limited / none', 'Yes', 'Yes'],
    ['Compliance load', 'Lower', 'Moderate', 'Higher'],
    [
      'Suitable for',
      'Small businesses',
      'Partners / professionals',
      'Growth-oriented businesses',
    ],
    ['Funding / investment', 'Limited', 'Limited', 'Better suited'],
  ],
  slugs: [
    'sole-proprietorship-firm-registration',
    'limited-liability-partnership-registration',
    'private-limited-company-registration',
  ],
};

export const customerProcess = [
  {
    title: 'Tell us',
    text: 'Share what you do, who owns it, and where you sell.',
  },
  {
    title: 'We analyse',
    text: 'We map structure, registrations and licences that may apply.',
  },
  {
    title: 'We recommend',
    text: 'You see what is essential, useful, or only situation-dependent.',
  },
  {
    title: 'We process',
    text: 'Documentation, filing and follow-up with the relevant authorities.',
  },
  {
    title: 'We support',
    text: 'Post-registration guidance so compliance does not stop at the certificate.',
  },
];

export const whyDifferent = [
  'We first understand your business.',
  'We explain what you may actually need.',
  'We explain why it matters for your situation.',
  'We help you choose the appropriate option.',
  'We handle documentation and application support.',
  'We help you understand ongoing compliance.',
  'We support the business beyond a single registration.',
];

export const siteFaqs = [
  {
    q: 'How do I know which registration my business needs?',
    a: 'Start from what you do, how many owners you have, where you sell, and your expected turnover. Use Find My Business Solution for a first roadmap, then let Startbiz verify — requirements vary by activity and location.',
  },
  {
    q: 'Is GST mandatory for every business?',
    a: 'No. GST depends on turnover thresholds, the nature of supply, interstate sales, e-commerce and other conditions. Thresholds also differ for goods and services. Check applicability instead of assuming every shop needs GST on day one.',
  },
  {
    q: 'Is Udyam the same as GST?',
    a: 'No. Udyam (MSME) is a separate registration that may help eligible small businesses. It does not replace GST, FSSAI, Shop Act or company incorporation.',
  },
  {
    q: 'What is the difference between a company name and a trademark?',
    a: 'Incorporation or a shop name records your entity. A trademark is a separate process that can protect the brand you use with customers. One does not automatically give you the other.',
  },
  {
    q: 'Proprietorship, LLP or Private Limited — which should I pick?',
    a: 'A local one-person activity often starts as a proprietorship. Partners frequently compare partnership and LLP. Multiple founders or investors often consider Private Limited. Compliance and liability differ — compare structures before you file.',
  },
  {
    q: 'Do you only sell registrations?',
    a: 'No. Tell us your requirement and we help you find the right registration, licence or business solution — then support filing. You should not register what you do not need, and you should not skip what you do.',
  },
  {
    q: 'What fees should I expect?',
    a: 'Government fees are paid to the concerned department. Professional assistance fees are shared after we understand your requirement. We do not treat a low headline price as the decision.',
  },
  {
    q: 'Does Startbiz decide legally what I must take?',
    a: 'No. We provide practical guidance and filing support. Applicable conditions may vary. For a determination on your facts, use a consultation.',
  },
];

export const packages = [
  {
    slug: 'starter-business',
    title: 'Starter Business',
    forWho: 'Sole founders and small local businesses',
    includes: [
      'Sole proprietorship setup guidance',
      'Udyam',
      'GST applicability check',
      'Shop Act where relevant',
      '1-on-1 consultation',
    ],
  },
  {
    slug: 'food-business-starter',
    title: 'Food Business Starter',
    forWho: 'Restaurants, cafés, cloud kitchens and packaged food brands',
    includes: [
      'Entity structure guidance',
      'FSSAI licensing path',
      'GST check',
      'Udyam',
      'Trademark consultation',
    ],
  },
  {
    slug: 'startup-growth',
    title: 'Startup Growth',
    forWho: 'Founders planning LLP or Private Limited',
    includes: [
      'Pvt Ltd / LLP incorporation',
      'GST',
      'Udyam',
      'Trademark',
      'Initial compliance calendar',
    ],
  },
  {
    slug: 'ecommerce-setup',
    title: 'E-Commerce Setup',
    forWho: 'Online and marketplace sellers',
    includes: [
      'Entity structure',
      'GST',
      'Udyam',
      'Trademark',
      'Marketplace seller compliance notes',
      'IEC where applicable',
    ],
  },
];

export const pricingTransparency = {
  included: [
    'Requirement discussion and applicability check',
    'Document checklist for your case',
    'Application preparation and filing support',
    'Status follow-up during government processing',
    'Certificate sharing and next-step guidance',
  ],
  notIncluded: [
    'Government / department fees (paid to the authority)',
    'Stamp duty, notary or DSC costs where they apply',
    'Rush or department-side delays outside our control',
    'Separate licences that are not part of the selected service',
  ],
  feesNote:
    'Professional assistance fees are quoted after we understand your business. Government fees are extra and paid to the relevant authority. Timelines depend on department processing.',
};

export const gstBenefitsPreview = [
  'Enables legally applicable GST invoicing',
  'Helps businesses comply with GST requirements',
  'Can support eligible input tax credit claims',
  'Important for certain interstate, e-commerce or B2B situations',
  'Improves business credibility with many B2B customers',
];
