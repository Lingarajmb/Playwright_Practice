

const { test, expect, chromium } = require('@playwright/test');

test.skip('Handling pages or windows or tabs', async () => {

    // const browser = chromium.launch();
    // const context = browser.context();

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();


    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    await page2.goto('https://testautomationpractice.blogspot.com/');
    await expect(page2).toHaveTitle("Automation Testing Practice");

    //if you want check the how many pages 
    const allpages = context.pages();
    console.log("Number of pages is : " + allpages.length);
});


test('Handling Multiple pages or windows or tabs', async () => {


    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    const pagePromise = context.waitForEvent('page')
    await page1.locator("//a[@href='http://www.orangehrm.com'][@target='_blank']").click();


    const page2 = await pagePromise;
    await expect(page2).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');


    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);

    await browser.close();

});