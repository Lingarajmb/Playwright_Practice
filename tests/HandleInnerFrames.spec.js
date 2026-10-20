
//syntax
// const parentFrame = page.frame({ url: /frame_3\.html/ });

// const children = parentFrame.childFrames();   // Frame[]

// console.log(children.length);                 // number of child frames
// console.log(children[0].url());               // URL of first child

// await children[0].locator("input").click();   // use the child like any frame




import { test, expect } from "@playwright/test";


test("LocatingMultipleElements", async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frameElement = await page.waitForSelector("frame[src='frame_3.html']");
    const parentFrame = await frameElement.contentFrame();
    const children = parentFrame.childFrames(); // Frame[]
    //console.log("Number of nested frames are : ", children.length);   // number of child frames
    //console.log(children[0].url());

    await children[0].locator("//div[@role='radio' and @aria-label='Hi, I am the UI.Vision IDE']").click();

    await page.waitForTimeout(3000);
});
