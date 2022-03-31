const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
    
  await page.goto('');
  await page.pause();
  await page.locator('text=Form Authentication').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('tomsmith');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('S');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('Super');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('SuperS');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('SuperSecret');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('SuperSecretP');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('SuperSecretPassword!');
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
});