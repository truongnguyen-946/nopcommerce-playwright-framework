import { Page } from "@playwright/test";
import { ComputersPage } from "./ComputersPage";

export class DesktopsPage extends ComputersPage {
    constructor(page: Page) {
        super(page);
    }
    async navigateToProductDetail(productName: string) { 
        const productLink = this.page.locator(`//h2[@class='product-title']//a[text()='${productName}']`);
        await productLink.click();
    }

    async addToCartProduct(productName: string) {
        const addToCartButton = this.page.locator(`//button[contains(@class,'product-box-add-to-cart-button')]//ancestor::div[@class='details']//a[text()='${productName}']`);
        await addToCartButton.click();
    }

}