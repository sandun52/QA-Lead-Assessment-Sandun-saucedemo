# Saucedemo Playwright Test Automation

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Install Playwright browsers:
   ```
   npx playwright install
   ```

## Run Tests

- Run all tests:
  ```
  npx playwright test
  ```

- Run tests in a specific browser:
  ```
  npx playwright test --project=chromium
  npx playwright test --project=firefox
  npx playwright test --project=webkit
  ```

- Run a single test file:
  ```
  npx playwright test tests/login.spec.ts
  ```
