const { test, expect } = require('@playwright/test');

test("codegentest", async ({ page }) => {
  // const browser = await chromium.launch({
  //   headless: false
  // });
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/dashboard/);

  await expect(
    page.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();


}); 