const { test, expect } = require('@playwright/test');

test('localhost locator', async ({ page }) => {
  await  page.goto("https://www.tafsirweb.com/3739-surat-yusuf-ayat-1.html")
  const html = await page.content();
  const pageText = await page.innerText('div');
  console.log("====== html")
  console.log(html);
  console.log("====== pageText")
  console.log(pageText);
});

