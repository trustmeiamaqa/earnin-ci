import { expect, type Locator, type Page } from '@playwright/test';
import { paths } from '../constants/paths';

export class CreditMonitoring {
  readonly page: Page;
  readonly pageFirstHeading: Locator;
  readonly pageSecondHeading: Locator;
  readonly creditMonitoringURL: string = `${process.env.BASE_URL ?? ''}${
    paths.credit_monitoring_url ?? ''
  }`;

  constructor(page: Page) {
    this.page = page;
    this.pageFirstHeading = page
      .locator('#js-scroll')
      .getByText('Credit Monitoring', {
        exact: true,
      });
    this.pageSecondHeading = page.getByRole('heading', {
      name: 'Track your credit score for',
    });
  }

  async gotoCreditMonitoringPage() {
    await this.page.goto(this.creditMonitoringURL);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async pageDisplays() {
    await expect(this.pageFirstHeading).toBeVisible();
    await expect(this.pageSecondHeading).toBeVisible();
    await expect(this.page).toHaveURL(this.creditMonitoringURL);
  }
}
