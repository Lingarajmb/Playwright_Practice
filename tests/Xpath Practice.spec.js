

import { test, expect } from "@playwright/test";

test("LocatingMultipleElements", async ({ page }) => {


    /*
Practice site 1: https://quotes.toscrape.com

This site is built for scraping practice. Try to write the XPath for each task before looking at the answers.

Select all quote texts. : answer :  "//div[@class='col-md-8']//span[@class='text']"
Select all author names. : 
Select only the first author name.
Select the quote text written by Albert Einstein.
Select all tags of the 3rd quote.
Select the quote blocks that have the tag love.
Select the Next button at the bottom.
Select the Login link by its text.
Select the “(about)” link next to Jane Austen.
Select every link whose href contains /tag/life.
    */


    //lunch your URL
    await page.goto('https://quotes.toscrape.com/');

    // await page.waitForSelector("//span[@class='text']");
    // const links = await page.$$("//span[@class='text']");
    // for (const product of links) {
    //     const productText = await product.textContent();
    //     console.log(productText);
    // }

    //Output ; 
    //“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”
    // “It is our choices, Harry, that show what we truly are, far more than our abilities.”
    // “There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”
    // “The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”
    // “Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”
    // “Try not to become a man of success. Rather become a man of value.”
    // “It is better to be hated for what you are than to be loved for what you are not.”
    // “I have not failed. I've just found 10,000 ways that won't work.”
    // “A woman is like a tea bag; you never know how strong it is until it's in hot water.”
    // “A day without sunshine is like, you know, night.”


    //-----------------------------------------------
    // Select all author names.  : //small[@class='author']

    // await page.waitForSelector("//small[@class='author']");
    // const links = await page.$$("//small[@class='author']");
    // for (const product of links) {
    //     const productText = await product.textContent();
    //     console.log(productText);
    // }

    //output :
    // Albert Einstein
    // J.K. Rowling
    // Albert Einstein
    // Jane Austen
    // Marilyn Monroe
    // Albert Einstein
    // André Gide
    // Thomas A. Edison
    // Eleanor Roosevelt
    // Steve Martin

    //--------------------------------------------------------    

    // Select only the first author name. : (//small[@class='author'])[1]

    // await page.waitForSelector("(//small[@class='author'])[1]");
    // const links = await page.$$("(//small[@class='author'])[1]");
    // for (const product of links) {
    //     const productText = await product.textContent();
    //     console.log(productText);
    // }

    //Output :
    //Albert Einstein

    //--------------------------------------------------------    

    // Select the quote text written by Albert Einstein. ://div[@class='quote'][.//small[text()='Albert Einstein']]/span[@class='text']

    // await page.waitForSelector("//div[@class='quote'][.//small[text()='Albert Einstein']]/span[@class='text']");
    // const links = await page.$$("//div[@class='quote'][.//small[text()='Albert Einstein']]/span[@class='text']");
    // for (const product of links) {
    //     const productText = await product.textContent();
    //     console.log(productText);
    // }

    //Output :
    //“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”
    // “There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”
    // “Try not to become a man of success. Rather become a man of value.”


    //--------------------------------------------------------    

    //Select all tags of the 3rd quote. : (//span[@class='text'])[3]


    // await page.waitForSelector("(//div[@class='quote'])[3]//a[@class='tag']");
    // const links = await page.$$("(//div[@class='quote'])[3]//a[@class='tag']");
    // for (const product of links) {
    //     const productText = await product.textContent();
    //     console.log(productText);
    // }

    //Output :
    //inspirational
    // life
    // live
    // miracle
    // miracles

    //--------------------------------------------------------    

    //Select the quote blocks that have the tag love. : //div[@class='quote']//div[@class='tags']//a[name : {Love}]

    await page.waitForSelector("//div[@class='quote'][.//a[text()='love']]");
    const links = await page.$$("//div[@class='quote'][.//a[text()='love']]");
    for (const product of links) {
        const productText = await product.textContent();
        console.log(productText);
    }

    //Output :









})
