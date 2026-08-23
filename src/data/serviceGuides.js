export const STANDARD_PROCESS = [
  'Consultation',
  'Document collection',
  'Application filing',
  'Government processing',
  'Certificate / approval',
  'Post-registration guidance',
];

export const pricingNote =
  'Professional assistance fees are quoted after we understand your requirement. Government fees are extra and paid to the concerned authority. Timelines depend on department processing.';

export const serviceGuides = {
  'gst-registration': {
    whatIsIt:
      'GST is India’s goods and services tax system. Registration lets an eligible business collect and pay GST and issue GST invoices where the law requires it.',
    whoNeedsIt: [
      'Businesses whose turnover may cross the applicable threshold (thresholds differ for goods and services)',
      'Many interstate suppliers',
      'Many e-commerce / marketplace sellers',
      'B2B suppliers whose customers ask for GST invoices',
    ],
    whyImportant:
      'GST is a tax compliance registration. It can affect invoicing, input tax credit (where eligible) and how you sell across states or online. It is not the same as company incorporation or Udyam.',
    benefits: [
      'Enables legally applicable GST invoicing',
      'Helps businesses comply with GST rules',
      'Can support eligible input tax credit claims',
      'Often expected in interstate, e-commerce or B2B situations',
      'Can improve credibility with many B2B customers',
    ],
    ifYouDont:
      'If GST applies and you do not register, you may not be able to issue valid GST invoices, claim eligible credit, or sell through certain channels. Applicability depends on your facts — not every small local activity needs GST on day one.',
    nextStep: 'Check whether GST is likely to apply to your supplies, turnover and sales channel before you apply.',
  },
  'udyam-msme-registration': {
    whatIsIt:
      'Udyam is the current MSME registration. It identifies eligible micro, small or medium enterprises for certain schemes, tenders and banking processes.',
    whoNeedsIt: [
      'Eligible manufacturers, traders and service MSMEs',
      'Businesses that want to be identified as MSME for schemes or tenders',
    ],
    whyImportant:
      'Udyam can help eligible businesses access MSME-linked processes. It does not replace GST, FSSAI, Shop Act or incorporation.',
    benefits: [
      'MSME identity for eligible enterprises',
      'Useful in some tenders and government processes',
      'Often requested in banking conversations',
      'Low-friction registration compared with incorporation',
    ],
    ifYouDont:
      'You may miss MSME-linked benefits or tender eligibility. You do not automatically become non-compliant on GST or licences just because you skipped Udyam.',
    nextStep: 'Confirm MSME eligibility, then decide if Udyam is useful for your plans.',
  },
  'fssai-registration': {
    whatIsIt:
      'FSSAI registration or licence is the food-safety approval most food businesses in India need. Basic registration, state licence and central licence are different categories.',
    whoNeedsIt: [
      'Restaurants, cafés and cloud kitchens',
      'Food manufacturers and packaged-food brands',
      'Many traders and distributors of food products',
    ],
    whyImportant:
      'If you handle food, FSSAI is usually a core licence — not an optional add-on. The category depends on turnover and activity.',
    benefits: [
      'Legal pathway to operate a food business',
      'Expected by many aggregators, distributors and retailers',
      'Supports customer trust in food safety',
    ],
    ifYouDont:
      'Operating a food business without the required FSSAI category can attract enforcement and block marketplace or distributor onboarding. Category still depends on your activity and turnover.',
    nextStep: 'Map your food activity and scale so the right FSSAI category is chosen.',
  },
  'trademark-registration': {
    whatIsIt:
      'A trademark is a process to protect a brand name, logo or tagline you use in the market. It is separate from company, GST or shop registration.',
    whoNeedsIt: [
      'Businesses investing in a brand customers will search for',
      'Marketplace sellers and packaged-product brands',
      'Cafés, clinics and consultancies operating under a distinct name',
    ],
    whyImportant:
      'ROC name approval or a domain name does not give the same brand rights as a trademark. Filing is how you start protecting the mark you actually use.',
    benefits: [
      'Helps protect the brand you use with customers',
      'Supports action against copycat use (subject to registration outcome)',
      'Useful as you expand to new cities or marketplaces',
    ],
    ifYouDont:
      'Someone else may use a similar name. Company registration alone will not usually stop that. Not every local activity must file in week one, but you should know the gap.',
    nextStep: 'Search the brand you want to use, then decide on filing.',
  },
  'private-limited-company-registration': {
    whatIsIt:
      'A Private Limited Company is a separate legal entity with shareholders. It is commonly used when more than one founder wants a corporate structure or may raise investment.',
    whoNeedsIt: [
      'Multiple founders',
      'Businesses that may seek equity investment',
      'Teams that want limited liability and a shareholding structure',
    ],
    whyImportant:
      'Structure decides liability, fundraising options and annual compliance. A company is heavier than a proprietorship — useful when the business model needs it, not by default.',
    benefits: [
      'Separate legal entity and limited liability (as applicable)',
      'Clearer shareholding for founders and investors',
      'Often expected by investors and larger customers',
    ],
    ifYouDont:
      'You can still operate as a proprietorship or LLP if that fits. Choosing Pvt Ltd without need adds compliance. Choosing a lighter structure when you need investment can force a later conversion.',
    nextStep: 'Compare Proprietorship, LLP and Pvt Ltd against owners, liability and funding plans.',
  },
  'limited-liability-partnership-registration': {
    whatIsIt:
      'An LLP is a separate legal entity for two or more partners, with limited liability and a partnership-style agreement.',
    whoNeedsIt: [
      'Two or more partners who want limited liability',
      'Professional firms comparing partnership vs LLP',
    ],
    whyImportant:
      'LLP sits between a traditional partnership and a Private Limited Company on liability and compliance. It is not automatically the right choice for fundraising.',
    benefits: [
      'Limited liability compared with a traditional partnership',
      'Separate legal entity',
      'Moderate compliance versus a company',
    ],
    ifYouDont:
      'A traditional partnership leaves partners with different liability exposure. A company may be a better fit if you need equity investment. Compare before you file.',
    nextStep: 'Compare partnership, LLP and Pvt Ltd for your owners and growth plan.',
  },
  'shop-and-establishment-registration': {
    whatIsIt:
      'Shop & Establishment (Shop Act / Gumasta in Maharashtra) is a local labour-and-premise registration for many shops, offices and commercial establishments.',
    whoNeedsIt: [
      'Businesses with a commercial premise',
      'Employers in states where the Act applies',
    ],
    whyImportant:
      'It is a local compliance, not a tax registration and not GST. Many banks, licences and inspections still ask for it when you have a shop or office.',
    benefits: [
      'Helps operate a premise in line with local Shop Act rules',
      'Often requested for local licences and some banking KYC',
    ],
    ifYouDont:
      'A premise or employer without required Shop Act registration can face local enforcement. Home-based or purely online activity may be treated differently — check your situation.',
    nextStep: 'Confirm whether you have a commercial premise or employees in the state.',
  },
  'import-export-code-registration': {
    whatIsIt:
      'IEC (Import Export Code) is typically required to import or export goods from India. It is issued through DGFT processes.',
    whoNeedsIt: [
      'Importers and exporters of goods',
      'Businesses joining certain cross-border or marketplace export programmes',
    ],
    whyImportant:
      'Without IEC, customs and many international shipments cannot proceed. It is not a substitute for GST or a company.',
    benefits: [
      'Legal pathway to import/export goods',
      'Required for many customs and cross-border processes',
    ],
    ifYouDont:
      'You generally cannot clear import/export consignments. Domestic-only businesses may not need IEC until they go cross-border.',
    nextStep: 'Confirm whether you will move goods across the Indian border.',
  },
};

export function getServiceGuide(slug) {
  return serviceGuides[slug] || null;
}
