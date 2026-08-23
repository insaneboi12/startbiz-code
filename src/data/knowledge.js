export const knowledgeCategories = [
  { id: 'starting', label: 'Starting a business' },
  { id: 'gst', label: 'GST' },
  { id: 'msme', label: 'MSME' },
  { id: 'fssai', label: 'FSSAI' },
  { id: 'trademark', label: 'Trademark' },
];

export const knowledgeArticles = [
  {
    slug: 'proprietorship-vs-llp',
    category: 'starting',
    title: 'Proprietorship vs LLP: which structure fits a small business?',
    excerpt:
      'A simple comparison of owners, liability and compliance — without treating either option as universally “best”.',
    readTime: '6 min',
    sections: [
      {
        heading: 'Start from people and risk, not from a price list',
        body: 'A proprietorship is typically one person trading in their own name. An LLP is a separate legal entity with at least two partners. If you want limited liability and a clearer partnership framework, LLP is often compared. If you are a single local operator testing a small idea, proprietorship is often the lighter starting point.',
      },
      {
        heading: 'Compliance is not the same',
        body: 'Proprietorship generally has a lower filing load. LLP has more formality (agreement, filings) but can be easier to explain to banks and larger clients than an informal partnership. Neither automatically includes GST, FSSAI or a trademark.',
      },
      {
        heading: 'What to do next',
        body: 'Use the structure comparison and requirement finder, then confirm with a consultation. Applicable conditions may vary if you later add partners or investors.',
      },
    ],
  },
  {
    slug: 'llp-vs-private-limited',
    category: 'starting',
    title: 'LLP vs Private Limited: funding, compliance and control',
    excerpt:
      'When partners should stay with LLP, and when a company structure is more typical for growth plans.',
    readTime: '6 min',
    sections: [
      {
        heading: 'Both are separate legal entities',
        body: 'LLP and Private Limited both separate the business from personal liability in a way a proprietorship does not. The difference is usually funding, shareholding, and how heavy annual compliance you are ready for.',
      },
      {
        heading: 'Investors often expect a company',
        body: 'Equity investment, ESOPs and many startup programmes are built around Private Limited companies. LLP can still suit professional firms and closely held partner businesses that do not need that capital path.',
      },
      {
        heading: 'Do not convert later by accident',
        body: 'Changing structure later is possible but it is a project, not a checkbox. If you already know you want investors, compare Private Limited first.',
      },
    ],
  },
  {
    slug: 'how-to-start-a-business',
    category: 'starting',
    title: 'How to start a business in India: a practical setup checklist',
    excerpt:
      'Structure → registrations → licences → brand → compliance. Skip the steps that do not apply; do not skip the ones that do.',
    readTime: '7 min',
    sections: [
      {
        heading: 'A sequence that reduces wasted filings',
        body: 'Choose a structure, then check GST and industry licences, then brand protection, then a compliance calendar. Buying GST first because it is on a homepage is how people over-register or miss FSSAI.',
      },
      {
        heading: 'Maharashtra-specific notes',
        body: 'Shop & Establishment (Gumasta) and Professional Tax often come up for premises and employers. They are not universal for every freelancer working from home — check your situation.',
      },
      {
        heading: 'Use a personalised checklist',
        body: 'The Startbiz finder builds a first checklist from your answers. Treat it as a discussion draft, then verify.',
      },
    ],
  },
  {
    slug: 'who-needs-gst',
    category: 'gst',
    title: 'Who may need GST registration?',
    excerpt:
      'GST is not a default for every stall. Turnover, supply type, interstate sales and e-commerce all matter.',
    readTime: '7 min',
    sections: [
      {
        heading: 'There is no single “everyone must” line on a brochure',
        body: 'GST registration can become important because of turnover thresholds, the nature of goods or services, interstate supplies, certain e-commerce models, or because customers insist on GST invoices. Thresholds differ for goods and services, and other conditions may apply.',
      },
      {
        heading: 'Voluntary registration still has consequences',
        body: 'Registering when you are not required can still create return-filing duties. That is why “cheap GST” is the wrong first question — applicability is.',
      },
      {
        heading: 'Check before you apply',
        body: 'Use the GST “do I need this?” path or the full requirement finder. Startbiz can review your facts without assuming the answer.',
      },
    ],
  },
  {
    slug: 'gst-benefits-and-myths',
    category: 'gst',
    title: 'GST benefits, and myths that push people to register too early',
    excerpt:
      'Input tax credit, B2B credibility and e-commerce — explained without fear marketing.',
    readTime: '6 min',
    sections: [
      {
        heading: 'What GST can help with',
        body: 'Where GST applies, it supports legally applicable invoicing, can allow eligible input tax credit, and is often expected in B2B and marketplace contexts. It is a tax system, not a quality certificate.',
      },
      {
        heading: 'Common myths',
        body: '“Every business needs GST on day one”, “Udyam includes GST”, and “a low registration fee means you should apply now” are all incomplete. Registration creates compliance. Apply when it is relevant.',
      },
      {
        heading: 'After registration',
        body: 'Returns, invoicing discipline and, where applicable, e-way bills are part of staying compliant. Registration is the start of a calendar, not the end of a cart checkout.',
      },
    ],
  },
  {
    slug: 'what-is-udyam',
    category: 'msme',
    title: 'What is Udyam, and who can register?',
    excerpt:
      'MSME registration can unlock schemes and tenders. It is not a trading licence and not GST.',
    readTime: '5 min',
    sections: [
      {
        heading: 'Udyam in plain language',
        body: 'Udyam is the current MSME registration. Eligible micro, small and medium enterprises can use it for certain government processes, tenders and banking conversations. Classification depends on investment and turnover rules that can change — verify current criteria.',
      },
      {
        heading: 'What Udyam does not do',
        body: 'It does not replace GST, FSSAI, Shop Act, IEC or incorporation. Think of it as a useful layer for eligible businesses, not a full compliance pack.',
      },
    ],
  },
  {
    slug: 'udyam-vs-gst',
    category: 'msme',
    title: 'Udyam vs GST: why you may need one, both, or neither yet',
    excerpt:
      'Two different systems. Mixing them up is one of the most common setup mistakes.',
    readTime: '5 min',
    sections: [
      {
        heading: 'Different problems, different filings',
        body: 'GST is a tax registration for supplies that fall under GST law. Udyam is an MSME identity for eligible businesses. A café, a trader and a consultant can each land on a different combination.',
      },
      {
        heading: 'How Startbiz treats them',
        body: 'We check GST applicability and MSME eligibility separately, then recommend what is useful for your facts — not a bundled “both for ₹999” pitch.',
      },
    ],
  },
  {
    slug: 'fssai-basic-state-central',
    category: 'fssai',
    title: 'FSSAI: basic registration vs state vs central licence',
    excerpt:
      'Food businesses usually need FSSAI. The category depends on turnover and the kind of food activity.',
    readTime: '6 min',
    sections: [
      {
        heading: 'If you handle food, start here',
        body: 'Restaurants, cloud kitchens, manufacturers and many packaged-food sellers typically need FSSAI. Basic registration, state licence and central licence are different categories. Turnover and activity decide the path — not a generic “food licence” product name.',
      },
      {
        heading: 'Registration is not the whole food-law picture',
        body: 'Labelling, hygiene and renewals still matter after you have a number. We help with the application path and explain what usually comes next, without pretending a certificate covers every operational duty.',
      },
    ],
  },
  {
    slug: 'why-trademark-your-brand',
    category: 'trademark',
    title: 'Why trademark your brand — and what it does not cover',
    excerpt:
      'A logo on Instagram is not protection. Incorporation is not a trademark either.',
    readTime: '5 min',
    sections: [
      {
        heading: 'What trademark is for',
        body: 'Trademark filing is about the name, logo or tagline you use in the market. It is a separate process from company, LLP or GST registration.',
      },
      {
        heading: 'When it is worth discussing early',
        body: 'If you are investing in packaging, marketplaces or a café name people will search, a search-and-file conversation is usually cheaper than a later dispute. Not every local activity needs to file on week one — but you should know the difference.',
      },
    ],
  },
  {
    slug: 'trademark-vs-company-name',
    category: 'trademark',
    title: 'Trademark vs company name: the mix-up that leaves brands exposed',
    excerpt:
      'ROC name approval does not give you exclusive brand rights in the way a trademark can.',
    readTime: '5 min',
    sections: [
      {
        heading: 'Two different offices, two different outcomes',
        body: 'Company name is about the legal entity. Trademark is about the brand customers see. You can have one without the other. You can also be blocked on a brand even if your company name was approved.',
      },
      {
        heading: 'A practical order',
        body: 'Pick a structure, check whether the brand is available enough to use, then decide on trademark filing while you complete GST and licences that actually apply.',
      },
    ],
  },
];

export function getArticleBySlug(slug) {
  return knowledgeArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug, limit = 3) {
  const current = getArticleBySlug(slug);
  const pool = knowledgeArticles.filter((article) => article.slug !== slug);
  const same = current
    ? pool.filter((article) => article.category === current.category)
    : [];
  return [...same, ...pool.filter((a) => !same.includes(a))].slice(0, limit);
}
