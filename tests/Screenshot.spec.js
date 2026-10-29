
const { test, expect } = require('@playwright/test');

//Page Screenshot

test('Page Screenshot', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    await page.screenshot({
        path: '\screenshots/' + Date.now() + 'HomePage.png'
    });
});


//Full Screenshot

test('Full Page Screenshot', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    await page.screenshot({
        path: '\screenshots/' + Date.now() + 'FullPage.png', fullPage: true
    });
});



//Full Screenshot

test('Element Screenshot', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    await page.locator("(//div[@class='card h-100'])[1]").screenshot({
        path: '\screenshots/' + Date.now() + 'MacBook.png'
    });
});