

import { test, expect } from "@playwright/test";

test("LocatingMultipleElements", async ({ page }) => {

    //lunch your URL
    await page.goto('https://www.demoblaze.com/');

    //

    // const links = await page.$$('a')

    // for (const link of links) {
    //     const linktext = await link.textContent();
    //     console.log(linktext);
    // }

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

    const links = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for (const product of links) {
        const productText = await product.textContent();
        console.log(productText);

    }

})