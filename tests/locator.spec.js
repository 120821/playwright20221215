const { test, expect } = require('@playwright/test');

test('localhost locator', async ({ page }) => {
  await page.goto('http://localhost:4567/');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/localhost/);
  await page.getByRole('button', { name: 'Sign in' }).click();

  // 每次将定位器用于操作时，都会在页面中找到一个最新的 DOM 元素。
  // 在下面的代码片段中，底层 DOM 元素将被定位两次，一次在每个动作之前。
  // 这意味着如果 DOM 由于重新渲染而在调用之间发生变化，则将使用与定位器对应的新元素。
  const locator = page.getByRole('button', { name: 'Sign in' })

  await locator.hover();
  await locator.click();

  //  所有创建定位器的方法，如 page.getByLabel(text[, options])，
  //  也可用于 Locator 和 FrameLocator 类，因此您可以链接它们并迭代缩小定位器的范围。
  //  TODO
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
