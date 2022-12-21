const { test, expect } = require('@playwright/test');

test('is a basic test wtesth the page', async ({ page }) => {
  await page.goto('https://playwright.dev/')
  const home = await page.waitForSelector('home-navigation');
  await home.innerText().toBe('🎭 Playwright');
});
