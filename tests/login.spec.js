const { test, expect } = require('@playwright/test');

test('Form Authentication', async ({ page }) => {
    
  await page.goto('');
  await page.pause();
  await page.locator('text=Form Authentication').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
  await page.locator('#username').click();
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').click();
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
});