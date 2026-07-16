import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AdminUsersPage } from '../pages/AdminUsersPage';




test.setTimeout(120000);

test('Create Admin User', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const adminUsersPage = new AdminUsersPage(page);

    const username = `dev${Date.now()}`;

    await loginPage.navigate();
    await loginPage.login('superadmin', 'superadmin');

    await dashboardPage.openAdminUsers();

    await adminUsersPage.createAdmin(
        username,
        `${username}@gmail.com`,
        '9988776655',
        username,
        'dev@123'
    );

    await adminUsersPage.openAdminList();

    await adminUsersPage.searchAdmin(username);

    await adminUsersPage.editAdmin(username);

    await adminUsersPage.assignRoles();

    await adminUsersPage.saveRole();
});