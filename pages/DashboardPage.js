export class DashboardPage {

    constructor(page) {
        this.page = page;

        this.dashboard = page.getByText('Dashboard');
        this.accessControl = page.getByText('Access Control');
        this.roles = page.getByText('Roles');
        this.adminUsers = page.getByText('Admin Users');
        this.logoutButton = page.getByText('Logout');
    }

    async openRoles() {
        await this.accessControl.click();
        await this.roles.click();
    }

    async openAdminUsers() {
        await this.accessControl.click();   
        await this.roles.click();

        await this.adminUsers.click();
    }
      async logout() {
        await this.logoutButton.click();
    }
}