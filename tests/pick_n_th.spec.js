const { test, expect } = require('@playwright/test');

test('localhost locator', async ({ page }) => {
  await page.goto('http://localhost:4567/pick');
  //await page.locator('button').click();
  // Click the third "Buy" button
  await page.locator(':nth-match(:text("Buy"), 3)').click();
  // Wait until all three buttons are visible
  await page.locator(':nth-match(:text("Buy"), 3)').waitFor();
});

