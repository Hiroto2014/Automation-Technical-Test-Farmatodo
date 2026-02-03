import { Page } from '@playwright/test';

export class InventoryPage {

  constructor(private page: Page) {}

  async getProductInfo(productName: string) {
    const item = this.page.locator('[data-test="inventory-item"]')
      .filter({ hasText: productName });

    const name = await item.locator('[data-test="inventory-item-name"]').innerText();
    const price = await item.locator('[data-test="inventory-item-price"]').innerText();

    return { name, price };
  }

  async addProduct(productName: string) {
    const item = this.page.locator('[data-test="inventory-item"]')
      .filter({ hasText: productName });

    await item.locator('button').click();
  }
}
