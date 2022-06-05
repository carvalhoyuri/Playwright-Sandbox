import {chromium, devices, test } from "@playwright/test";

const iPhone = devices['iPhone 13 Pro Max'];

test.describe("Emulating Mobile Device", ()=>{
test("Acessing ", async({})=>{
    const browser = await chromium.launch({headless: false, slowMo: 300});
    const context = await browser.newContext({
        ...iPhone,
        permissions: ['geolocation'],
        geolocation: {latitude: 19.432608, longitude: -99.133209},
        locale:'fr-FR'
    });
    const page = await context.newPage();
    await page.goto('https://www.google.com/maps');
    await page.waitForTimeout(4000);
    await browser.close();
})



});
