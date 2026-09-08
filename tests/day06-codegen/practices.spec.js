import {test,expect} from '@playwright/test';
test ('Verify Login action',async ({page}) =>
{ await page.goto ("https://the-internet.herokuapp.com/");
//========================================
// Positive test case by CodeGen
//========================================
     
  await page.getByRole('link', { name: 'Form Authentication' }).click();
  const userName=  page.getByRole('textbox', { name: 'Username' });
   await expect(page.locator('#login')).toContainText('Username');
  await userName.fill('tomsmith');
  const passWord= page.getByRole('textbox', { name: 'Password' });
  await passWord.fill('SuperSecretPassword!');
  await expect(userName).toHaveValue('tomsmith');
  const loginButton = page.getByRole('button', { name: ' Login' });
  await loginButton.click();
  const successMessage= page.getByText('You logged into a secure area');
  await expect(successMessage).toContainText('You logged into a secure area! ×');
//========================================
// Negative test case by CodeGen
//=======================================
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Form Authentication' }).click();
  await userName.click();
  await userName.fill('tom');
  await passWord.click();
  await passWord.fill('super');
  await loginButton.click();
  const errorMessage= page.getByText('Your username is invalid! ×');
  await expect(errorMessage).toContainText('Your username is invalid! ×');
  //========================================
  // DropDown menu validation by CodeGen
  //=======================================
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Dropdown' }).click();
  const heading= page.getByRole('heading')
  await expect(heading).toContainText('Dropdown List');
  const dropDown= page.locator('#dropdown')
  await expect(dropDown).toContainText('Please select an option Option 1 Option 2');
  await page.locator('#dropdown').selectOption('1');
  await expect(page.locator('#dropdown')).toHaveValue('1');
 
  
});
