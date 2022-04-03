const { test, expect } = require('@playwright/test');

test('Add/remove elements', async ({ page }) => {

  await page.goto('');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
  await page.locator('text=Add/Remove Elements').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/add_remove_elements/');
  await page.locator('text=Add Element').click();
  await expect(page.locator('text=Delete').first()).toBeVisible();
  await expect(page.locator('text=Delete')).toHaveCount(1);
  await page.locator('text=Add Element').click();
  await expect(page.locator('text=Delete').nth(1)).toBeVisible();
  await expect(page.locator('text=Delete')).toHaveCount(2);
  await page.locator('text=Add Element').click();
  await expect(page.locator('text=Delete').nth(2)).toBeVisible();
  await expect(page.locator('text=Delete')).toHaveCount(3);
  await page.locator('text=Add Element').click();
  await expect(page.locator('text=Delete').nth(3)).toBeVisible();
  await expect(page.locator('text=Delete')).toHaveCount(4);
  await page.locator('text=Delete').nth(3).click();
  await expect(page.locator('text=Delete').nth(3)).toBeHidden();
  await expect(page.locator('text=Delete')).toHaveCount(3);
  await page.locator('text=Delete').first().click();
  await expect(page.locator('text=Delete').nth(2)).toBeHidden();
  await expect(page.locator('text=Delete')).toHaveCount(2);

});