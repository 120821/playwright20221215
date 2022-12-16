const { test, expect } = require('@playwright/test');

test('localhost locator', async ({ page }) => {
  await page.goto('https://www.jd.com/?d')
  //await page.goto('https://item.jd.com/13119711.html')
  // wait for 1 second
  console.log(page.url());
  await page.waitForTimeout(5000);
  await page.getByText('史记少年版（全8册，少年读史记，国学早启蒙。100余位历史人物传记，图文并茂，提高作文水平）').first().click();
  console.log(page.url());
  context = await browser.new_context()
  console.log(context)

  await page.waitForTimeout(5000);
  const book = await page.getByRole('listitem').nth(1);
  await page.getByText('史记少年版（全8册，少年读史记，国学早启蒙。100余位历史人物传记，图文并茂，提高作文水平）').last().click();
  await page.waitForTimeout(5000);
  await page.getByText('史记少年版（全8册，少年读史记，国学早启蒙。100余位历史人物传记，图文并茂，提高作文水平）').last().click();
  await page.getByText('史记少年版（全8册，少年读史记，国学早启蒙。100余位历史人物传记，图文并茂，提高作文水平）').last().click();
  await page.getByText('史记少年版（全8册，少年读史记，国学早启蒙。100余位历史人物传记，图文并茂，提高作文水平）').last().click();
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  //const banana = await page.getByRole('listitem').nth(1);

});
