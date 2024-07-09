import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

const textToSearch = 'diablo 4 pc';

// zrobić to później jako Fixture
test.beforeEach("Bypass bot detection script", async ({ page }) => {
   await page.addInitScript("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
});

test('Check price of product', async ({ page }, testInfo) => {
   const pageManager = new PageManager(page);
   await pageManager.onMainPage().openMainPage();
   await pageManager.onMainPage().acceptCookieBanner();
   await pageManager.onMainPage().fillSearchInputAndClickSearch(textToSearch);
   const expectedProductPrice = await pageManager.onSearchResultPage().getPriceOfFirstListItem();
   await pageManager.onSearchResultPage().clickOnFirstListItem();
   const productPrice = await pageManager.onProductDetailsPage().getPrice();
   expect(expectedProductPrice).toBe(productPrice);
})
