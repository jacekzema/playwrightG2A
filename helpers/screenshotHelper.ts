import { Page } from "playwright"

export async function takeScreenshotAndAddToReport(nameOfAttachment: string, page: Page, testInfo) {
    await testInfo.attach(`${nameOfAttachment}`, {
        body: await page.screenshot(),
        contentType: "image/png",
    })
}