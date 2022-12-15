const { test, expect } = require('@playwright/test');

test('localhost locator', async ({ page }) => {
  await page.goto('http://localhost:4567/get_by_id');
  await page.getByTestId('orange').click();
  //const banana = await page.getByRole('listitem').nth(1);

});
