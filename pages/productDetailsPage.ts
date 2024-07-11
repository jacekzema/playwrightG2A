import { Locator, Page, test, TestInfo } from "@playwright/test";
import { BasePage } from "./basePage";

export class ProductDetailsPage extends BasePage {
    readonly productPrice: Locator = this.page.locator('div[data-locator="product-info"]').locator('span[data-locator="zth-price"]').first();
    readonly addToCartButton: Locator = this.page.locator('div[data-locator="product-info"]').locator('button[data-locator="ppa-payment__btn"]');
    readonly availableInAnAccountPopup: Locator = this.page.locator('div[data-test-id="dialog-content"]');
    readonly addToCartButtonInAvailableInAnAccountPopup: Locator = this.page.locator('button[data-test-id="primary-button"]');

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

    async clickAddToCart() {
        await test.step(`Click Add to cart and accept "Available in an account" if is visible`, async () => {
            await this.addToCartButton.click();
            await this.takeScreenshot('click Add to cart')
            if (await this.availableInAnAccountPopup.isVisible()) {
                await this.addToCartButtonInAvailableInAnAccountPopup.click()
                await this.takeScreenshot('accept available in an account')
            }
        })
    }
}