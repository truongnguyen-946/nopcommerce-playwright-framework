import { Page } from "@playwright/test";


export class ComputersPage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get desktopsCategoryLink() {
        return this.page.locator(".title a[href='/desktops']");                
    }

    get notebooksCategoryLink() {
        return this.page.locator(".side-2 a[href='/notebooks']");                
    }

    get softwareCategoryLink() {
        return this.page.locator(".side-2 a[href='/software']");                
    }

    async navigateToDesktopsCategory() {
        await this.desktopsCategoryLink.click();
    }

    async navigateToNotebooksCategory() {
        await this.notebooksCategoryLink.click();
    }

    async navigateToSoftwareCategory() {
        await this.softwareCategoryLink.click();
    }

}