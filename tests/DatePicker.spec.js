import { test, expect } from "@playwright/test";


test("LocatingMultipleElements", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //direct feed to calender
    //    await page.fill('//input[@id="datepicker"]', '03/15/2025');

    //Date Picker
    const year = '2031';
    const month = 'March';
    const date = '1';


    await page.click('//input[@id="datepicker"]') //opens calender

    while (true) {
        const currentyear = await page.locator('//span[@class="ui-datepicker-year"]').textContent();
        const currentMonth = await page.locator('//span[@class="ui-datepicker-month"]').textContent();

        if (currentyear == year && currentMonth == month) {
            break;
        }

        await page.locator('//span[@class="ui-icon ui-icon-circle-triangle-e"]').click(); //Next button
        // await page.locator('//span[@class="ui-icon ui-icon-circle-triangle-w"]').click(); //Prev

    }

    // const dates = await page.$$('//a[@aria-current="false"]'); // all dates default element found

    //Date Selection using loop
    // for (const dt of dates) {
    //     if (await dt.textContent() == date) {
    //         await dt.click();
    //         break;
    //     }
    // }


    //Date Selection - without loop
    await page.click(`//a[@aria-current="false"][text()='${date}']`);



});

