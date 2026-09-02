import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return [full];
  });
}

const textExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.yml', '.yaml', '.md', '.html', '.css', '.txt']);
const scanRoots = ['src', '.github', 'scripts'];
const files = scanRoots.flatMap((dir) => walk(path.join(root, dir))).filter((file) => textExtensions.has(path.extname(file)));

const forbiddenPatterns = [
  { label: 'GitHub personal access token', regex: /github_pat_[A-Za-z0-9_]+/g },
  { label: 'GitHub classic token', regex: /ghp_[A-Za-z0-9]+/g },
  { label: 'OpenAI API key', regex: /sk-(?:proj-)?[A-Za-z0-9_-]{20,}/g },
  { label: 'Google API key', regex: /AIza[0-9A-Za-z_-]{30,}/g },
  { label: 'AWS access key', regex: /AKIA[0-9A-Z]{16}/g },
  { label: 'private key material', regex: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g },
];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  for (const rule of forbiddenPatterns) {
    if (rule.regex.test(content)) {
      failures.push(`${rule.label} detected in ${path.relative(root, file)}`);
    }
    rule.regex.lastIndex = 0;
  }
}

const portraitPath = path.join(root, 'src', 'components', 'ImmersivePhoto.tsx');
if (!fs.existsSync(portraitPath)) {
  failures.push('src/components/ImmersivePhoto.tsx is missing');
} else {
  const portrait = fs.readFileSync(portraitPath, 'utf8');
  const requiredAsset = 'assets/aistudio/joy-perez-profile-premium.png';
  if (!portrait.includes(requiredAsset)) {
    failures.push(`ImmersivePhoto.tsx must use ${requiredAsset}`);
  }
  const forbiddenPortraitSources = [
    'images.unsplash.com',
    'unsplash.com',
    'fallbackHighResPhoto',
    'backupHighResPhoto',
    'primaryHighResPhoto',
  ];
  for (const item of forbiddenPortraitSources) {
    if (portrait.includes(item)) {
      failures.push(`Unauthorized portrait fallback/source detected: ${item}`);
    }
  }
}

if (failures.length) {
  console.error('\nSecurity check failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Security check passed: no obvious committed secrets and portrait source is locked to the approved local asset.');
