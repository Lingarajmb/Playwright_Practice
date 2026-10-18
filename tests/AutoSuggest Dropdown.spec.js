
// import { test, expect } from "@playwright/test";


// test('Handle bootstrap dropdown', async ({ page }) => {

//     await page.goto("https://www.redbus.in/");

//     // await page.locator("//input[@id='srcinput']").fill("Bengaluru");
//     // await page.waitForSelector("//div[@class='listHeader___815346']");

//     // const fromCityOption = await page.$$("//div[@class='listHeader___815346']")

//     // for (let value of fromCityOption) {

//     //     const option = await value.textContent()
//     //     //console.log(option);
//     //     if (option.includes('Anand Rao Circle')) {

//     //         await value.click();
//     //         break;
//     //     }

//     // }


//     await page.locator("//input[@id='destinput']").fill("Borivali East, Mumbai");
//     await page.waitForSelector("//div[@class='leftContent___96af88']/child::div[@class='listHeader___815346']");

//     const ToCityOption = await page.$$("//div[@class='leftContent___96af88']/child::div[@class='listHeader___815346']")

//     for (let toValue of ToCityOption) {

//         const abc = await toValue.textContent()
//         console.log(abc);
//         // if (option.includes('Anand Rao Circle')) {

//         //     await value.click();
//         //     break;
//         // }

//     }




//     await page.waitForTimeout(5000);  // here we are pusing the test for 5000 milisec

//     //div [@aria-label='Anand Rao Circle']




// });

import { test, expect } from "@playwright/test";

test('Handle bootstrap dropdown', async ({ page }) => {

    await page.goto("https://www.redbus.in/");

    // ---------- FROM ----------
    await page.locator("//input[@id='srcinput']").fill("Anand");
    await page.waitForSelector("//div[contains(@class,'listHeader')][contains(text(),'Anand Rao Circle')]");

    const fromCityOption = await page.$$("//div[contains(@class,'listHeader')]");

    for (let value of fromCityOption) {
        const option = await value.textContent();
        if (option.includes('Anand Rao Circle')) {
            await value.click();
            break;
        }
    }

    // ---------- TO ----------
    await page.locator("//input[@id='destinput']").focus();
    await page.locator("//input[@id='destinput']").pressSequentially("mumb", { delay: 100 });

    // wait for the MUMBAI result, not just any list
    await page.waitForSelector("//div[contains(@class,'listHeader')][contains(text(),'Thane West, Mumbai')]");

    const ToCityOption = await page.$$("//div[contains(@class,'listHeader')]");

    for (let toValue of ToCityOption) {
        const abc = await toValue.textContent();
        console.log(abc);
        if (abc.includes('Thane West, Mumbai')) {
            await toValue.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
});