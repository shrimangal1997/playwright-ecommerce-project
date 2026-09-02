import { test, expect } from '@playwright/test';

test('Locate input using getByPlaceholder', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    const todoInput = page.getByPlaceholder('What needs to be done?');

    await expect(todoInput).toBeVisible();

    await todoInput.fill('Practice Playwright Locators');

    await expect(todoInput).toHaveValue('Practice Playwright Locators');
});