const { test, expect } = require('@playwright/test');

test('localhost locator', async ({ page }) => {
  await page.goto('http://localhost:4567/chaining_filters');
  const rowLocator = page.getByRole('listitem');

  await rowLocator
    .filter({ hasText: 'Mary' })
    .filter({ has: page.getByRole('button', { name: 'Say goodbye' }) })
    .screenshot({ path: 'screenshot.png' });
  const rows = page.getByRole('listitem');
  const texts = await rows.allTextContents();
  const count = await rows.count();
  for (let i = 0; i < count; ++i)
    console.log(await rows.nth(i).textContent());
  const texts_all = await rows.evaluateAll(
    list => list.map(element => element.textContent));

});
