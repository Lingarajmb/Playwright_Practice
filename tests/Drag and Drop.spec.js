


const { test, expect } = require('@playwright/test');

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/#Photo%20Manager');

    const frame = page.frameLocator("iframe[src*='photo-manager']"); //frame link : https://www.globalsqa.com/demoSite/practice/droppable/photo-manager.html

    //locators taken from frame link
    const Tatras = frame.locator("//ul[@id='gallery']/li[h5='High Tatras']");
    const trash = frame.locator("//div[@id='trash']");

    /*
    //Approch 1
    //drag and drop action 
    //drag 
    await Tatras.hover();
    await page.mouse.down();

    //drop
    await trash.hover();
    await page.mouse.up();
*/

    //Approch -2 
    await Tatras.dragTo(trash);


    await page.waitForTimeout(3000);
});





// await expect(frame.locator('#trash li')).toHaveCount(1);