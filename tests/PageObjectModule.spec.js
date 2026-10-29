

// const { test, expect } = require('@playwright/test');
// import { LoginPage } from '../pages/LoginPage';
// import { HomePage } from '../pages/HomePage';

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');

test('test1', async ({ page }) => {


    //login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol', 'test@123');
    // await page.waitForTimeout(3000);


    //home
    const Home = new HomePage(page);
    await Home.addProductToCart('Nexus 6');
    await Home.gotoCart();


    //await Home.waitForTimeout(3000);
    //logout


})
