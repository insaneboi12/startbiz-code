const fs = require('fs');

function updateContent() {
  const path = 'src/data/content.js';
  let s = fs.readFileSync(path, 'utf8');
  s = s.replace(/image: '(\/images\/[^']+)'/g, "image: asset('$1')");
  fs.writeFileSync(path, s);
  console.log(
    'content.js asset() images:',
    (s.match(/image: asset\(/g) || []).length
  );
}

function updateCatalog() {
  const path = 'src/data/serviceCatalog.js';
  let c = fs.readFileSync(path, 'utf8');
  if (!c.includes("from '../utils/asset'")) {
    c = "import { asset } from '../utils/asset';\n" + c;
  }
  c = c.replace(/: '(\/images\/[^']+)'/g, ": asset('$1')");
  fs.writeFileSync(path, c);
  console.log(
    'serviceCatalog asset() images:',
    (c.match(/asset\('\/images/g) || []).length
  );
}

updateContent();
updateCatalog();
