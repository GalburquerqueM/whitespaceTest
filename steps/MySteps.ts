import {After, AfterAll, Given,Then} from "@cucumber/cucumber";
import * as puppeteer from "puppeteer";
import {expect} from "chai";


After(async function() {
    await this.browser.close();
});

Given("I navigate to angular website", async function() {
    this.browser = await puppeteer.launch({
        headless:false,
        args: [
            '--start-maximized',
            '--no-sandbox'
        ]
    });
    this.page = await this.browser.pages().then(e => e[0]);
    this.page.goto("https://angular.io/", { waitUntil: "networkidle2" });
});

Given("I click the LEARN ANGULAR button", async function() {
    await this.page.waitForSelector("xpath///button[contains (text(), 'Learn Angular')]", {visible: true})
        .then(button => button.click());
});

Given('I click the DOCS button', async function() {
    await this.page.waitForSelector('a[href="/docs"]', {visible: true})
    .then(button => button.click());
   // const docsIntroduction = await this.page.$('xpath///*[@id="secondaryNav"]/div/docs-navigation-list/ul/li[1]/div/span')
   // docsIntroduction.visible = true;
    //await this.page.waitForSelector('a[href="/Features that power your development"]', {visible: true});
    
    //const element = await this.page.$("xpath///span[contains(text(),'Introduction')]");
    //expect(element).to.not.to.be.null;
})

Given("I search for text Nothing", async function() {
       await this.page.waitForSelector('button span[aria-label*="search dialog"]')
           .then(button => button.click());
     const seachInput = await this.page.$('input.docs-text-field[placeholder="Search docs"]')
         await seachInput.focus();
    await seachInput.type("nothing");
    await this.page.keyboard.press("Enter");
}) 

Then("the text WELCOME TO THE ANGULAR TUTORIAL is displayed", async function () {
    await this.page.waitForSelector("xpath///h1[contains (text(),'Welcome to the Angular tutorial')]",{visible:true,timeout:15000});
    const element= await this.page.$("xpath///h1[contains (text(),'Welcome to the Angular tutorial')]");
    expect(element).to.not.be.null;
});

//Preview
Then("the section PREVIEW is displayed", async function () {
    await this.page.waitForSelector("xpath///span[contains (text(), 'Preview')]",{visible:true,timeout:15000});
    const element = await this.page.$("xpath///span[contains(text(),'Preview')]");
    expect(element).to.not.be.null;
    });

Then("the section HOW TO USE THIS TUTORIAL is displayed",async function () {
    await this.page.waitForSelector('a[href*="how-to-use-this-tutorial"]',{visible:true,timeout:15000});
});

Then("the text Introduction to the Angular Docs is displayed", async function () {
    await this.page.waitForSelector('[aria-label="Introduction"]'),{visible:true,timeout:15000};
    
}) 


