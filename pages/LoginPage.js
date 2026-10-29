
exports.LoginPage =

    class LoginPage {

        //constructor
        constructor(page) {
            this.page = page;
            this.loginlinkLocator = '//a[@id="login2"]';
            this.usernameLocator = '//input[@id="loginusername"]';
            this.passwordLocator = '//input[@id="loginpassword"]';
            this.loginButtonLocator = "//button[normalize-space()='Log in']";

        };

        // URL method 
        async gotoLoginPage() {
            await this.page.goto("https://www.demoblaze.com/");
        };

        // Login method 

        async login(username, password) {
            await this.page.locator(this.loginlinkLocator).click();
            await this.page.locator(this.usernameLocator).fill(username);
            await this.page.locator(this.passwordLocator).fill(password);
            await this.page.locator(this.loginButtonLocator).click();
            await this.page.locator('#nameofuser').waitFor({ state: 'visible' });
        };



    };