import {After, AfterAll, Given} from "@cucumber/cucumber";
import * as puppeteer from "puppeteer";


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

Given("I click the LEARN MORE button", async function() {
    await this.page.waitForSelector("xpath///a[contains (text(), 'Learn more')]", {visible: true})
        .then(button => button.click());
});
