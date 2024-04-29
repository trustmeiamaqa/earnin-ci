import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

process.env.node_url = process.env.NODE_URL
  ? `${process.env.NODE_URL}`
  : process.env.BASE_URL;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  expect: {
    timeout: 10000,
    toHaveScreenshot: {
      animations: 'disabled',
      maxDiffPixelRatio: 0.1,
    },
  },
  reporter: [
    ['list', { printSteps: true }],
    ['html', { outputDir: './playwright-report' }],
  ],
  timeout: 60000,
  workers: process.env.CI ? 1 : undefined,
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
});
