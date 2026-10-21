
const { test, expect } = require('@playwright/test');

test('Mouse Right Click', async ({ page }) => {


    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    const button = await page.locator("//span[normalize-space()='right click me']");


    //Right click action 
    await button.click({ button: 'right' });
    //await button.click({ button: 'left' });

    await page.waitForTimeout(3000);
})