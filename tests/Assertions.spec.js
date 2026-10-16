const { test, expect } = require('@playwright/test');
const { exec } = require('node:child_process');

test('Assertions', async ({ page }) => {

    //open url
    await page.goto('https://demo.nopcommerce.com/register');

    //1) expect(page).toHaverTL() ---- page has URL 
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //2) expect(page).toHaveTitle()----- page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title');


    //3) expect(locator).toBeVisible()--------------Element is visible

    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //4) expect(locator).toBeEnabled()------ control is enabled
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled();

    //5) expect(locator).toBeChecked() --------------Radio/checkbox is checked

    //radio button
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click() // Select radio button
    await expect(maleRadioButton).toBeChecked()


    //check box
    const newsletterCheckbox = await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked()


    //6) expect(locator).toHaveAttribute()-------- Elements has Attribute
    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type', 'submit')


    //7) expect(locator).tohavetext()--------Element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register')//Full text

    //8) expecte(locatoer).toContainText()----------Element contains text
    await expect(await page.locator('.page-titel h1')).toHaveText('register')// partial text


    //9) expect(locator).toHaveValue(value) Input has a value
    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com')

    //10) expect(locator).toHaveCount()------List of elemenst has given length

    const options = await page.locator('select[name="DateOfBirthMonth"] option')
    await expect(options).toHaveCount(13)











})