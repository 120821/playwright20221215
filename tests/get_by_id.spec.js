const { test, expect } = require('@playwright/test');

test('localhost locator', async ({ page }) => {
  await page.goto('http://localhost:4567/get_by_id');
  // wait for 1 second
  await page.waitForTimeout(5000);
  await page.getByTestId('orange').click();
  await page.waitForTimeout(3000);
  //const banana = await page.getByRole('listitem').nth(1);

});
