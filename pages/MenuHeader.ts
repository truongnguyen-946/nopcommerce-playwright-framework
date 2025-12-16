import { type Locator, type Page } from "@playwright/test";

/**
 * Page Object Model for the main header/menu navigation component.
 * Contains common navigation links available across the application.
 */
export class MenuHeader {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get registerLink() {
        return this.page.locator(".ico-register");
    }

    get loginLink() {
        return this.page.locator(".ico-login");
    }

    get wishlistLink() {
        return this.page.locator(".ico-wishlist");
    }

    get shoppingCartLink() {
        return this.page.locator(".ico-cart");
    }

    /**
     * Navigates to the registration page by clicking the register link.
     * Waits for the link to be visible before clicking.
     */
    async openRegisterPage(): Promise<void> {
        await this.registerLink.waitFor({ state: "visible" });
        await this.registerLink.click();
    }

    /**
     * Navigates to the login page by clicking the login link.
     * Waits for the link to be visible before clicking.
     */
    async openLoginPage(): Promise<void> {
        await this.loginLink.waitFor({ state: "visible" });
        await this.loginLink.click();
    }

    /**
     * Navigates to the wishlist page by clicking the wishlist link.
     * Waits for the link to be visible before clicking.
     */
    async openWishlistPage(): Promise<void> {
        await this.wishlistLink.waitFor({ state: "visible" });
        await this.wishlistLink.click();
    }

    /**
     * Navigates to the shopping cart page by clicking the shopping cart link.
     * Waits for the link to be visible before clicking.
     */
    async openShoppingCartPage(): Promise<void> {
        await this.shoppingCartLink.waitFor({ state: "visible" });
        await this.shoppingCartLink.click();
    }
}