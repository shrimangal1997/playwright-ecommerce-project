import {test,expect} from '@playwright/test';
test('Verify installation page heading', async ({ page }) => {
await page.goto ('https://playwright.dev/')
expect(page).toHaveURL (/playwright/)
await page.getByRole('link', { name: 'Get started' }).click();

   const Title= await expect(page).toHaveTitle(/Install/);
await console.log (Title)
})
