const { test, expect } = require('@playwright/test');

test.only('verify multiple tabs', async({context})=>{
  const page = await context.newPage();
  await page.goto('https://www.jd.com/?d')
  await page.waitForTimeout(5000);
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    // This action triggers the new tab
    //page.getByText('（全8册，少年读史记，国学早启蒙。100余位历史人物传记，图文并茂，提高作文水平）').last().click();
    //page.waitForTimeout(5000);
    page.locator('text=史记少年版').first().click()
  ])
  const [showPage] = await Promise.all([
    context.waitForEvent('page'),
    // This action triggers the new tab
    //page.getByText('（全8册，少年读史记，国学早启蒙。100余位历史人物传记，图文并茂，提高作文水平）').last().click();
    //page.waitForTimeout(5000);
    page.locator('text=史记少年版').first().click()
  ])

  console.log(await showPage.title());
  console.log(await showPage.url());
  // title of new tab page
  console.log(await newPage.title());
  console.log(await newPage.url());
  // title of existing page
  console.log(await page.title());
  console.log(await page.url());
})
