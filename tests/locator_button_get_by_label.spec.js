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
  await page
    .getByPlaceholder("name@example.com")
    .fill("playwright@microsoft.com");
  await expect(page.getByText('Welcome, John', { exact: true })).toBeVisible();
  // 设置精确匹配：
  await expect(page.getByText('Welcome, John', { exact: true })).toBeVisible();
  // 与正则表达式匹配：
  await expect(page.getByText(/welcome, [A-Za-z]+$/i)).toBeVisible();
  await page.getByAltText('playwright logo').click();
  await expect(page.getByTitle('Issues count')).toHaveText('25 issues');
  // 不修改config的时候，使用
  // // playwright.config.js
  // @ts-check

  /** @type {import('@playwright/test').PlaywrightTestConfig} */
  /*
  const config = {
    use: {
      testIdAttribute: 'data-pw'
    },
  };
  module.exports = config;
  */
  //  await page.getByTestId('directions').click();
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
