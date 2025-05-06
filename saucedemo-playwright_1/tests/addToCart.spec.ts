import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Add items to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  await page.goto('/');
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addItemToCart('Sauce Labs Backpack');
  await inventoryPage.goToCart();
  await page.waitForSelector('.cart_item');
});
