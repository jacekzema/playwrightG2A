import { Locator, Page, test } from "@playwright/test";
import { BasePage } from "./basePage";

export class ProductDetailsPage extends BasePage {
    readonly productPrice: Locator = this.page.locator('div[data-locator="product-info"]').locator('span[data-locator="zth-price"]');

    constructor(page: Page) {
        super(page)
    }

    async getPrice() {
        await test.step(`Get item price`, async () => {
            const price = await this.productPrice.textContent();
            return price
        })
    }
}