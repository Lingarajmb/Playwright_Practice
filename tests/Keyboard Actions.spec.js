
const { test, expect } = require('@playwright/test');


test('KeyBoard Actions', async ({ page }) => {


    await page.goto('https://gotranscript.com/text-compare')

    //text feed to Textbox 1
    await page.locator('//textarea[@name="text1"]').fill("Wellcome to Automation") // or   await page.type('//textarea[@name="text1"]', ("Wellcome to Automation"));

    //Copy from Textbox 1 -> Paste to textbox 2

    //Ctrl + A -- Select the text 
    await page.keyboard.press('Control+A');

    //Ctrl + C -- Copy the text 
    await page.keyboard.press('Control+C');

    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');


    //Ctrl + V -- paste the text
    await page.keyboard.press('Control+V');



    await page.waitForTimeout(3000);





})