import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/');
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForSelector('.inventory_list');
});
