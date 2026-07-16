
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameTextbox =this.page.getByRole('textbox', { name: 'Username' });

        this.passwordTextbox = this.page.getByRole('textbox', { name: 'Password' });

        this.rememberMeCheckbox = this.page.getByRole('checkbox');

        this.loginButton = this. page.getByRole('button', { name: 'LOGIN' });
    }
    async navigate() {
        await this.page.goto('http://srv1617582.hstgr.cloud:3005/login');


    }
    async login(username, password) {

        await this.usernameTextbox.fill(username);
        await this.passwordTextbox.fill(password);
        await this.rememberMeCheckbox.check();
        await this.loginButton.click();

    }
}