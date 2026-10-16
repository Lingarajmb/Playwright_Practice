
import { test, expect } from "@playwright/test";

test("LocatingMultipleElements", async ({ page }) => {

    //lunch your URL
    await page.goto('https://www.flipkart.com/samsung-galaxy-s25-fe-5g-jetblack-128-gb/p/itm90e887b150eea?pid=MOBHQCH6FPTX5FZ2&marketplace=FLIPKART&param=6532&pageUID=1791737798679');

    //div[@class='faikzn']//div//div[@class='v1zwn21n v1zwn2a _1psv1zeb9 _1psv1ze0 _1psv1zedi _1psv1zeg0']


    await page.waitForSelector("//div[@class='faikzn']//div//div[@class='v1zwn21n v1zwn2a _1psv1zeb9 _1psv1ze0 _1psv1zedi _1psv1zeg0']");

    const links = await page.$$("//div[@class='faikzn']//div//div[@class='v1zwn21n v1zwn2a _1psv1zeb9 _1psv1ze0 _1psv1zedi _1psv1zeg0']");

    for (const product of links) {
        const productText = await product.textContent();
        console.log(productText);
    }

})

