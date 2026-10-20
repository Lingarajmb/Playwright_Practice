
const { test, expect } = require('@playwright/test');


test('handling table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');


    const tabel = page.locator('//table[@id="productTable"]'); // found the table 

    //1. Total number of Rows & Columns
    const Columns = await page.locator('//table[@id="productTable"]/descendant::th');
    console.log("Numbers of Columns is :", await Columns.count());
    expect(await Columns.count()).toBe(4);

    const Rows = await page.locator('//table[@id="productTable"]/descendant::tbody//tr');
    console.log("Number of Rows is : ", await Rows.count());
    expect(await Rows.count()).toBe(5);

    //2. Select check box for Product 4 (means by name you need to check the checkbox) // For Single Product 

    /*
    const matchedRow = Rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })
    await matchedRow.locator('//input[@type="checkbox"]').check();
    //await matchedRow.locator('input').check(); // this is also valide and working 
    await page.waitForTimeout(3000)

    */


    // 3. Select the multiple produts by using re-usable funcations  // For Multiple Products
    //check the funcation outside the test 
    //then call tere that reusable funcation 

    // await selectProduct(Rows, page, 'Smartphone');
    // await selectProduct(Rows, page, 'Tablet');
    // await selectProduct(Rows, page, 'Wireless Earbuds');


    //4. Print all the products  deatils using Loop
    /* for (let i = 0; i < await Rows.count(); i++) {
 
         const row = Rows.nth(i);
         const tds = row.locator('td')
 
         for (let j = 0; j < await Columns.count(); j++) {
             console.log(await tds.nth(j).textContent())
 
         }
 
     }
     await page.waitForTimeout(3000)
 
     */

    //5. read data from all the pages in the table (extract all the data form table)


    const pages = await page.locator('//ul[@id="pagination"]//li//a')
    console.log('Number of pages in the table :' + await pages.count());

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click()
        }

        for (let i = 0; i < await Rows.count(); i++) {

            const row = Rows.nth(i);
            const tds = row.locator('td')

            for (let j = 0; j < await Columns.count(); j++) {
                console.log(await tds.nth(j).textContent())

            }

        }
        await page.waitForTimeout(3000);

    }


});

async function selectProduct(Rows, page, name) {

    const matchedRow = Rows.filter({
        has: page.locator('td'),
        hasText: name
    });
    await matchedRow.locator('//input[@type="checkbox"]').check();
}