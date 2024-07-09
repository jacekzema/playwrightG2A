import { Locator, Page, test } from "@playwright/test";
import { BasePage } from "./basePage";

export class SearchResultPage extends BasePage {
    readonly firstSearchListItem: Locator = this.page.locator('div[class="indexes__ContentWrapper-wklrsw-109 IdwMH"] li').first();

    constructor(page: Page) {
        super(page)
    }

    async getPriceOfFirstListItem() {
        await test.step(`Get price of first list item`, async () => {
            const price = await this.firstSearchListItem.locator('span[data-locator="zth-price"]').textContent();
            return price
        })
    }

    async clickOnFirstListItem() {
        await test.step(`Click on first list item`, async () => {
            await this.firstSearchListItem.click();
        })
    }

}