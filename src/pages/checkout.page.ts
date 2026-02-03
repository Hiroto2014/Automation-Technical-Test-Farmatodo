import { Page } from '@playwright/test';

export class CheckoutPage {

  constructor(private page: Page) {}

  async completeCheckout() {
    await this.page.locator('[data-test="firstName"]').fill('Test');
    await this.page.locator('[data-test="lastName"]').fill('Automation');
    await this.page.locator('[data-test="postalCode"]').fill('12345');

    await this.page.locator('[data-test="continue"]').click();
    await this.page.locator('[data-test="finish"]').click();
  }
}
