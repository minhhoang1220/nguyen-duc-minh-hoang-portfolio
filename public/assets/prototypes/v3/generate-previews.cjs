// Generate V3 preview JPGs (600px width)
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// For now, copy PNGs as-is to previews folder since we don't have a JPG encoder
// The review page will use the full PNGs; JPGs can be generated later with proper tooling
const srcDir = 'd:/Users/Desktop/Work/CV/Portfolio/public/assets/prototypes/v3';
const previewDir = path.join(srcDir, 'previews');

if (!fs.existsSync(previewDir)) fs.mkdirSync(previewDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.png'));
for (const f of files) {
  const src = path.join(srcDir, f);
  const dst = path.join(previewDir, f.replace('.png', '-preview.png'));
  fs.copyFileSync(src, dst);
  console.log(`Copied: ${f} -> previews/${path.basename(dst)}`);
}

console.log('\nPreview directory:');
fs.readdirSync(previewDir).forEach(f => {
  const s = fs.statSync(path.join(previewDir, f));
  console.log(`  ${f}: ${(s.size/1024).toFixed(0)} KB`);
});
