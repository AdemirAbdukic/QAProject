const { test, expect } = require('@playwright/test');

test('Checkboxes', async ({ page }) => {
  await page.goto('');
  await page.pause();
  await page.locator('text=Checkboxes').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/checkboxes');
  await page.locator('text=checkbox 1 checkbox 2').click();
  await page.locator('input[type="checkbox"]').first().check();
  await page.locator('input[type="checkbox"]').nth(1).uncheck();
  await page.locator('input[type="checkbox"]').nth(1).check();
  await page.locator('input[type="checkbox"]').first().uncheck();
  await page.locator('input[type="checkbox"]').nth(1).uncheck();
});