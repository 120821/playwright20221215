const { firefox, webkit } = require('playwright');

(async () => {
  const browser = await firefox.launch();  // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto('http://example.com');
  // other actions...
  await page.getByText('More').click();
  await browser.close();
})();
