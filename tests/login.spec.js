import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Jippy Mart Login Page', async ({ page }) => {
const loginPage = new LoginPage(page);

await loginPage.navigate();
await loginPage.login('superadmin', 'superadmin');

   


      // Print current URL
    console.log('Current URL:', page.url());

    await expect(page).toHaveURL(/dashboard/);
});