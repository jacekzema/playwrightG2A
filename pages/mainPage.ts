import { Locator, Page, test } from "@playwright/test";
import { BasePage } from "./basePage";

export class MainPage extends BasePage {
    private mainPageURL = 'https://www.g2a.com';

    constructor(page: Page) {
        super(page)
    }

    async openMainPage() {
        await test.step(`Open main page`, async () => {
            await this.page.goto(this.mainPageURL);
        })
    }
}

