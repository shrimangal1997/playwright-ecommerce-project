import {test, expect} from '@playwright/test'
test ('Verify getByRole locators', async ({page})=>
{await page. goto ('https://playwright.dev/');
const getStartedButton = page. getByRole ('link', {name: 'get started'});
await expect (getStartedButton).toBeVisible();
})