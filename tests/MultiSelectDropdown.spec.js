
import { test, expect } from "@playwright/test";

test('DropDown Handling', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');


    //Select multiple options from multi select Dropdown 
    //how to select
    //    await page.selectOption("//select[@id='colors']", ['Blue', 'red', 'Yellow']); // here you can abserve if value lower case also select the upper ase in dropdown. that mean incase sensitive


    //How to validate
    //1. check number of optons in dropdown
    // const options = await page.locator("//select[@id='colors']/child::option")
    // await expect(options).toHaveCount(7);

    //2. check number of optons in dropdown using JS Array 
    // const options = await page.$$("//select[@id='colors']/child::option")
    // console.log("Number of length of Color Array is : " + options.length);
    //await expect(options.length).toBe(7);



    //3. check the persence of value in dropDown
    const constent = await page.locator("//select[@id='colors']").textContent();
    //await expect(constent.includes('Black')).toBeTruthy();---- this shold fail bcase we don't have option Black in dropdown 
    await expect(constent.includes('Black')).toBeFalsy();



















    // await page.waitForTimeout(3000);  // here we are pusing the test for 5000 milisec

});