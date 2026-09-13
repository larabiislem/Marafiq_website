const fs = require('fs');
let content = fs.readFileSync('lib/site-content.ts', 'utf8');

// The new services array to insert
const newServices = fs.readFileSync('services_replacement.ts', 'utf8');

// Find where "export const services = [" starts
const startIdx = content.indexOf('export const services = [');

// Find where the next exported array "export const projectItems = [" starts
const nextExportIdx = content.indexOf('export const projectItems = [');

// We need to cut out everything between startIdx and nextExportIdx, 
// and replace it with the new services array.

let newContent = content.substring(0, startIdx) + newServices + "\n\n" + content.substring(nextExportIdx);
fs.writeFileSync('lib/site-content.ts', newContent);
