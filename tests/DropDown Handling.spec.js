
import { test, expect } from "@playwright/test";

test('DropDown Handling', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');


    //multiple ways to handle the 1 dropdown and with one option select 
    //one dropDown and only one option can select type dropdown 
    //that also we have select the multiple ways

    // 1.label
    //await page.locator("//select[@id='country']").selectOption({ label: "India" }); // Label

    //2.By text 
    //await page.locator("//select[@id='country']").selectOption('India');
    //await page.selectOption("//select[@id='country']", 'india'); //Shortcut  way for By text

    //3.By value
    //await page.locator("//select[@id='country']").selectOption({ value: 'usa' })

    //4.By index
    //await page.locator("//select[@id='country']").selectOption({ index: 1 });


    //5. by using looping statement
    // const options = await page.$$("//select[@id='country']/child::option");
    // for (const option of options) {
    //     let value = await option.textContent();

    //     if (value.includes('France')) {
    //         await page.selectOption("//select[@id='country']", value);
    //         break;
    //     }
    //}  

    // 1. Create an array to store all dropdown option elements
    // 2. Use a for...of loop to iterate through each option
    // 3. Store each option's text in a variable using .textContent()
    // 4. Use an if condition to check whether the value includes 'France'
    // 5. If the condition matches, select the dropdown option using page.selectOption()
    // 6. Use break to stop the loop after finding France


    //Aressertions
    //---------------

    //how to check the total nu,bers of options in dropdown

    //1. check number of option in dropdown - Approch1 (.toHaveCount())
    // const options = await page.locator("//select[@id='country']/child::option");
    // await expect(options).toHaveCount(10);

    //2. check number of option in dropdown - Approch2 (.length)
    // const options = await page.$$("//select[@id='country']/child::option");
    // console.log("Number of array length is : " + options.length);----this is optional for this asserstion 
    // await expect(options.length).toBe(10);


    //3. check presence of value in the dropdown - Approch1
    // const content = await page.locator("//select[@id='country']").textContent();
    // await expect(content.includes('India')).toBeTruthy();
    //4. check presence of value in the dropdown - Approch2

    const options = await page.$$("//select[@id='country']/child::option");
    let status = false;
    for (const option of options) {

        let value = await option.textContent();
        if (value.includes('France')) {

            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();



    await page.waitForTimeout(5000);  // here we are pusing the test for 5000 milisec

});