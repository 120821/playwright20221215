const { test, expect } = require('@playwright/test');

test.only('localhost locator', async ({ context}) => {
  const page = await context.newPage();
  // 访问列表页面
  await page.goto("http://www.linlin.fun")
  const html = await page.content();
  console.log(await page.title());
  console.log(await page.url());
  //  console.log("====== html")
  // console.log(html);

  await page.waitForTimeout(5000);


  // 访问前10条博客
  for(var i = 0; i < 10; i++){
    console.log(i)
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      // This action triggers the new tab
      page.locator('text=2022').nth(i).click()
    ])
    console.log(await newPage.url());
    await page.waitForTimeout(5000);
  }

});

