var fs = require('fs');
const manifest = JSON.parse(fs.readFileSync('module.json', 'utf8'));
const tagVersion = process.argv[2]; // first argument is node, second is the filename of the script, third is the version we pass in our workflow.
if (!tagVersion || !tagVersion.startsWith('v')) {
  console.error(`Invalid version specified: ${tagVersion}`);
  process.exitCode = 1;
} else {
  manifest.version = tagVersion.substring(1); // strip the 'v'-prefix
  fs.writeFileSync('module.json', JSON.stringify(manifest, null, 2)); // pretty print JSON back to module.json
}
