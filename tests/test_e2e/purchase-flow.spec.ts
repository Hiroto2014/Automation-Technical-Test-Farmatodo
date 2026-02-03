import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { InventoryPage } from '../../src/pages/inventory.page';
import { CartPage } from '../../src/pages/cart.page';
import { CheckoutPage } from '../../src/pages/checkout.page';

import 'dotenv/config';

test('Flujo completo de compra Sauce Labs Fleece Jacket', async ({ page }) => {

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await page.goto(process.env.URL_PAGE as string);

  await login.login(
  process.env.USER_NAME as string,
  process.env.PASSWORD as string
);

  const productInfo = await inventory.getProductInfo(process.env.PRODUCTO_NAME as string);

  await inventory.addProduct(process.env.PRODUCTO_NAME as string);

  await page.locator('[data-test="shopping-cart-link"]').click();

  const cartInfo = await cart.getCartProduct();

  expect(cartInfo.name).toBe(productInfo.name);
  expect(cartInfo.price).toBe(productInfo.price);

  await cart.continueCheckout();

  await checkout.completeCheckout();

  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
});
