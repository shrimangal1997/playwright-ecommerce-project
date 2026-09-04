import {test,expect} from '@playwright/test';
test ('Verify Login action',async ({page}) =>
{ await page.goto ("https://the-internet.herokuapp.com/");
//========================================
//URL validation
//========================================
await expect (page).toHaveURL('https://the-internet.herokuapp.com/');
await page.getByText ('Form Authentication').click();
//========================================
//Title validation
//========================================
await expect (page).toHaveTitle('The Internet')
const loginButton = page.getByRole('button', { name: ' Login' });
await loginButton.click();
//========================================
// Exact Text validation
//========================================
const errorMessage = page.getByText('Your username is invalid! ×');
await expect (errorMessage).toHaveText(/invalid/)
const userName= page.getByLabel ('Username');
await userName.fill ('tomsmith');
//========================================
// Input value validation
//========================================
await expect(userName).toHaveValue ('tomsmith');
const password= page.getByLabel ('Password');
await password.fill ('SuperSecretPassword!');
await expect(password).toHaveValue ('SuperSecretPassword!');
const content = page.getByText(/This is where you can log into the secure area./)
//========================================
// Approx Text validation
//========================================
await expect (content).toContainText (/secure area/)
//========================================
// Element visible validation
//========================================
await expect (loginButton).toBeVisible(); 
await loginButton.click();
const successMessage = page.getByRole ('heading' ,{name: 'Welcome to the Secure Area'});
//========================================
// Approx Text validation
//========================================
await expect (successMessage).toContainText(/Welcome to the Secure Area/);
const logoutButton =page.getByRole('link', { name: 'Logout' });
//========================================
// Element visible validation
//========================================
await expect(logoutButton).toBeVisible();
await logoutButton.click();
const logOut= page.getByText('You logged out of the secure')
//========================================
// Approx Text validation
//========================================
await expect (logOut).toContainText('logged out')

})