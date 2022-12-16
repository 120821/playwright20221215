const { test, expect } = require('@playwright/test');

test.only('localhost locator', async ({ context}) => {
  const page = await context.newPage();
  await page.goto("https://www.kanxue.com/")
  const html = await page.content();
  console.log(await page.title());
  console.log(await page.url());
  console.log("====== html")
  console.log(html);

  for(var i = 0; i<5; i++){
    console.log(i)
    await page.waitForTimeout(5000);
    page.locator('text=加载更多').first().click()
    console.log(await page.title());
    console.log(await page.url());
    // 打印的数据不是需要的div数据
    // 是这样的
    // Promise { <pending> }
    // 先注释了
    //const div = page.locator('div .tab-content').textContent();
    //console.log('=== div content')
    //console.log(div)
    //
    //console.log(await page.content());
    await page.waitForTimeout(5000);
  }


});

