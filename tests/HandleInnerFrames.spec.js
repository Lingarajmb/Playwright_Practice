// import { test, expect } from "@playwright/test";

// test("LocatingMultipleElements", async ({ page }) => {

//     await page.goto('https://ui.vision/demo/webtest/frames/');

//     const frame3 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });
//     await frame3.locator("//input[@name='mytext1']").fill("wellcome");







//     await page.waitForTimeout(5000);

// });


import { test, expect } from "@playwright/test";

test("LocatingMultipleElements", async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = page.frameLocator("frame[src='frame_3.html']");
    // await frame3.locator("//input[@name='mytext3']").fill("wellcome");

    //nested frames 
    // const childFrame = await frames.childFrame();
    // await childFrame[0].locator('//div[@class="Od2TWd hYsg7c i9xfbb"]').click();

    const innerFrame = frame3.frameLocator("iframe");
    await innerFrame.locator('//div[@class="Od2TWd hYsg7c i9xfbb"]').click();


    await page.waitForTimeout(5000);
});