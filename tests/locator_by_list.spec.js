const { test, expect } = require('@playwright/test');

test('localhost locator', async ({ page }) => {
  await page.goto('http://localhost:4567/get_by_list');
  await expect(page
    .getByRole('listitem'))
    .toHaveText(['apple', 'banana', 'orange']);
  await expect(page.getByRole('listitem')).toHaveCount(3);
//  await page.getByText('orange').click();
  await page
    .getByRole('listitem')
    .filter({ hasText: 'orange' })
    .click();
 // await page.getByTestId('orange').click();
});
