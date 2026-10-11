const { test, expect } = require("@playwright/test");

test('Home Page', async ({ page }) => {

    //visit URL
    await page.goto('https://www.demoblaze.com/');

    //click on login button

    await page.locator('#login2').click();

    //provide user name 

    await page.locator("//input[@id='loginusername']").fill('pavanol');

    //provide password
    await page.locator("//input[@id='loginpassword']").fill('test@123');

    //click on login button 
    await page.locator("//button[@onclick='logIn()']").click();

    //verify the logout link personce 

    const logoulink = await page.locator('#logout2');
    await expect(logoulink).toBeVisible();

    await page.close();

});