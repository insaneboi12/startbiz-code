const fs = require('fs');
const file = fs
  .readdirSync('build/static/js')
  .find((x) => x.startsWith('main.') && x.endsWith('.js'));
const s = fs.readFileSync(`build/static/js/${file}`, 'utf8');
const prefixed = (s.match(/start-biz\/images/g) || []).length;
const bare = (s.match(/["']\/images\//g) || []).length;
console.log({ file, prefixed, bare });
console.log('samples', s.match(/\/start-biz\/images\/[A-Za-z0-9._/-]+/g)?.slice(0, 5));
