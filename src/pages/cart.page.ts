import { Page } from '@playwright/test';

export class CartPage {

  constructor(private page: Page) {}

  async getCartProduct() {
    const name = await this.page.locator('[data-test="inventory-item-name"]').innerText();
    const price = await this.page.locator('[data-test="inventory-item-price"]').innerText();

    return { name, price };
  }

  async continueCheckout() {
    await this.page.locator('[data-test="checkout"]').click(); 
  }
}
