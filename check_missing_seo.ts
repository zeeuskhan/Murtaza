import { toolSEOContent } from './src/data/toolSEOContent.ts';
import fs from 'fs';

const toolsPageContent = fs.readFileSync('./src/pages/ToolsPage.tsx', 'utf-8');
const toolsMatch = toolsPageContent.match(/const tools = \[([\s\S]+?)\];/);
const toolsArrayStr = toolsMatch ? toolsMatch[1] : '';
const toolIdMatches = toolsArrayStr.match(/id: '([^']+)'/g);
const toolIds = toolIdMatches ? toolIdMatches.map(m => m.match(/'([^']+)'/)[1]) : [];

const missing = toolIds.filter(id => !toolSEOContent[id]);

console.log('Missing Tool SEO Content for:');
console.log(missing);
