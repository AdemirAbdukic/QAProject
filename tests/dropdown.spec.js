const { test, expect } = require('@playwright/test');
test('dropdown', async ({ page }) => {

  await page.pause();  
  await page.goto('');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com');
  await page.locator('text=Dropdown').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/dropdown');
  await page.locator('select').selectOption('1');
  await expect(page.locator('#dropdown')).toHaveValue('1');

  });