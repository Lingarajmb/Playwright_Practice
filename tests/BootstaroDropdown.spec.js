


import { test, expect } from "@playwright/test";


test('Handle bootstrap dropdown', async ({ page }) => {

    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

    // Click on the multiselect dropdown to open it 
    await page.locator(".multiselect").click();

    // Locate all options within the dropdown
    const options = await page.locator("ul>li label input");

    // Assert that there are 11 options available
    await expect(options).toHaveCount(11);

    await page.waitForTimeout(5000);  // here we are pusing the test for 5000 milisec


    // Select multiple options from the dropdown
    await options.nth(0).click(); // Select the first option
    await options.nth(2).click(); // Select the third option

});









