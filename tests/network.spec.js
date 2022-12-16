//// @ts-check

//(async () => {
//  const browser = await playwright.webkit.launch();  // firefox Or 'chromium' or 'webkit'.
//  // Create a new incognito browser context.
//  const context = await browser.newContext();
//  // Create a new page in a pristine context.
//  const page = await context.newPage();
//  await page.goto('https://example.com');

//  // Gracefully close up everything
//  await context.close();
//  await browser.close();
//})();
const playwright = require('@playwright/test');
const launchOptions = {
  proxy: {
    server: 'https://doveip.com/index.php?s=/index/login.html&lang=en-us',
    //server: 'localhost:1090',
    username: 'bigbanana666',
    password: 'bigbanana888'
  }
};
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
