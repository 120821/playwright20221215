const { test, expect } = require('@playwright/test');

test('xz aliyun pages', async({ page })=>{
  //const page = await context.newPage();
  await page.goto("https://xz.aliyun.com/tab/4")
  // title of existing page
  console.log(await page.title());
  console.log(await page.url());

  await page.waitForTimeout(5000);
  await page.locator('text=下一页').click()
  console.log(await page.title());
  console.log(await page.url());

  await page.waitForTimeout(5000);
  await page.locator('text=下一页').click()
  console.log(await page.title());
  console.log(await page.url());

  await page.waitForTimeout(5000);
  await page.locator('text=下一页').click()
  console.log(await page.title());
  console.log(await page.url());

  await page.waitForTimeout(5000);
  await page.locator('text=下一页').click()
  console.log(await page.title());
  console.log(await page.url());

  await page.waitForTimeout(5000);
  await page.locator('text=下一页').click()
  console.log(await page.title());
  console.log(await page.content());
  console.log(await page.url());
})
