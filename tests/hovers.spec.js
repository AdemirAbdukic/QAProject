const { test, expect } = require('@playwright/test');

test('Hovers', async ({ page }) => {

  await page.pause()
  await page.goto('');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
  await page.locator('text=Hovers').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/hovers');
  await page.locator('img[alt="User Avatar"]').first().hover();
  await expect(page.locator('text=name: user1')).toBeVisible;
  await page.locator('img[alt="User Avatar"]').nth(1).hover();
  await expect(page.locator('text=name: user2')).toBeVisible;
  await page.locator('img[alt="User Avatar"]').nth(2).hover();
  await expect(page.locator('text=name: user3')).toBeVisible;

});