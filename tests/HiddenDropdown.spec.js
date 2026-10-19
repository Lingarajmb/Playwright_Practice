
const { test, expect } = require('@playwright/test');

test('Hidden DropDown test', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    await page.locator("//input[@name='username']").fill('Admin');
    await page.locator("//input[@name='password']").fill('admin123');
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(3000);

    //click on PIM
    await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][text()='PIM']").click();
    await page.waitForTimeout(3000);

    //click on dropdown
    await page.locator("//div[@class='oxd-grid-4 orangehrm-full-width-grid']/child::div[6]//div[@class='oxd-select-text--after']").click();
    await page.waitForTimeout(3000); // wait for the options

    const options = await page.$$("//div[@role='listbox']/child::div//span");
    for (let option of options) {

        const jobTitles = await option.textContent();
        //console.log(jobTitles);
        if (jobTitles.includes('QA Engineer')) {

            await option.click();
            break;
        }

    }

    await page.waitForTimeout(3000); // wait to see the selected option 


});