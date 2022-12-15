const { test, expect } = require('@playwright/test');

test('localhost locator', async ({ page }) => {
  await page.goto('http://localhost:4567/get_by_label');
  // Matches <span>
  page.getByText('world')

  // Matches first <div>
  page.getByText('Hello world')

  // Matches second <div>
  page.getByText('Hello', { exact: true })

  // Matches both <div>s
  page.getByText(/Hello/)

  // Matches second <div>
  page.getByText(/^hello$/i)
  await page.getByLabel('Password').fill('secret');
});
