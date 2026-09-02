

import { test, expect } from '@playwright/test';

test('Day 05 - Identify 5 elements using Playwright locators', async ({ page }) => {

  // 1. Open application
  await page.goto('https://playwright.dev/');

  // 2. Identify heading using getByRole
  const heading = page.getByRole('heading', {
    name: 'Playwright enables reliable'
  });

  await expect(heading).toBeVisible();

  // 3. Identify search box using getByPlaceholder
  const search = page.getByRole('button', { name: 'Search (Control+k)' });
  await search.click();
  const placeHolder = page.getByPlaceholder ('Search docs')

  await expect(placeHolder).toBeVisible();

  await placeHolder.click();
  await placeHolder.fill('Locator');

  // 4. Identify Locators link using getByRole
  const chooseLocator = page.getByRole('link', {
    name: 'Locators',
    exact: true
  });

  await chooseLocator.click();

  // 5. Identify text using getByText
  const locatorHeading = page.getByText('Locators are the central');

  await expect(locatorHeading).toBeVisible();

});