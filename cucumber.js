let common = [
    'features/**/*.feature',                // Specify our feature files
    // '--format progress-bar',                // Load custom formatter
    // '--format node_modules/cucumber-pretty', // Load custom formatter,
    '--publish-quiet',

    '--require-module ts-node/register',
    '--require steps/**/*.ts',
    '-f json:cucumber-report.json'
].join(' ');

module.exports = {
    default: common
};
