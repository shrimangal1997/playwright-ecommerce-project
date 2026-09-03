import {test,expect} from '@playwright/test';
test ('Verify Login action',async ({page}) =>
{ await page.goto ("https://the-internet.herokuapp.com/");
    // ==========================================
    // CLICK - Form Authentication
    // ==========================================
    await page.getByText('Form Authentication').click();
    const userName = page.getByLabel ('Username');
    const passWord = page.getByLabel ('Password');
    await expect(userName).toBeVisible();
    await expect(passWord).toBeVisible();
    // ==========================================
    // FILL - UserName & Password
    // ==========================================
    await userName.fill("tomsmith");
    await passWord.fill("SuperSecretPassword!");
    const loginButton = page.getByRole('button', { name: /Login/ });
    await expect(loginButton).toBeEnabled();
    await loginButton.click();
    // ==========================================
    // DROPDOWN - Option1
    // ==========================================
   await page.goto('https://the-internet.herokuapp.com/');
   await page.getByText('Dropdown').click();
   const dropdown = page.locator('#dropdown');
   await dropdown.selectOption({    label: 'Option 1'});
   await expect(dropdown).toHaveValue(/1/);
    // ==========================================
    // HOVER - Choose profile 1
    // ==========================================
   await page.goto('https://the-internet.herokuapp.com/');
   await page.getByRole('link', { name: 'Hovers' }).click();
   const mouseOver = page.getByRole('img', { name: 'User Avatar' }).first();
   await mouseOver.hover();
   await page.getByRole('link', { name: 'View profile' }).click();
   const user1 =  page.getByRole('heading', { name: 'Not Found' });
   console.log('Profile page shows Not Found');
   // ==========================================
    // CHECK - 1stCheckBox
    // ==========================================
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Checkboxes' }).click();
  const firstCheckbox = page.getByRole('checkbox').first();
  await firstCheckbox.check();
  await expect(firstCheckbox).toBeChecked();
  await firstCheckbox.uncheck();
  await expect(firstCheckbox).not.toBeChecked();




})