//import type { Page } from "@playwright/test";
test('global context request has isolated cookie storage', async ({ page, context, browser, playwright }) => {
  // Create a new instance of APIRequestContext with isolated cookie storage.
  const request = await playwright.request.newContext();
  await context.route('https://www.github.com/', async (route) => {
    const response = await request.fetch(route.request());
    const responseHeaders = response.headers();

    const responseCookies = new Map(responseHeaders['set-cookie'].split('\n').map(c => c.split(';', 2)[0].split('=')));
    // The response will have 3 cookies in 'Set-Cookie' header.
    expect(responseCookies.size).toBe(3);
    const contextCookies = await context.cookies();
    // The browser context will not have any cookies from the isolated API request.
    expect(contextCookies.length).toBe(0);

    // Manually export cookie storage.
    const storageState = await request.storageState();
    // Create a new context and initialize it with the cookies from the global request.
    const browserContext2 = await browser.newContext({ storageState });
    const contextCookies2 = await browserContext2.cookies();
    // The new browser context will already contain all the cookies from the API response.
    expect(new Map(contextCookies2.map(({name, value}) => [name, value]))).toEqual(responseCookies);

    route.fulfill({
      response,
      headers: {...responseHeaders, foo: 'bar'},
    });
  });
  await page.goto('https://www.github.com/');
  await request.dispose();
});
