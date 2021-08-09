const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const name = await page.innerText('.navbar__title');
  expect(name).toBe('Playwright');
});

test('duckduckgo is loading', async ({ page }) => {
  await page.goto('https://start.duckduckgo.com/');
  const duckLogo = await page.isVisible('#logo_homepage_link');

  expect(duckLogo).toBe(true);
});

test('Test that search is working', async ({ page }) => {
  await page.goto('https://start.duckduckgo.com/');
  await page.waitingForSelector('#logo_homepage_link');
  await page.fill('#search_from_input_homepage', 'Test');
  await page.click('#search_button_homepage');
  const result1TextContent = await page.textContent('#r1-0');

  expect(result1TextContent).toContain('Test')
});

test('Test that search is working recorded by inspector', async ({ page }) => {
  await page.goto('https://start.duckduckgo.com/');
  await page.waitingForSelector('#logo_homepage_link');
});

test('Test that search is working2', async ({ page }) => {
  await page.goto('https://start.duckduckgo.com/');
  await page.waitingForSelector('#logo_homepage_link');
  await page.fill('#search_from_input_homepage', 'Test');
  await page.click('#search_button_homepage');
  const result1TextContent = await page.textContent('#r1-0');

  expect(result1TextContent).toContain('Test')
});