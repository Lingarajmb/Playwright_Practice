

const { test, expect } = require('@playwright/test');


// test('Mouse Hover handling', async ({ page }) => {
//     await page.goto('https://testautomationpractice.blogspot.com/');

//     await page.locator('.dropbtn').hover();          // "Point Me" button
//     await page.locator('.dropdown-content a', { hasText: 'Laptops' }).hover();

//     await page.waitForTimeout(3000);
// });

test('Mosue Hover handling', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const desktop = await page.locator('//button[@class="dropbtn"]');
    const macbook = await page.locator("//a[normalize-space()='Laptops']");

    //mouse hover
    await desktop.hover();
    await macbook.hover();

    await page.waitForTimeout(5000);

})