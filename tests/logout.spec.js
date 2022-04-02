const { test, expect } = require('@playwright/test');

test.use({
    storageState: 'aut_login.json'
})
test('Logout', async ({ page }) => {
    await page.goto('/secure');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
    await page.locator('i:has-text("Logout")').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
})