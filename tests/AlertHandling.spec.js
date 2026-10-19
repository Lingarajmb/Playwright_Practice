

const { test, expect } = require('@playwright/test');


test.skip("Alter dailog handling", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    //Enbaling Dailog window handler
    page.on('dailog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('i am an Alter box!');
        await dialog.accept();      // closed by using OK button 
        //await dialog.dissmiss();    //closed by using closed button
    });
    await page.click("//button[@id='alertBtn']")
    await page.waitForTimeout(5000);
});


test("confirmation Dialog handling by OK or Cancel", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enable the dialog handler
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toContain('Press a button!');

        //await dialog.accept(); // Click OK
        await dialog.dismiss(); // click cancel
    });

    await page.click("//button[@id='confirmBtn']");

    await expect(page.locator("//p[@id='demo']"))
        //  .toHaveText("You pressed OK!");
        .toHaveText("You pressed Cancel!");
});



test.skip('prompt dialog', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enable the dialog handler
    page.on('dialog', async (dialog) => {

        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toContain('Please enter your name');
        expect(dialog.defaultValue()).toBe('Harry Potter');

        await dialog.accept('Jhon');
    });

    await page.click("//button[@id='promptBtn']");

    await expect(page.locator("//p[@id='demo']"))
        .toHaveText("Hello Jhon! How are you today?");

});


