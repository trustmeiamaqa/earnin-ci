import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

process.env.node_url = process.env.NODE_URL
  ? `${process.env.NODE_URL}`
  : process.env.base_url;

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  expect: {
    timeout: 10000,
  },
  reporter: process.env.CI
    ? 'dot'
    : [['list'], ['html', { outputDir: './playwright-report' }]],
  timeout: 60000,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // {
  //   name: 'firefox',
  //   use: { ...devices['Desktop Firefox'] },
  // },
  // {
  //   name: 'webkit',
  //   use: { ...devices['Desktop Safari'] },
  // },
});
