import { Locator, Page, test, TestInfo } from "@playwright/test";
import { BasePage } from "./basePage";

export class SearchResultPage extends BasePage {
    readonly firstSearchListItem: Locator = this.page.locator('div[class="indexes__ContentWrapper-wklrsw-113 bPsjms"] li').first();

    constructor(page: Page, testInfo: TestInfo) {
        super(page, testInfo)
    }

    async getPriceOfFirstListItem() {
        await test.step(`Get price of first list item`, async () => {
            const price = await this.firstSearchListItem.locator('span[data-locator="zth-price"]').textContent();
            await this.takeScreenshot('get price of first item')
            return price
        })
    }

    async clickOnFirstListItem() {
        await test.step(`Click on first list item`, async () => {
            await this.firstSearchListItem.click();
            await this.takeScreenshot('clicked first list item')
        })
    }
}