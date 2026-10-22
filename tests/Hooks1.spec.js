
const { test, expect } = require('@playwright/test');

//Home page test
test('Home Page test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    //login
    await page.locator('//a[@id="login2"]').click();
    await page.locator('//input[@id="loginusername"]').fill('pavanol');
    await page.locator('//input[@id="loginpassword"]').fill('test@123');
    await page.locator("button[onclick='logIn()']").click();

    //Home page
    await page.waitForSelector('//div[@class="card h-100"]');
    const productes = await page.$$('//div[@class="card h-100"]');
    await expect(productes).toHaveLength(9);

    //logout
    await page.locator('//a[@id="logout2"]').click();
});



//Add a product to cart 
test('Add a product to cart test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    //login
    await page.locator('//a[@id="login2"]').click();
    await page.locator('//input[@id="loginusername"]').fill('pavanol');
    await page.locator('//input[@id="loginpassword"]').fill('test@123');
    await page.locator("button[onclick='logIn()']").click();

    //add product to cart
    await page.waitForSelector('//div[@class="card h-100"]');
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    await page.on('dialog', async (dailog) => {
        await expect(dailog.message()).toContain('Product added.');
        await dailog.accept();
    })

    //logout
    await page.locator('//a[@id="logout2"]').click();
});