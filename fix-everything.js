const fs = require('fs');
let content = fs.readFileSync('lib/site-content.ts', 'utf8');

// Revert the wrong replacements
content = content.replace('image: "/assets/sector-offices.jpg"', 'image: "/assets/team-training-landscape.jpg"');
content = content.replace('image: "/assets/sector-residential.jpg"', 'image: "/assets/deep-cleaning-new.jpg"');
content = content.replace('image: "/assets/sector-industrial.jpg"', 'image: "/assets/industrial-inspection.jpg"');
content = content.replace('image: "/assets/sector-commercial.jpg"', 'image: "/assets/facade-cleaning.jpg"');
content = content.replace('image: "/assets/sector-retail.jpg"', 'image: "/assets/project-p4.jpg"');

// Now, correctly replace the sectors array at the end of the file.
// Let's use regex to find and replace the exact string blocks for sectors.

content = content.replace(
  '    image: "/assets/facade-cleaning.jpg"\n  },\n  {\n    titleEn: "Residential & HOA"',
  '    image: "/assets/sector-commercial.jpg"\n  },\n  {\n    titleEn: "Residential & HOA"'
);

content = content.replace(
  '    image: "/assets/deep-cleaning-new.jpg"\n  },\n  {\n    titleEn: "Administrative Buildings & Offices"',
  '    image: "/assets/sector-residential.jpg"\n  },\n  {\n    titleEn: "Administrative Buildings & Offices"'
);

content = content.replace(
  '    image: "/assets/team-training-landscape.jpg"\n  },\n  {\n    titleEn: "Industrial & Workshops"',
  '    image: "/assets/sector-offices.jpg"\n  },\n  {\n    titleEn: "Industrial & Workshops"'
);

content = content.replace(
  '    image: "/assets/industrial-inspection.jpg"\n  },\n  {\n    titleEn: "Exhibitions & Stores"',
  '    image: "/assets/sector-industrial.jpg"\n  },\n  {\n    titleEn: "Exhibitions & Stores"'
);

content = content.replace(
  '    image: "/assets/project-p4.jpg" \n  }\n];',
  '    image: "/assets/sector-retail.jpg"\n  }\n];'
);

// Fallback in case of trailing spaces:
content = content.replace(
  '    image: "/assets/project-p4.jpg"\n  }\n];',
  '    image: "/assets/sector-retail.jpg"\n  }\n];'
);

fs.writeFileSync('lib/site-content.ts', content);
