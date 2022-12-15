const { test, expect } = require('@playwright/test');

test('localhost locator', async ({ page }) => {
  await page.goto('http://localhost:4567/selector');
  //await page.locator('button').click();
  await page.locator('button:visible').click();
  await page.locator('button >> visible=true').click();
});

