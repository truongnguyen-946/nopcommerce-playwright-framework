import { test } from "../../fixtures/fixtures";
import { faker } from "@faker-js/faker";
import { expect } from "@playwright/test";


test.describe("My Product Reviews Page Tests", () => {
    test.beforeEach(async ({ menuHeader, myAccountSideBarPage }) => {
        await menuHeader.openMyAccountPage();
        await myAccountSideBarPage.clickOnMyProductReviewsLink();
    });


    test("User should be able to add a product review", async ({ menuHeader, computersPage, desktopsPage, productsDetailsPage, myAccountSideBarPage, myProductReviewsPage }) => {
        const reviewTitle = faker.lorem.sentence();
        const reviewText = faker.lorem.paragraph();
        const rating = faker.number.int({ min: 1, max: 5 });

        test.info().annotations.push({
            type: "description",
            description: "User should be able to add a product review"
        });

        await test.step("Navigate to product detail page and add a review", async () => {
            await menuHeader.openComputersPage();
            await computersPage.navigateToDesktopsCategory();
            const productName = "Build your own computer";
            await desktopsPage.navigateToProductDetail(productName);
            await productsDetailsPage.clickOnAddYourReview();
            await productsDetailsPage.setReviewTitle(reviewTitle);
            await productsDetailsPage.setReviewText(reviewText);
            await productsDetailsPage.setRating(rating);
            await productsDetailsPage.submitReview();
        });

        await test.step("Verify that the review is added successfully and appears in My Product Reviews", async () => {

            const successMessage = await productsDetailsPage.getReviewSuccessMessageText();
            expect(successMessage).toContain("Product review is successfully added.");
            await menuHeader.closeNotificationBar();

            await menuHeader.openMyAccountPage();
            await myAccountSideBarPage.clickOnMyProductReviewsLink();
            const titleReview = await myProductReviewsPage.getProductReviewTitleByIndex(0);
            const contentReview = await myProductReviewsPage.getProductReviewContentByIndex(0);
            const productNameReview = await myProductReviewsPage.getProductReviewInfoNameProductByIndex(0);
            const datedReview = await myProductReviewsPage.getProductReviewInfoDateByIndex(0);

            expect(titleReview).toContain(reviewTitle);
            expect(contentReview).toContain(reviewText);
            expect(productNameReview).toBe("Build your own computer");
            expect(datedReview).toBeTruthy();
        });
    });
});


