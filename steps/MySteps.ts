import {After, AfterAll, Given,Then} from "@cucumber/cucumber";
import * as puppeteer from "puppeteer";
import {expect} from "chai";


After(async function() {
    await this.browser.close();
});

Given("I navigate to angular website", async function() {
    this.browser = await puppeteer.launch({
        headless:false,
        defaultViewport: null,
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

Then("the text ANGULAR TUTORIAL is displayed", async function () {
    await this.page.waitForSelector("xpath///h1[contains (text(),'Welcome to the Angular tutorial')]",{visible:true,timeout:15000});
    const element= await this.page.$("xpath///h1[contains (text(),'Welcome to the Angular tutorial')]");
    expect(element).to.not.be.null;
});


