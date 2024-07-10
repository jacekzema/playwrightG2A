import { Page, TestInfo } from "@playwright/test";
import { MainPage } from "./mainPage";
import { SearchResultPage } from "./searchResultPage";
import { ProductDetailsPage } from "./productDetailsPage"

export class PageManager {
    readonly page: Page;
    readonly testInfo: TestInfo;
    readonly mainPage: MainPage;
    readonly searchResultPage: SearchResultPage;
    readonly productDetailsPage: ProductDetailsPage;

    constructor(page: Page, testInfo: TestInfo) {
        this.page = page;
        this.testInfo = testInfo;
        this.mainPage = new MainPage(this.page, this.testInfo);
        this.searchResultPage = new SearchResultPage(this.page, this.testInfo);
        this.productDetailsPage = new ProductDetailsPage(this.page, this.testInfo);
    }

    onMainPage() {
        return this.mainPage
    }

    onSearchResultPage() {
        return this.searchResultPage
    }

    onProductDetailsPage() {
        return this.productDetailsPage
    }
}