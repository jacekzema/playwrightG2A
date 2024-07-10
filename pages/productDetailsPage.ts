import { Locator, Page, test, TestInfo } from "@playwright/test";
import { BasePage } from "./basePage";

export class ProductDetailsPage extends BasePage {
    readonly productPrice: Locator = this.page.locator('div[data-locator="product-info"]').locator('span[data-locator="zth-price"]').first();

    constructor(page: Page, testInfo: TestInfo) {
        super(page, testInfo)
    }

    async getPrice() {
        await test.step(`Get item price`, async () => {
            const price = await this.productPrice.textContent();
            await this.takeScreenshot('get item price')
            return price
        })
    }
}