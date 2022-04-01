const { test, expect } = require('@playwright/test');

test('Checkboxes', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com');
  await page.pause();
  await page.locator('text=Checkboxes').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/checkboxes');
  await page.locator('input[type="checkbox"]').first().check();
  await expect(page.locator('input[type="checkbox"]').first()).toBeChecked;
  await page.locator('input[type="checkbox"]').nth(1).uncheck();
  await expect(page.locator('input[type="checkbox"]').nth(1)).not.toBeChecked;
  await page.locator('input[type="checkbox"]').nth(1).check();
  await expect(page.locator('input[type="checkbox"]').nth(1)).toBeChecked;
});