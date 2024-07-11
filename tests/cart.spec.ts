import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

const textToSearch: string = process.env.SEARCH_ITEM;

test.beforeEach("Bypass bot detection script", async ({ page }) => {
   await page.addInitScript("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})");
   await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9'
   });
});

test(`Check price of product: ${textToSearch}`, async ({ page }, testInfo) => {
   const pageManager = new PageManager(page, testInfo);
   await pageManager.onMainPage().openMainPage();
   await pageManager.onMainPage().acceptCookieBanner();
   await pageManager.onMainPage().fillSearchInputAndClickSearch(textToSearch);
   await pageManager.onSearchResultPage().clickOnFirstListItem();
   const expectedProductPrice = await pageManager.onProductDetailsPage().getPrice();
   await pageManager.onProductDetailsPage().clickAddToCart();
   const totalProductPrice = await pageManager.onYourCartPage().getTotalPrice();
   expect(expectedProductPrice).toBe(totalProductPrice);
})