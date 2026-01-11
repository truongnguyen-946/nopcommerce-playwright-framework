import { type Page, type Locator } from "@playwright/test";

/**
 * Page Object Model for the user registration page.
 * Handles user registration form interactions and validation.
 */
export class RegisterPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get maleRadioButton() {
        return this.page.locator("#gender-male");
    }

    get femaleRadioButton() {
        return this.page.locator("#gender-female");
    }

    get firstNameTextbox() {
        return this.page.locator("#FirstName");
    }

    get lastNameTextbox() {
        return this.page.locator("#LastName");
    }

    get emailTextbox() {
        return this.page.locator("#Email");
    }

    get companyNameTextbox() {
        return this.page.locator("#Company");
    }

    get newsletterCheckbox() {
        return this.page.locator("#NewsLetterSubscriptions_0__IsActive");
    }

    get passwordTextbox() {
        return this.page.locator("#Password");
    }

    get confirmPasswordTextbox() {
        return this.page.locator("#ConfirmPassword");
    }

    get registerButton() {
        return this.page.locator("#register-button");
    }

    get firstNameErrorMessage() {
        return this.page.locator("#FirstName-error");
    }

    get lastNameErrorMessage() {
        return this.page.locator("#LastName-error");
    }

    get emailErrorMessage() {
        return this.page.locator("#Email-error");
    }

    get passwordErrorMessage() {
        return this.page.locator("#Password-error");
    }

    get confirmPasswordErrorMessage() {
        return this.page.locator("#ConfirmPassword-error");
    }

    get registrationResultMessage() {
        return this.page.locator(".center-1 .result");
    }

    get emailAlreadyExistsErrorMessage() {
        return this.page.locator(".message-error li");
    }

    /**
     * Selects the gender radio button based on the provided value.
     * @param gender - The gender to select, either "male" or "female"
     */
    async selectGender(gender: "male" | "female"): Promise<void> {
        if (gender === "male") {
            await this.maleRadioButton.click();
        } else {
            await this.femaleRadioButton.click();
        }
    }

    /**
     * Fills out the registration form with the provided data.
     * All fields are required for successful registration.
     * @param data - Object containing all registration form field values
     * @param data.firstName - User's first name
     * @param data.lastName - User's last name
     * @param data.email - User's email address
     * @param data.company - User's company name (optional in form but required in data)
     * @param data.password - User's password
     * @param data.confirmPassword - Password confirmation (must match password)
     */
    async fillForm(data: {
        firstName: string;
        lastName: string;
        email: string;
        company: string;
        password: string;
        confirmPassword: string
    }): Promise<void> {
        await this.firstNameTextbox.fill(data.firstName);
        await this.lastNameTextbox.fill(data.lastName);
        await this.emailTextbox.fill(data.email);
        await this.companyNameTextbox.fill(data.company);
        await this.passwordTextbox.fill(data.password);
        await this.confirmPasswordTextbox.fill(data.confirmPassword);
    }

    /**
     * Clicks the register button to submit the registration form.
     * Waits for the button to be visible before clicking.
     */
    async clickOnRegisterButton(): Promise<void> {
        await this.registerButton.waitFor({ state: "visible" });
        await this.registerButton.click();
    }

    /**
     * Retrieves the error message displayed for the first name field.
     * @returns The error message text, or null if no error is displayed
     */
    async getFirstNameErrorMessage(): Promise<string | null> {
        return this.firstNameErrorMessage.textContent();
    }

    /**
     * Retrieves the error message displayed for the last name field.
     * @returns The error message text, or null if no error is displayed
     */
    async getLastNameErrorMessage(): Promise<string | null> {
        return this.lastNameErrorMessage.textContent();
    }

    /**
     * Retrieves the error message displayed for the email field.
     * @returns The error message text, or null if no error is displayed
     */
    async getEmailErrorMessage(): Promise<string | null> {
        return this.emailErrorMessage.textContent();
    }

    /**
     * Retrieves the error message displayed for the password field.
     * @returns The error message text, or null if no error is displayed
     */
    async getPasswordErrorMessage(): Promise<string | null> {
        return this.passwordErrorMessage.textContent();
    }

    /**
     * Retrieves the error message displayed for the confirm password field.
     * @returns The error message text, or null if no error is displayed
     */
    async getConfirmPasswordErrorMessage(): Promise<string | null> {
        return this.confirmPasswordErrorMessage.textContent();
    }

    /**
     * Retrieves the registration result message displayed after form submission.
     * This is typically a success or error message shown after registration attempt.
     * @returns The result message text, or null if no message is displayed
     */
    async getRegistrationResultMessage(): Promise<string | null> {
        return this.registrationResultMessage.textContent();
    }

    /**
     * Retrieves the error message displayed when the email already exists in the system.
     * @returns The error message text, or null if no error is displayed
     */
    async getEmailAlreadyExistsErrorMessage(): Promise<string | null> {
        return this.emailAlreadyExistsErrorMessage.textContent();
    }

}