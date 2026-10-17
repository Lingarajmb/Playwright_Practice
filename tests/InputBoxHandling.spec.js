
import { test, expect } from "@playwright/test";

test('Input Box Handling', async ({ page }) => {


    page.goto('https://testautomationpractice.blogspot.com/');


    //Input Box--- for first name or any names
    await expect(await page.locator("//input[@id='name']")).toBeVisible(); //.toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();

    // file the filed with value in Inputbox
    await page.locator("//input[@id='name']").fill('Jhon');

    ////input[@id='male']



    await page.waitForTimeout(5000);  // here we are pusing the test for 5000 milisec



})