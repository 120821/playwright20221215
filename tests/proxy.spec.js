const playwright = require('playwright');
const { test, expect } = require('@playwright/test');

const launchOptions = {
  proxy: {
    server: 'https://doveip.com/index.php?s=/index/login.html&lang=en-us',
    //server: 'localhost:1090',
    username: 'bigbanana666',
    password: 'bigbanana888'
  }
};

console.info("=hihihi")

test('has title', async ({ page }) => {
  await page.goto('https://linlin.fun/');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

/*
(async () => {
  const defaultBrowser = await playwright['chromium'].launch({});
  const context = await defaultBrowser.newContext();
  const page = await context.newPage();
  await page.goto('https://froxy.com/api/detect-ip');
  console.log('chromium without proxy:', await page.textContent("*"));
  await defaultBrowser.close();

  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browser = await playwright[browserType].launch(launchOptions);
    const context = await browser.newContext();
    const page = await context.newPage();
    try {
      await page.goto('https://froxy.com/api/detect-ip');
      console.log(`${browserType} with proxy:`, await page.textContent("*"));
    } catch (e) {
      console.log(e);
    }
    await browser.close();
  }
})();
*/
