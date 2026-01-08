import { Page } from "@playwright/test";


export class ProductDetailPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get addYourReviewLink() {
        return this.page.locator("a[href='#addreview']");
    }

    get reviewTitleInput() {
        return this.page.locator("#AddProductReview_Title");
    }

    get reviewTextInput() {
        return this.page.locator("#AddProductReview_ReviewText");
    }

    get submitReviewButton() {
        return this.page.locator("button[name='add-review']");
    }

    get reviewSuccessMessage() {    
        return this.page.locator("#bar-notification p");
    }

    async clickOnAddYourReview() {
        await this.addYourReviewLink.click();
    }

    async setReviewTitle(title: string) {
        await this.reviewTitleInput.fill(title);
    }

    async setReviewText(text: string) {
        await this.reviewTextInput.fill(text);
    }

    async submitReview() {
        await this.submitReviewButton.click();
    }

    async setRating(rating: number) {
        const ratingLocator = this.page.locator(`.rating-options input[value='${rating}']`);
        await ratingLocator.check();
    }

    async getReviewSuccessMessageText(): Promise<string> {
        return await this.reviewSuccessMessage.textContent() ?? "";
    }
}