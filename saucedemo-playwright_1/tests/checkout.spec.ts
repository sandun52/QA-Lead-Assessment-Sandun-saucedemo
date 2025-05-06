import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Complete checkout process', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await page.goto('/');
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addItemToCart('Sauce Labs Backpack');
  await inventoryPage.goToCart();
  await cartPage.checkout();
  await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
  await checkoutPage.finish();
  await page.waitForSelector('.complete-header');
});
