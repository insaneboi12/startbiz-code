/**
 * Post-build SEO pipeline for Cloudflare Workers + CRA SPA.
 * 1) Writes public/sitemap.xml + build/sitemap.xml
 * 2) Prerenders route-specific index.html shells (correct meta for crawlers)
 * 3) Generates a local WhatsApp QR image (no third-party QR host)
 */
const fs = require('fs');
const path = require('path');

const SITE = 'https://startbiz.in';
const ROOT = path.join(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const PUBLIC = path.join(ROOT, 'public');

function slugify(title) {
  return String(title)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), 'utf8');
}

function extractQuoted(re, text) {
  const out = [];
  let m;
  const r = new RegExp(re, 'g');
  while ((m = r.exec(text))) out.push(m[1]);
  return out;
}

function collectRoutes() {
  const catalog = read('src/data/serviceCatalog.js');
  const knowledge = read('src/data/knowledge.js');
  const industries = read('src/data/industries.js');
  const content = read('src/data/content.js');

  const seoTitle =
    (content.match(/seoTitle:\s*\n?\s*'([^']+)'/) || [])[1] ||
    'startbiz.in | Business Registrations, Licences & Solutions in Maharashtra';
  const seoDescription =
    (content.match(/seoDescription:\s*\n?\s*'([^']+)'/) || [])[1] ||
    'Starting or growing a business? Startbiz helps you find the right registrations, licences and business solutions across Maharashtra.';

  const routes = [
    {
      path: '/',
      title: seoTitle,
      description: seoDescription,
      priority: '1.0',
    },
    {
      path: '/finder',
      title: 'Find My Business Solution | startbiz.in',
      description:
        'Answer a few questions and get a practical registration roadmap for GST, company setup, licences and compliance in Maharashtra.',
      priority: '0.9',
    },
    {
      path: '/compare',
      title: 'Compare Business Structures | startbiz.in',
      description:
        'Compare proprietorship, LLP and Private Limited company options for owners, liability, compliance and growth.',
      priority: '0.8',
    },
    {
      path: '/knowledge',
      title: 'Business Knowledge Centre | startbiz.in',
      description:
        'Plain-language guides on GST, MSME, FSSAI, trademark and starting a business in India.',
      priority: '0.8',
    },
    {
      path: '/industries',
      title: 'Industry Business Solutions | startbiz.in',
      description:
        'Typical registration paths for restaurants, cloud kitchens, ecommerce, freelancers and more across Maharashtra.',
      priority: '0.8',
    },
  ];

  const categoryBlocks = [
    ...catalog.matchAll(
      /id:\s*'([^']+)'[\s\S]*?label:\s*'([^']+)'[\s\S]*?path:\s*'([^']+)'[\s\S]*?seoTitle:\s*\n?\s*'([^']+)'[\s\S]*?seoDescription:\s*\n?\s*'([^']+)'/g
    ),
  ];
  categoryBlocks.forEach((m) => {
    routes.push({
      path: m[3],
      title: m[4],
      description: m[5],
      priority: '0.9',
    });
  });

  const serviceTitles = extractQuoted(/'\s*([A-Za-z0-9][^']{3,80})'\s*,?/g, catalog)
    .filter(
      (t) =>
        /Registration|Company|Licence|License|Certification|Filing|Trademark|GST|Udyam|FSSAI|Import|Shop|Partnership|Proprietorship|LLP|OPC|DSC|ISO|Tax|Return|PAN|TAN|EPF|ESI|GeM|Branding|Funding|Consultancy|Plan|Process|Dissolve|Conversion|Change|Closure|Objection|Opposition|Assignment|Renewal|Patent|Copyright|Design/i.test(
          t
        )
    )
    .filter((t, i, arr) => arr.indexOf(t) === i);

  // Prefer titles from group items arrays only
  const itemTitles = [];
  const itemBlocks = catalog.matchAll(/items:\s*\[([\s\S]*?)\]/g);
  for (const block of itemBlocks) {
    extractQuoted(/'([^']+)'/g, block[1]).forEach((t) => itemTitles.push(t));
  }
  const uniqueServices = [...new Set(itemTitles.length ? itemTitles : serviceTitles)];

  uniqueServices.forEach((title) => {
    const slug = slugify(title);
    routes.push({
      path: `/services/${slug}`,
      title: `${title} | startbiz.in Business Consulting Services`,
      description: `Get expert help for ${title} from startbiz.in. Business consulting for registrations, licences and compliance across Maharashtra, India.`,
      priority: '0.8',
    });
  });

  // Extra catalogue services from extraServices in catalog
  extractQuoted(/title:\s*'([^']+)'/g, catalog).forEach((title) => {
    const slug = slugify(title);
    if (routes.some((r) => r.path === `/services/${slug}`)) return;
    routes.push({
      path: `/services/${slug}`,
      title: `${title} | startbiz.in Business Consulting Services`,
      description: `Get expert help for ${title} from startbiz.in across Maharashtra, India.`,
      priority: '0.7',
    });
  });

  extractQuoted(/slug:\s*'([^']+)'/g, knowledge).forEach((slug) => {
    const titleMatch = knowledge.match(
      new RegExp(`slug:\\s*'${slug}'[\\s\\S]*?title:\\s*'([^']+)'`)
    );
    const excerptMatch = knowledge.match(
      new RegExp(`slug:\\s*'${slug}'[\\s\\S]*?excerpt:\\s*\\n?\\s*'([^']+)'`)
    );
    routes.push({
      path: `/knowledge/${slug}`,
      title: `${titleMatch ? titleMatch[1] : slug} | startbiz.in`,
      description:
        excerptMatch?.[1] ||
        'Business registration and compliance guidance from startbiz.in.',
      priority: '0.7',
    });
  });

  extractQuoted(/slug:\s*'([^']+)'/g, industries).forEach((slug) => {
    const titleMatch = industries.match(
      new RegExp(`slug:\\s*'${slug}'[\\s\\S]*?title:\\s*'([^']+)'`)
    );
    const summaryMatch = industries.match(
      new RegExp(`slug:\\s*'${slug}'[\\s\\S]*?summary:\\s*\\n?\\s*'([^']+)'`)
    );
    routes.push({
      path: `/industries/${slug}`,
      title: `${titleMatch ? titleMatch[1] : slug} Registrations | startbiz.in`,
      description:
        summaryMatch?.[1] ||
        'Industry-specific business registration guidance from startbiz.in.',
      priority: '0.7',
    });
  });

  // Dedupe by path
  const seen = new Set();
  return routes.filter((r) => {
    if (seen.has(r.path)) return false;
    seen.add(r.path);
    return true;
  });
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function writeSitemap(routes) {
  const body = routes
    .map(
      (r) => `  <url>
    <loc>${SITE}${r.path === '/' ? '/' : r.path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
  fs.writeFileSync(path.join(PUBLIC, 'sitemap.xml'), xml);
  if (fs.existsSync(BUILD)) {
    fs.writeFileSync(path.join(BUILD, 'sitemap.xml'), xml);
  }
  return routes.length;
}

function injectMeta(html, route) {
  const url = `${SITE}${route.path === '/' ? '/' : route.path}`;
  const image = `${SITE}/images/cover.webp`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);

  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`);
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/i,
    `<meta name="description" content="${description}" />`
  );
  out = out.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/i,
    `<link rel="canonical" href="${url}" />`
  );
  out = out.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/i,
    `<meta property="og:title" content="${title}" />`
  );
  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/i,
    `<meta property="og:description" content="${description}" />`
  );
  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/i,
    `<meta property="og:url" content="${url}" />`
  );
  out = out.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/i,
    `<meta property="og:image" content="${image}" />`
  );
  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/i,
    `<meta name="twitter:title" content="${title}" />`
  );
  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/i,
    `<meta name="twitter:description" content="${description}" />`
  );
  out = out.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/i,
    `<meta name="twitter:image" content="${image}" />`
  );

  // Help non-JS agents: visible fallback text
  if (!out.includes('data-seo-fallback')) {
    out = out.replace(
      '<div id="root"></div>',
      `<div id="root"></div>
    <noscript data-seo-fallback>
      <main style="font-family:system-ui,sans-serif;max-width:40rem;margin:2rem auto;padding:0 1rem">
        <h1>${title}</h1>
        <p>${description}</p>
        <p><a href="${SITE}/">startbiz.in</a> · Business registrations &amp; solutions across Maharashtra.</p>
      </main>
    </noscript>`
    );
  }

  return out;
}

function prerender(routes) {
  const indexPath = path.join(BUILD, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.warn('seo-build: build/index.html missing — skip prerender');
    return 0;
  }
  const baseHtml = fs.readFileSync(indexPath, 'utf8');
  let count = 0;

  routes.forEach((route) => {
    const html = injectMeta(baseHtml, route);
    if (route.path === '/') {
      fs.writeFileSync(indexPath, html);
      count += 1;
      return;
    }
    const dir = path.join(BUILD, route.path.replace(/^\//, ''));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    count += 1;
  });

  return count;
}

async function writeWhatsAppQr() {
  const phone = '917519221199';
  const message = 'I need a business solutions';
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  let QRCode;
  try {
    QRCode = require('qrcode');
  } catch {
    console.warn('seo-build: qrcode package missing — skip QR generation');
    return;
  }

  const outPublic = path.join(PUBLIC, 'images', 'whatsapp-qr.png');
  const outBuild = path.join(BUILD, 'images', 'whatsapp-qr.png');
  await QRCode.toFile(outPublic, waUrl, {
    width: 512,
    margin: 2,
    color: { dark: '#0B1F22', light: '#FFFFFF' },
  });
  if (fs.existsSync(path.join(BUILD, 'images'))) {
    fs.copyFileSync(outPublic, outBuild);
  }
  console.log('seo-build: wrote WhatsApp QR → public/images/whatsapp-qr.png');
}

async function main() {
  const routes = collectRoutes();
  const sitemapCount = writeSitemap(routes);
  console.log(`seo-build: sitemap URLs = ${sitemapCount}`);

  if (fs.existsSync(BUILD)) {
    const prerendered = prerender(routes);
    console.log(`seo-build: prerendered HTML shells = ${prerendered}`);
  }

  await writeWhatsAppQr();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
