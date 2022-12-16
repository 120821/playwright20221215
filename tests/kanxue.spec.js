const { test, expect } = require('@playwright/test');

test.only('localhost locator', async ({ context}) => {
  const page = await context.newPage();
  await page.goto("https://www.kanxue.com/")
  const html = await page.content();
  console.log(await page.title());
  console.log(await page.url());
  //console.log("====== html")
  //console.log(html);
  await page.waitForTimeout(5000);
  page.locator('text=加载更多').first().click()
  console.log(await page.title());
  console.log(await page.url());
  page.locator('text=加载更多').first().click()
  console.log('=== div content')
  const div = page.locator('div .tab-content').textContent();
  //await page.locator('article:has(div.promo)').textContent();
  console.log(await page.title());
  console.log(await page.url());
  console.log("====== html")
  console.log(div)
  //console.log(await page.content());
  await page.waitForTimeout(5000);
});

