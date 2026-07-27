const fs = require('fs');
const file = fs
  .readdirSync('build/static/js')
  .find((x) => x.startsWith('main.') && x.endsWith('.js'));
const s = fs.readFileSync(`build/static/js/${file}`, 'utf8');

// Find definitions of Xe
const idxs = [];
let from = 0;
while ((from = s.indexOf('function Xe', from)) !== -1) {
  idxs.push(from);
  from += 1;
}
console.log('function Xe idxs', idxs.slice(0, 5));
idxs.slice(0, 3).forEach((i) => console.log(s.slice(i, i + 120)));

const arrow = [];
from = 0;
while ((from = s.indexOf('Xe=', from)) !== -1 && arrow.length < 10) {
  arrow.push(from);
  from += 1;
}
arrow.forEach((i) => console.log('Xe=', s.slice(i, i + 160)));
