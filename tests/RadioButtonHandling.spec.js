
import { test, expect } from "@playwright/test";

test('Radio Button Handling', async ({ page }) => {


    page.goto('https://testautomationpractice.blogspot.com/');



    //radio button 
    await page.locator("//input[@id='male']").check(); // Male
    //await page.locator("//input[@id='male']").check(); // Male
    await expect(page.locator("//input[@id='male']")).toBeChecked();
    await expect(page.locator("//input[@id='male']").isChecked()).toBeTruthy();
    //expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();

    expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();  //Female
    //expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy(); // Female here we are check that female radio button should not be selected. first we are checking that is that checked (.isChecked() and we are validating is female radio button should be false becasue male button is enabled  for that reson (.toBeFalsy()) this funcation return the boolean value.



    await page.waitForTimeout(5000);  // here we are pusing the test for 5000 milisec




});