#!/usr/bin/env node

/**
 * Image Optimization Script
 * This script helps identify and optimize oversized images
 * Run with: node scripts/optimize-images.js
 */

import fs from 'fs';
import path from 'path';

const publicDir = path.join(__dirname, '..', 'public');
const oversizedImages = [
  { file: '4.webp', savings: '86 KB' },
  { file: '2.webp', savings: '38 KB' },
  { file: '3.webp', savings: '35 KB' },
  { file: 'Lucid_Origin_A_large_cargo_ship_docked_at_the_port_being_loade_0.webp', savings: '25 KB' },
  { file: '9.webp', savings: '8.9 KB' },
  { file: '8.webp', savings: '7.5 KB' }
];

console.log('🖼️  Image Optimization Report');
console.log('================================');

oversizedImages.forEach(({ file, savings }) => {
  const filePath = path.join(publicDir, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`📸 ${file}`);
    console.log(`   Current size: ${sizeKB} KB`);
    console.log(`   Potential savings: ${savings}`);
    console.log(`   Recommendation: Compress and resize for display dimensions`);
    console.log('');
  }
});

console.log('💡 Optimization Tips:');
console.log('- Use responsive images with proper sizes attribute');
console.log('- Compress images to 85% quality for web');
console.log('- Resize images to match their display dimensions');
console.log('- Consider using AVIF format for better compression');