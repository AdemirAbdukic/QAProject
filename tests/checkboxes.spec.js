const { test, expect } = require('@playwright/test');

test('Checkboxes', async ({ page }) => {
  await page.goto('');
  await page.pause();
  await page.locator('text=Checkboxes').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/checkboxes');
  await page.locator('input[type="checkbox"]').first().check();
  await expect(page.locator('input[type="checkbox"]').first()).toHaveAttribute('checked','');
  await page.locator('input[type="checkbox"]').nth(1).uncheck();
  await page.locator('input[type="checkbox"]').nth(1).check();
  await expect(page.locator('input[type="checkbox"]').nth(1)).toBeChecked;
});