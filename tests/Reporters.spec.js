

const { test, expect } = require('@playwright/test');


test('test1', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle('Automation Testing Practice');
});

test('test2', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/#Photo%20Manager');
    await expect(page).toHaveTitle('Drag And Drop - GlobalSQA');
});
test('test3', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');
});