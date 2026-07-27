const fs = require('fs');
const {
  megaMenus,
  allServices,
  serviceCount,
} = require('../src/data/serviceCatalog.js');

const urls = [{ loc: 'https://startbiz.in/', priority: '1.0' }];

megaMenus.forEach((m) => {
  urls.push({ loc: `https://startbiz.in${m.path}`, priority: '0.9' });
});

allServices
  .filter((s) => !s.aliasOf)
  .forEach((s) => {
    urls.push({
      loc: `https://startbiz.in/services/${s.slug}`,
      priority: '0.8',
    });
  });

const body = urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

fs.writeFileSync('public/sitemap.xml', xml);
console.log('Wrote sitemap with', urls.length, 'URLs. Services:', serviceCount);
