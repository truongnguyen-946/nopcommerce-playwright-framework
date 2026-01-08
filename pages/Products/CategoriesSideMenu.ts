import { Page } from "@playwright/test";

export class CategoriesSideMenu {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get computersLink() {
        return this.page.locator(".side-2 a[href='/computers']");
    }

    get desktopsLink() {
        return this.page.locator(".side-2 a[href='/desktops']");
    }

    get notebooksLink() {
        return this.page.locator(".side-2 a[href='/notebooks']");
    }

    get softwareLink() {
        return this.page.locator(".side-2 a[href='/software']");
    }

    get electronicsLink() {
        return this.page.locator(".side-2 a[href='/electronics']");
    }

    get cellPhonesLink() {
        return this.page.locator(".side-2 a[href='/cell-phones']");
    }

    get cameraPhotoLink() {
        return this.page.locator(".side-2 a[href='/camera-photo']");
    }

    get othersLink() {
        return this.page.locator(".side-2 a[href='/others']");
    }

    get apparelLink() {
        return this.page.locator(".side-2 a[href='/apparel']");
    }

    get shoesLink() {
        return this.page.locator(".side-2 a[href='/shoes']");
    }

    get clothingLink() {
        return this.page.locator(".side-2 a[href='/clothing']");
    }

    get accessoriesLink() {
        return this.page.locator(".side-2 a[href='/accessories']");
    }
}