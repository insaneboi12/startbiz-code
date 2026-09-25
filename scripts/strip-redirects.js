/**
 * Cloudflare Workers rejects SPA catch-all rules in `_redirects`
 * (/* /index.html 200). SPA fallback is handled by wrangler.toml
 * `not_found_handling = "single-page-application"` instead.
 */
const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'build', '_redirects');

if (fs.existsSync(target)) {
  fs.unlinkSync(target);
  console.log('Removed build/_redirects (incompatible with Cloudflare Workers).');
}
