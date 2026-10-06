const { test, expect } = require("@playwright/test");

test('Home Page', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    //page title should be STORE
    const pageTitle = await page.title();
    console.log(`Page Title is : ${pageTitle}`);
    await expect(page).toHaveTitle('STORE');

    //page url should be https://www.demoblaze.com/
    const pageURL = await page.url();
    console.log(`Page URL is : ${pageURL}`);

    await expect(page).toHaveURL('https://www.demoblaze.com/');

    await page.close();

});