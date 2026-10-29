
// exports.HomePage =

//     class HomePage {

//         constructor(page) {
//             this.page = page; // assinging the class varibale to page variable
//             this.productListLoctor = '//div[@id="tbodyid"]//h4[@class="card-title"]';
//             this.addTocartBtnLocator = '//a[@class="btn btn-success btn-lg"]';
//             this.cart = '//a[@id="cartur"]';
//         }


//         async addProductToCart(productName) {
//             await this.page.waitForSelector(this.productListLocator);

//             const productList = await this.page.$$(this.productListLoctor);
//             for (const product of productList) {
//                 if (productName === await product.textContent()) {
//                     await product.click();
//                     break;
//                 }
//             }
//             await this.page.on('dialog', async (dialog) => {
//                 if (dialog.message().includes('added')) { await dialog.accept(); }
//             });
//             await this.page.locator(this.addTocartBtnLocator).click();
//         }

//         async gotoCart() {
//             await this.page.locator(this.cart).click();
//         }
//     }



// exports.HomePage =

//     class HomePage {

//         constructor(page) {
//             this.page = page;
//             this.productListLocator = '//div[@id="tbodyid"]//h4[@class="card-title"]';
//             this.addToCartBtnLocator = '//a[@class="btn btn-success btn-lg"]';
//             this.cart = '//a[@id="cartur"]';
//         }

//         // async addProductToCart(productName) {
//         //     // wait until products are loaded (they load dynamically)
//         //     await this.page.waitForSelector(this.productListLocator);

//         //     const productList = await this.page.$$(this.productListLocator);
//         //     for (const product of productList) {
//         //         if (productName === (await product.textContent()).trim()) {
//         //             await product.click();
//         //             break;
//         //         }
//         //     }

//         //     // register the dialog handler BEFORE the click that triggers it
//         //     this.page.once('dialog', async (dialog) => {
//         //         if (dialog.message().includes('added')) {
//         //             await dialog.accept();
//         //         }
//         //     });

//         //     await this.page.locator(this.addToCartBtnLocator).click();
//         // }

//         async addProductToCart(productName) {
//             await this.page
//                 .locator(this.productListLocator)
//                 .filter({ hasText: productName })
//                 .click();

//             const dialogPromise = this.page.waitForEvent('dialog');
//             await this.page.locator(this.addToCartBtnLocator).click();
//             const dialog = await dialogPromise;
//             await dialog.accept();
//         }

//         async gotoCart() {
//             await this.page.locator(this.cart).click();
//         }
//     }





exports.HomePage =

    class HomePage {

        constructor(page) {
            this.page = page;
            this.addToCartBtnLocator = '//a[@class="btn btn-success btn-lg"]';
            this.cart = '//a[@id="cartur"]';
        }

        async addProductToCart(productName) {
            // click the product LINK, not the h4
            await this.page.getByRole('link', { name: productName, exact: true }).click();

            // wait for the product page to open
            await this.page.waitForURL(/prod\.html/);

            // set up the dialog wait BEFORE the click that triggers it
            const dialogPromise = this.page.waitForEvent('dialog');
            await this.page.locator(this.addToCartBtnLocator).click();
            const dialog = await dialogPromise;
            await dialog.accept();
        }

        async gotoCart() {
            await this.page.locator(this.cart).click();
        }
    }