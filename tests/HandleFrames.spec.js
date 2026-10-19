import { test, expect } from "@playwright/test";

test("LocatingMultipleElements", async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // check how many frames are there total in that website 

    const allfroms = await page.frames();
    console.log("Number of frames :", allfroms.length);

    //Approch 01 : using name or URL
    //const var = await page.frames('name'); // for this we don't have name 
    //but we have url (note find frames usl and mouse right click and copy the link )
    // const frame1 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1" })
    // await frame1.fill('//input[@name="mytext1"]', 'hello')

    // await page.waitForTimeout(5000);

    //Approch 02 : using frame locator

    const inputbox = await page.frameLocator('frame[src="frame_1.html"]').locator('//input[@name="mytext1"]');
    inputbox.fill("hello");

    await page.waitForTimeout(5000);

});

