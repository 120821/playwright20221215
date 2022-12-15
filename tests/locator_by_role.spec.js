const { test, expect } = require('@playwright/test');

test('localhost locator', async ({ page }) => {
  await page.goto('http://localhost:4567/');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/localhost/);
  await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible()

  await page.getByRole('checkbox', { name: 'Subscribe' }).check();

  await page.getByRole('button', { name: /submit/i }).click();
});
