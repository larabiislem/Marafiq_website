const fs = require('fs');
let content = fs.readFileSync('lib/site-content.ts', 'utf8');

const oldPartners = `  { name: "Partner 1", logo: "/assets/partner1.png" },
  { name: "Partner 2", logo: "/assets/partner2.png" },
  { name: "Partner 3", logo: "/assets/partner3.png" },
  { name: "Partner 4", logo: "/assets/partner4.png" },
  { name: "Partner 5", logo: "/assets/partner5.png" },
  { name: "Partner 6", logo: "/assets/partner6.png" },`;

const truePartners = `  { name: "HEX", logo: "/assets/HEX.png" },
  { name: "Al Zamil", logo: "/assets/ALZAMEL.png" },
  { name: "Zamillight", logo: "/assets/alzamilight.png" },
  { name: "KDK", logo: "/assets/kdk.png" },
  { name: "Masdar", logo: "/assets/masdar.png" },
  { name: "Tredex", logo: "/assets/Tredex.png" },
  { name: "Ideal Standard", logo: "/assets/idealstandar.png" },
  { name: "hansgrohe", logo: "/assets/hansgrohe.png" },
  { name: "Entrecôte Café de Paris", logo: "/assets/entrecote.png" },
  { name: "Classico Diet", logo: "/assets/classico-diet.png" },
  { name: "Opinion", logo: "/assets/opinion.jpg" },
  { name: "COSMO", logo: "/assets/cosmo.png" },`;

content = content.replace(oldPartners, truePartners);
fs.writeFileSync('lib/site-content.ts', content);
