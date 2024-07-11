import { Locator, Page, test, TestInfo } from "@playwright/test";
import { BasePage } from "./basePage";

export class YourCartPage extends BasePage {
    readonly totalPriceSpan: Locator = this.page.locator('div[class="indexes__Root1-tx0lkb-1 jrlmPp"]').locator('span[data-locator="zth-price"]').first();

    constructor(page: Page, testInfo: TestInfo) {
        super(page, testInfo)
    }

    async getTotalPrice() {
        await test.step(`Get total price`, async () => {
            const price = await this.totalPriceSpan.textContent();
            await this.takeScreenshot('Get total price')
            return price
        })
    }
}