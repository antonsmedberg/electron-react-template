const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
const version = packageJson.version;

if (process.env.GH_TOKEN) {
  const repo = process.env.GITHUB_REPOSITORY;
  
  try {
    console.log(`Deleting existing release v${version}...`);
    execSync(`gh release delete v${version} --yes`, { stdio: 'inherit' });
    console.log(`Deleted existing release v${version}.`);
  } catch (error) {
    console.log(`No existing release v${version} found or failed to delete. Error: ${error.message}`);
  }

  try {
    console.log(`Deleting existing tag v${version}...`);
    execSync(`git push origin :refs/tags/v${version}`, { stdio: 'inherit' });
    console.log(`Deleted existing tag v${version}.`);
  } catch (error) {
    console.log(`No existing tag v${version} found or failed to delete. Error: ${error.message}`);
  }

  try {
    console.log(`Creating new release v${version}...`);
    execSync(`gh release create v${version} --draft --title "v${version}"`, { stdio: 'inherit' });
    console.log(`Release v${version} created successfully.`);
  } catch (error) {
    console.error('Failed to create GitHub release:', error);
    process.exit(1);
  }
} else {
  console.log('GH_TOKEN not set. Skipping release management.');
}
