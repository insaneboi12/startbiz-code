const fs = require('fs');
const file = fs
  .readdirSync('build/static/js')
  .find((x) => x.startsWith('main.') && x.endsWith('.js'));
const s = fs.readFileSync(`build/static/js/${file}`, 'utf8');

// Find asset helper near logo usage
const logoIdx = s.indexOf('logo-transparent');
console.log(s.slice(logoIdx - 200, logoIdx + 120));

// Search for start-biz string occurrences
console.log('start-biz count', (s.match(/start-biz/g) || []).length);
console.log('homepage sample', s.match(/insaneboi12[^"']*/)?.[0]);

// Look for PUBLIC_URL replacement patterns like "/start-biz"
const bases = s.match(/["']\/start-biz\/?["']/g);
console.log('base literals', bases && bases.slice(0, 10));
