
import { test, expect } from "@playwright/test";

test('Radio Button Handling', async ({ page }) => {


    page.goto('https://testautomationpractice.blogspot.com/');


    //Single elemet Check box handle  
    await page.locator("//input[@class='form-check-input' and @id='wednesday']").check();
    expect(await page.locator("//input[@class='form-check-input' and @id='wednesday']")).toBeChecked();
    expect(await page.locator("//input[@class='form-check-input' and @id='wednesday']").isChecked).toBeTruthy();

    await page.waitForTimeout(5000);  // here we are pusing the test for 5000 milisec

    //multiple elemet Check box handle  
    // 1) create the array for All check box elements
    //2) call that array in for Loop and in for loop only check the each elememts.
    //For example :
    const checkBoxLocators = ["//input[@class='form-check-input' and @id='wednesday']",
        "//input[@class='form-check-input' and @id='tuesday']",
        "//input[@class='form-check-input' and @id='saturday']"
    ];

    // Select all checkboxes form the Array
    for (const checkBox of checkBoxLocators) {
        await page.locator(checkBox).check();
    }

    await page.waitForTimeout(5000);  // here we are pusing the test for 5000 milisec


    // Verify all checkboxes are selected
    for (const checkBox of checkBoxLocators) {
        await expect(page.locator(checkBox)).toBeChecked();
    }

    await page.waitForTimeout(5000);  // here we are pusing the test for 5000 milisec


    //if you want to uncheck the checkbox

    for (const checkBox of checkBoxLocators) {
        await page.locator(checkBox).uncheck();

    }

    await page.waitForTimeout(5000);  // here we are pusing the test for 5000 milisec

});