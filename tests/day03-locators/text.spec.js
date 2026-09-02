import { test, expect } from '@playwright/test';

test('Locate elements using getByText', async ({ page }) => {
    await page.goto('https://playwright.dev');


    const content = page.getByText('One API to drive Chromium,');

    await expect(content).toBeVisible();
});