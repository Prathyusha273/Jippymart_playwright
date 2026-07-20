import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

import { DashboardPage } from '../pages/DashboardPage';


test.setTimeout(120000);

test('Logout from Jippy Mart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigate();
    await loginPage.login('superadmin', 'superadmin');

    await dashboardPage.logout();

    await expect(page).toHaveURL(/login/);
});