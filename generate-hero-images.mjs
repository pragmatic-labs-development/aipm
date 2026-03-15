import sharp from 'sharp';
import { writeFileSync } from 'fs';

// Width x Height for hero images (16:10 aspect ratio)
const W = 960;
const H = 600;

// Each gradient: [r1,g1,b1] top-left colour → [r2,g2,b2] bottom-right colour
// All colours are high-saturation, mid-to-high brightness
const gradients = [
  { name: 'violet-indigo',    c1: [130, 80, 230],   c2: [80, 40, 190]    },
  { name: 'amber-rust',       c1: [220, 160, 20],   c2: [205, 85, 25]    },
  { name: 'magenta-rose',     c1: [210, 50, 140],   c2: [230, 70, 95]    },
  { name: 'teal-ocean',       c1: [20, 190, 190],   c2: [20, 120, 210]   },
  { name: 'cobalt-violet',    c1: [65, 85, 225],    c2: [130, 45, 205]   },
  { name: 'forest-emerald',   c1: [30, 170, 100],   c2: [20, 140, 70]    },
  { name: 'coral-pink',       c1: [225, 90, 90],    c2: [240, 140, 150]  },
  { name: 'midnight-teal',    c1: [20, 170, 185],   c2: [30, 100, 175]   },
  { name: 'crimson-plum',     c1: [210, 40, 85],    c2: [155, 20, 130]   },
  { name: 'olive-bronze',     c1: [205, 175, 20],   c2: [200, 110, 20]   },
  { name: 'slate-sapphire',   c1: [85, 105, 230],   c2: [45, 65, 205]    },
];

function lerp(a, b, t) { return Math.round(a + (b - a) * t); }

function generateGrainGradient({ name, c1, c2 }) {
  const channels = 3;
  const buf = Buffer.alloc(W * H * channels);

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      // Diagonal gradient (top-left → bottom-right)
      const t = (x / W * 0.55 + y / H * 0.45);

      let r = lerp(c1[0], c2[0], t);
      let g = lerp(c1[1], c2[1], t);
      let b = lerp(c1[2], c2[2], t);

      // Film grain noise
      const noise = (Math.random() - 0.5) * 38;
      r = Math.max(0, Math.min(255, r + noise));
      g = Math.max(0, Math.min(255, g + noise));
      b = Math.max(0, Math.min(255, b + noise));

      const idx = (y * W + x) * channels;
      buf[idx]     = r;
      buf[idx + 1] = g;
      buf[idx + 2] = b;
    }
  }

  return { name, buf };
}

const outDir = '/Users/davepragmaticlabs/Desktop/aipm/src/assets/heroes';

import { mkdirSync } from 'fs';
mkdirSync(outDir, { recursive: true });

for (const g of gradients) {
  const { name, buf } = generateGrainGradient(g);
  const outPath = `${outDir}/${name}.webp`;

  await sharp(buf, { raw: { width: W, height: H, channels: 3 } })
    .webp({ quality: 85 })
    .toFile(outPath);

  console.log(`✓ ${name}.webp`);
}

console.log('\nAll hero images generated.');
