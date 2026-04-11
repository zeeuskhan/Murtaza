import { toolSEOContent } from './src/data/toolSEOContent.ts';
import fs from 'fs';

const baseUrl = 'https://ais-dev-ogmgl4k2s364c3py4dovwf-177445194387.asia-southeast1.run.app';
const lastMod = new Date().toISOString().split('T')[0];

const pages = [
  '',
  '/index.html',
  '/services.html',
  '/forms.html',
  '/tools.html',
  '/contact.html',
  '/jobs.html',
  '/pdf-tools.html',
  '/image-tools.html',
  '/text-tools.html',
  '/converter-tools.html',
  '/utility-tools.html',
  '/ai-tools.html',
  '/social-tools.html',
  '/security-tools.html'
];

const toolIds = Object.keys(toolSEOContent);

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

pages.forEach(page => {
  sitemap += `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${lastMod}</lastmod>
    <priority>${page === '' || page === '/index.html' ? '1.0' : '0.8'}</priority>
  </url>
`;
});

toolIds.forEach(id => {
  sitemap += `  <url>
    <loc>${baseUrl}/tools/${id}.html</loc>
    <lastmod>${lastMod}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/guides/${id}.html</loc>
    <lastmod>${lastMod}</lastmod>
    <priority>0.6</priority>
  </url>
`;
});

sitemap += '</urlset>';

fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log('Sitemap generated successfully in /public/sitemap.xml');
