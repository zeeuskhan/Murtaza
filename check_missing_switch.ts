import fs from 'fs';

const toolsPageContent = fs.readFileSync('./src/pages/ToolsPage.tsx', 'utf-8');

// Extract tool IDs from the tools array
const toolsMatch = toolsPageContent.match(/const tools = \[([\s\S]+?)\];/);
const toolsArrayStr = toolsMatch ? toolsMatch[1] : '';
const toolIdMatches = toolsArrayStr.match(/id: '([^']+)'/g);
const toolIds = toolIdMatches ? toolIdMatches.map(m => m.match(/'([^']+)'/)[1]) : [];

// Extract tool IDs from the switch statement in ToolContent
const switchMatch = toolsPageContent.match(/const ToolContent = \(\{ toolId \}: \{ toolId: string \}\) => \{([\s\S]+?)\};/);
const switchStr = switchMatch ? switchMatch[1] : '';
const caseMatches = switchStr.match(/case '([^']+)'/g);
const switchIds = caseMatches ? caseMatches.map(m => m.match(/'([^']+)'/)[1]) : [];

const missingInSwitch = toolIds.filter(id => !switchIds.includes(id));

console.log('Tools missing in ToolContent switch:');
console.log(missingInSwitch);
