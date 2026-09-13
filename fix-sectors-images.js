const fs = require('fs');
let content = fs.readFileSync('lib/site-content.ts', 'utf8');

// Replace old image paths with the new ones in the sectors array
content = content.replace('image: "/assets/facade-cleaning.jpg"', 'image: "/assets/sector-commercial.jpg"');
content = content.replace('image: "/assets/deep-cleaning-new.jpg"', 'image: "/assets/sector-residential.jpg"');
content = content.replace('image: "/assets/team-training-landscape.jpg"', 'image: "/assets/sector-offices.jpg"');
content = content.replace('image: "/assets/industrial-inspection.jpg"', 'image: "/assets/sector-industrial.jpg"');
content = content.replace('image: "/assets/project-p4.jpg"', 'image: "/assets/sector-retail.jpg"');

fs.writeFileSync('lib/site-content.ts', content);
