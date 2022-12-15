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
  /*
  const locator = page
    .frameLocator('#my-frame')
    .getByRole('button', { name: 'Sign in' });

  await locator.click();
  */
  // create a locator
  // const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  // await getStarted.click();

  // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
});
