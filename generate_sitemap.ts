import { toolSEOContent } from './src/data/toolSEOContent.ts';
import fs from 'fs';

const baseUrl = 'https://jansoochna.vercel.app';
const lastMod = new Date().toISOString().split('T')[0];

const pages = [
  '',
  '/services',
  '/forms',
  '/tools',
  '/contact',
  '/jobs',
  '/pdf-tools',
  '/image-tools',
  '/text-tools',
  '/converter-tools',
  '/utility-tools',
  '/ai-tools',
  '/social-tools',
  '/security-tools'
];

const toolIds = Object.keys(toolSEOContent);

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

pages.forEach(page => {
  sitemap += `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${lastMod}</lastmod>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
});

toolIds.forEach(id => {
  sitemap += `  <url>
    <loc>${baseUrl}/tools/${id}</loc>
    <lastmod>${lastMod}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/guides/${id}</loc>
    <lastmod>${lastMod}</lastmod>
    <priority>0.6</priority>
  </url>
`;
});

sitemap += '</urlset>';

fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log('Sitemap generated successfully in /public/sitemap.xml');
