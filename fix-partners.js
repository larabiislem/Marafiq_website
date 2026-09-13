const fs = require('fs');
let content = fs.readFileSync('lib/site-content.ts', 'utf8');

const partnersCode = `
export const partners = [
  { name: "Partner 1", logo: "/assets/partner1.png" },
  { name: "Partner 2", logo: "/assets/partner2.png" },
  { name: "Partner 3", logo: "/assets/partner3.png" },
  { name: "Partner 4", logo: "/assets/partner4.png" },
  { name: "Partner 5", logo: "/assets/partner5.png" },
  { name: "Partner 6", logo: "/assets/partner6.png" },
];
`;

content = content.replace('export const projectItems', partnersCode + '\nexport const projectItems');
fs.writeFileSync('lib/site-content.ts', content);
