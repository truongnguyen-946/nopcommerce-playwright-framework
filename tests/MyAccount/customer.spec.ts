import { test } from "../../fixtures/fixtures";
import { faker } from "@faker-js/faker";

test.describe("My Account - Customer Info", () => {

    const customerInfo = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        companyName: "Test Company",
        gender: "male" as "male" | "female"
    }

    test("TC_001: Verify that Customer Info is updated with correct user information", async ({ myAccountSideBarPage, customerPage, menuHeader }) => {
        test.info().annotations.push({
            type: "description",
            description: "Verify that Customer Info page displays correct user information"
        });

        await test.step("Navigate to My Account page", async () => {
            await menuHeader.openMyAccountPage();
        });

        await test.step("Navigate to Customer Info page", async () => {
            await myAccountSideBarPage.clickOnCustomerInfoLink();
        });

        await test.step("Update Customer Info with new data", async () => {
            await customerPage.updateCustomerInfo(
                customerInfo.firstName,
                customerInfo.lastName,
                customerInfo.email,
                customerInfo.companyName,
                customerInfo.gender
            );
        });


        await test.step("Verify success message is displayed after saving customer info", async () => {
            await test.expect(customerPage.successMessage).toContainText("The customer info has been updated successfully.");
            await menuHeader.closeNotificationBar();
        });

        await test.step("Verify that the updated customer info is displayed correctly", async () => {
            const firstName = await customerPage.firstNameTextbox.inputValue();
            const lastName = await customerPage.lastNameTextbox.inputValue();
            const email = await customerPage.emailTextbox.inputValue();
            const companyName = await customerPage.companyNameTextbox.inputValue();
            const gender = await customerPage.getGender();

            test.expect(firstName).toBe(customerInfo.firstName);
            test.expect(lastName).toBe(customerInfo.lastName);
            test.expect(email).toBe(customerInfo.email);
            test.expect(companyName).toBe(customerInfo.companyName);
            test.expect(gender).toBe(customerInfo.gender);
        });
    });
});
