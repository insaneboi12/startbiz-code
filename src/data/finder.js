/** Client-side Business Requirement Finder. Advisory only — not a legal determination. */

export const FINDER_DISCLAIMER =
  'This roadmap is general guidance based on the details you shared. Final requirements depend on your business activity, location and applicable conditions. Startbiz can verify this with you.';

export const finderQuestions = [
  {
    id: 'businessType',
    title: 'What type of business are you starting or running?',
    options: [
      { id: 'manufacturing', label: 'Manufacturing' },
      { id: 'trading', label: 'Trading' },
      { id: 'service', label: 'Service' },
      { id: 'food', label: 'Food business' },
      { id: 'ecommerce', label: 'E-commerce' },
      { id: 'consultancy', label: 'Consultancy' },
      { id: 'retail', label: 'Retail shop' },
      { id: 'restaurant', label: 'Restaurant / Café' },
      { id: 'construction', label: 'Construction' },
      { id: 'import-export', label: 'Import / Export' },
      { id: 'freelancing', label: 'Freelancing' },
      { id: 'professional', label: 'Professional services' },
      { id: 'other', label: 'Other' },
    ],
  },
  {
    id: 'owners',
    title: 'How many owners are there?',
    options: [
      { id: 'one', label: 'One' },
      { id: 'two', label: 'Two' },
      { id: 'three-plus', label: 'Three or more' },
    ],
  },
];

const item = (title, slug, reason) => ({ title, slug, reason });

function recommendStructure(answers) {
  const { owners, businessType } = answers;
  const growth =
    businessType === 'ecommerce' ||
    businessType === 'import-export' ||
    businessType === 'manufacturing';

  if (owners === 'one') {
    if (growth) {
      return {
        title: 'One Person Company (OPC)',
        slug: 'one-person-company-registration',
        reason:
          'A single founder who wants a corporate structure may consider OPC, subject to eligibility. Proprietorship can still suit a small local activity.',
        alternatives: [
          {
            title: 'Sole Proprietorship',
            slug: 'sole-proprietorship-firm-registration',
          },
        ],
      };
    }
    return {
      title: 'Sole Proprietorship',
      slug: 'sole-proprietorship-firm-registration',
      reason:
        'A single-owner local or small business often starts as a proprietorship. OPC may be considered if you want a company structure.',
      alternatives: [
        {
          title: 'One Person Company (OPC)',
          slug: 'one-person-company-registration',
        },
      ],
    };
  }

  if (owners === 'two') {
    if (growth) {
      return {
        title: 'Private Limited Company or LLP',
        slug: 'private-limited-company-registration',
        reason:
          'Two owners planning wider sales or investment often compare LLP and Private Limited. The better fit depends on funding, compliance appetite and liability needs.',
        alternatives: [
          {
            title: 'Limited Liability Partnership',
            slug: 'limited-liability-partnership-registration',
          },
          {
            title: 'Partnership Firm',
            slug: 'partnership-firm-registration',
          },
        ],
      };
    }
    return {
      title: 'Partnership Firm or LLP',
      slug: 'limited-liability-partnership-registration',
      reason:
        'Two owners commonly compare a partnership firm and LLP. LLP generally offers limited liability with moderate compliance.',
      alternatives: [
        {
          title: 'Partnership Firm',
          slug: 'partnership-firm-registration',
        },
        {
          title: 'Private Limited Company',
          slug: 'private-limited-company-registration',
        },
      ],
    };
  }

  return {
    title: 'Private Limited Company',
    slug: 'private-limited-company-registration',
    reason:
      'Three or more owners, especially with growth or investment plans, often consider a Private Limited Company. LLP may still suit professional or partnership-style operations.',
    alternatives: [
      {
        title: 'Limited Liability Partnership',
        slug: 'limited-liability-partnership-registration',
      },
    ],
  };
}

function pushUnique(list, entry) {
  if (list.some((x) => x.slug === entry.slug)) return;
  list.push(entry);
}

export function buildRoadmap(answers) {
  const essential = [];
  const recommended = [];
  const depending = [];
  const structure = recommendStructure(answers);

  pushUnique(
    essential,
    item(
      'Business structure',
      structure.slug,
      `${structure.title} — ${structure.reason}`
    )
  );

  const food =
    answers.businessType === 'food' || answers.businessType === 'restaurant';
  const onlineSell = answers.businessType === 'ecommerce';
  const serviceLike = [
    'service',
    'consultancy',
    'freelancing',
    'professional',
  ].includes(answers.businessType);

  const gstLikely =
    onlineSell ||
    answers.businessType === 'import-export' ||
    answers.businessType === 'manufacturing' ||
    answers.businessType === 'trading';

  const gstMaybe =
    serviceLike ||
    answers.businessType === 'retail' ||
    answers.businessType === 'construction' ||
    answers.businessType === 'other';

  if (gstLikely) {
    pushUnique(
      essential,
      item(
        'GST registration',
        'gst-registration',
        'GST may be important for trading, manufacturing, e-commerce or import/export. Applicability is subject to GST rules for your supply type.'
      )
    );
  } else if (gstMaybe) {
    pushUnique(
      recommended,
      item(
        'GST registration',
        'gst-registration',
        'GST can become relevant as your business grows or when B2B customers ask for GST invoices. Thresholds differ for goods and services.'
      )
    );
  } else {
    pushUnique(
      depending,
      item(
        'GST registration',
        'gst-registration',
        'A small local activity below typical thresholds may not need GST immediately, but B2B buyers or future expansion can change this.'
      )
    );
  }

  if (food) {
    pushUnique(
      essential,
      item(
        'FSSAI registration / licence',
        'fssai-registration',
        'Food businesses generally need FSSAI registration or a state/central licence, depending on activity.'
      )
    );
  }

  if (answers.businessType === 'import-export') {
    pushUnique(
      essential,
      item(
        'Import Export Code (IEC)',
        'import-export-code-registration',
        'IEC is typically required to import or export goods from India.'
      )
    );
  } else if (onlineSell) {
    pushUnique(
      depending,
      item(
        'Import Export Code (IEC)',
        'import-export-code-registration',
        'IEC may become relevant if you start cross-border shipments or certain marketplace export programmes.'
      )
    );
  }

  if (
    ['retail', 'restaurant', 'manufacturing', 'food', 'trading'].includes(
      answers.businessType
    )
  ) {
    pushUnique(
      recommended,
      item(
        'Shop & Establishment (Shop Act)',
        'shop-and-establishment-registration',
        'A physical place of business in Maharashtra often requires Shop & Establishment registration, subject to local rules.'
      )
    );
  } else {
    pushUnique(
      depending,
      item(
        'Shop & Establishment (Shop Act)',
        'shop-and-establishment-registration',
        'May apply if you operate from a commercial premise or hire staff, depending on the local Shop Act.'
      )
    );
  }

  pushUnique(
    recommended,
    item(
      'Udyam / MSME registration',
      'udyam-msme-registration',
      'Udyam is generally useful for eligible MSMEs — schemes, tenders and certain banking processes. It is not a substitute for GST or licences.'
    )
  );

  pushUnique(
    recommended,
    item(
      'Trademark registration',
      'trademark-registration',
      'If you use a brand name or logo, trademark filing can help protect it. Company name registration is not the same as a trademark.'
    )
  );

  pushUnique(
    depending,
    item(
      'Professional Tax',
      'professional-tax-registration',
      'May apply to certain professions and employers, depending on state rules.'
    )
  );

  if (['retail', 'restaurant', 'food', 'manufacturing'].includes(answers.businessType)) {
    pushUnique(
      depending,
      item(
        'Trade licence',
        'trade-license',
        'Municipal trade licences may apply for certain local business activities.'
      )
    );
  }

  if (gstLikely) {
    pushUnique(
      depending,
      item(
        'GST return filing',
        'gst-return-filing',
        'If GST registration applies, periodic return filing is an ongoing compliance, not a one-time registration.'
      )
    );
  }

  const checklist = [
    {
      id: 'structure',
      label: 'Choose a business structure that fits owners, liability and growth',
      slug: structure.slug,
    },
    {
      id: 'pan',
      label: 'Confirm PAN / TAN requirements for the entity and deductors',
      slug: 'pan-application',
    },
    {
      id: 'gst',
      label: 'Check GST applicability for your business activity',
      slug: 'gst-registration',
    },
    {
      id: 'udyam',
      label: 'Consider Udyam / MSME registration if eligible',
      slug: 'udyam-msme-registration',
    },
    {
      id: 'shop',
      label: 'Review Shop & Establishment (Gumasta) if you have a premise or staff',
      slug: 'shop-and-establishment-registration',
    },
    {
      id: 'fssai',
      label: 'FSSAI — if you handle food',
      slug: 'fssai-registration',
      hidden: !food,
    },
    {
      id: 'iec',
      label: 'IEC — if you import or export',
      slug: 'import-export-code-registration',
      hidden: answers.businessType !== 'import-export',
    },
    {
      id: 'tm',
      label: 'Decide whether to protect your brand name / logo',
      slug: 'trademark-registration',
    },
    {
      id: 'bank',
      label: 'Open a current account in the business name after registrations',
    },
    {
      id: 'pt',
      label: 'Review Professional Tax and other employer registrations',
      slug: 'professional-tax-registration',
    },
    {
      id: 'calendar',
      label: 'Note ongoing compliance (GST, ITR, ROC/LLP filings as applicable)',
      slug: 'gst-return-filing',
    },
  ].filter((row) => !row.hidden);

  return {
    structure,
    essential,
    recommended,
    depending,
    checklist,
    disclaimer: FINDER_DISCLAIMER,
  };
}

export const needPrompts = {
  'gst-registration': {
    question: 'Do you actually need GST for your business?',
    hint: 'Applicability depends on turnover, supply type, interstate sales and e-commerce — not on a one-size fee card.',
  },
  'udyam-msme-registration': {
    question: 'Can your business benefit from Udyam registration?',
    hint: 'Udyam is often useful for MSMEs, but it does not replace GST, FSSAI or company incorporation.',
  },
  'msme-registration': {
    question: 'Can your business benefit from Udyam registration?',
    hint: 'Udyam is often useful for MSMEs, but it does not replace GST, FSSAI or company incorporation.',
  },
  'fssai-registration': {
    question: 'Does your food business require FSSAI?',
    hint: 'Most food businesses need FSSAI registration or a licence. The category depends on turnover and activity.',
  },
  'fssai-food-license': {
    question: 'Does your food business require FSSAI?',
    hint: 'Most food businesses need FSSAI registration or a licence. The category depends on turnover and activity.',
  },
  'trademark-registration': {
    question: 'Should you protect your brand name?',
    hint: 'A company or shop name is not the same as a registered trademark.',
  },
  'shop-and-establishment-registration': {
    question: 'Do you need Shop & Establishment registration?',
    hint: 'Often relevant if you have a commercial premise or employees, subject to local rules.',
  },
  'shop-act-registration': {
    question: 'Do you need Shop & Establishment registration?',
    hint: 'Often relevant if you have a commercial premise or employees, subject to local rules.',
  },
  'import-export-code-registration': {
    question: 'Do you need an Import Export Code?',
    hint: 'IEC is typically required for import or export of goods from India.',
  },
  'private-limited-company-registration': {
    question: 'Is a Private Limited Company the right structure for you?',
    hint: 'Useful for multiple founders and investment plans; compliance is higher than a proprietorship.',
  },
  'limited-liability-partnership-registration': {
    question: 'Is LLP a better fit than a partnership or Pvt Ltd?',
    hint: 'LLP can suit partners who want limited liability with moderate compliance.',
  },
  'llp-registration': {
    question: 'Is LLP a better fit than a partnership or Pvt Ltd?',
    hint: 'LLP can suit partners who want limited liability with moderate compliance.',
  },
};
