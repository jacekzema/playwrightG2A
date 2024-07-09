import { Page } from "@playwright/test";
import { MainPage } from "./mainPage";
import { SearchResultPage } from "./searchResultPage";
import { ProductDetailsPage } from "./productDetailsPage"

export class PageManager {
    readonly page: Page;
    readonly mainPage: MainPage;
    readonly searchResultPage: SearchResultPage;
    readonly productDetailsPage: ProductDetailsPage;

    constructor(page: Page) {
        this.page = page;
        this.mainPage = new MainPage(this.page);
        this.searchResultPage = new SearchResultPage(this.page);
        this.productDetailsPage = new ProductDetailsPage(this.page);
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