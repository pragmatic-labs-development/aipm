import sharp from 'sharp';
import { writeFileSync } from 'fs';

// Width x Height for hero images (16:10 aspect ratio)
const W = 960;
const H = 600;

// Each gradient: [r1,g1,b1] top-left colour → [r2,g2,b2] bottom-right colour
const gradients = [
  { name: 'violet-indigo',    c1: [102, 51, 153],   c2: [45, 27, 105]    },
  { name: 'amber-rust',       c1: [180, 130, 20],   c2: [180, 75, 30]    },
  { name: 'magenta-rose',     c1: [160, 40, 120],   c2: [210, 60, 90]    },
  { name: 'teal-ocean',       c1: [25, 120, 130],   c2: [20, 60, 110]    },
  { name: 'cobalt-violet',    c1: [40, 60, 180],    c2: [100, 30, 160]   },
  { name: 'forest-emerald',   c1: [20, 90, 60],     c2: [10, 130, 80]    },
  { name: 'coral-pink',       c1: [200, 80, 80],    c2: [230, 130, 150]  },
  { name: 'midnight-teal',    c1: [15, 25, 80],     c2: [20, 90, 110]    },
  { name: 'crimson-plum',     c1: [140, 20, 60],    c2: [80, 15, 90]     },
  { name: 'olive-bronze',     c1: [100, 100, 20],   c2: [140, 70, 20]    },
  { name: 'slate-sapphire',   c1: [50, 60, 110],    c2: [30, 40, 80]     },
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
