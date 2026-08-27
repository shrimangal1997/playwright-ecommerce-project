import { test, expect } from '@playwright/test';

test('Verify Playwright homepage title', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

});


test('Verify Get started link is visible', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('link', { name: 'Get started' })
    ).toBeVisible();

});


test('Verify Get started navigation', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    await page.getByRole('link', { name: 'Get started' }).click();

    await expect(page).toHaveURL(/intro/);

});