export class AdminUsersPage {
    constructor(page) {
        this.page = page;

        // Create Admin
        this.createAdminButton = page.getByRole('button', { name: '➕ Create Admin' });
        this.employeeName = page.getByRole('textbox', { name: 'Enter employee name' });
        this.email = page.getByRole('textbox', { name: 'Enter email' });
        this.mobile = page.getByRole('textbox', { name: 'Enter mobile number' });
        this.username = page.getByRole('textbox', { name: 'Enter username' });
        this.password = page.getByRole('textbox', { name: 'Enter password' });
        this.createEmployeeButton = page.getByRole('button', { name: 'Create Employee' });

        // Admin List
        this.adminListButton = page.getByRole('button', { name: '📋 Admin List' });
        this.searchUser = page.getByRole('textbox', { name: 'Search User...' });

        // Role checkboxes
        this.roleAdmin = page.locator('#role-2');
        this.roleMerchant = page.getByRole('checkbox', { name: 'ROLE_MERCHANT' });
        this.role23 = page.locator('#role-23');
        this.role24 = page.locator('#role-24');

        this.saveRoleButton = page.getByRole('button', { name: 'Save Role' });
    }

    async createAdmin(name, email, mobile, username, password) {
        await this.createAdminButton.click();
        await this.employeeName.fill(name);
        await this.email.fill(email);
        await this.mobile.fill(mobile);
        await this.username.fill(username);
        await this.password.fill(password);

        this.page.once('dialog', async dialog => {
            await dialog.dismiss();
        });

        await this.createEmployeeButton.click();
    }

    async openAdminList() {
        await this.adminListButton.click();
    }

    async searchAdmin(username) {
        await this.searchUser.fill(username);
    }

    async editAdmin(username) {
        const row = this.page.getByRole('row').filter({
            hasText: username
        });

        await row.getByRole('button', { name: 'Assign Role' }).click();
    }

    async assignRoles() {
        await this.roleAdmin.check();
        await this.roleMerchant.check();
        await this.role23.check();
        await this.role24.check();
        await this.role23.uncheck();
        await this.role24.uncheck();

        
// await this.saveRoleButton.click()
    }

    async saveRole() {
        this.page.once('dialog', async dialog => {
            await dialog.dismiss();
        });

        await this.saveRoleButton.click();
    }
}


0