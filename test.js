import pupper from "puppeteer"
import puppeteer from "puppeteer";

async function openWebPage() {
    const browser = await puppeteer.launch();
    await puppeteer.launch()
}
const page = await browser.newPage()
await page.goto('https://web.archive.org/web/20240131090205/https://angular.io/')
await page.browser.close()