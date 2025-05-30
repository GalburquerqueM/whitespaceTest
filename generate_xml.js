const { CucumberConverter } = require('cucumber-to-junit');

const converter = new CucumberConverter({
    markUndefinedAsFailed: true // undefined scenario steps will fail the test case
});

converter.convertToJunit('cucumber-report.json', 'cucumber-report.xml');
