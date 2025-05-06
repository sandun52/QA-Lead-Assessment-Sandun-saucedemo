import { Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async addItemToCart(itemName: string) {
    await this.page.click(`text=${itemName}`);
    await this.page.click('button[data-test^="add-to-cart"]');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}
