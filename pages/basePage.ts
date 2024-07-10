import { Locator, Page, test, TestInfo } from "playwright/test";
export abstract class BasePage {

    readonly cookiePopup: Locator = this.page.locator('div[data-test-id="cookie-modal"]');
    readonly searchInput: Locator = this.page.locator('input[type="search"]');
    readonly searchButton: Locator = this.page.locator('svg[class="search_icon"]');

    protected constructor(public page: Page, public testInfo: TestInfo) {
    }

    async takeScreenshot(name: string) {
        await this.testInfo.attach(name, {
            body: await this.page.screenshot(),
            contentType: "image/png"
        })
    }

    async acceptCookieBanner() {
        await test.step(`Accept cookie banner`, async () => {
            await this.cookiePopup.getByTestId('cookie-accept-all-btn').click();
            await this.takeScreenshot('accepted cookie banner')
        })
    }

    async fillSearchInputAndClickSearch(searchText: string) {
        await test.step(`Fill search input with: ${searchText} and click search button`, async () => {
            await this.searchInput.pressSequentially(searchText, { delay: 50 });
            await this.searchButton.click();
            await this.takeScreenshot('clicked search button')
        })
    }
}