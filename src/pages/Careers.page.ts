import { expect, type Locator, type Page } from '@playwright/test';
import { paths } from '../constants/paths';

export class Careers {
  readonly page: Page;
  readonly pageFirstHeading: Locator;
  readonly pageSecondHeading: Locator;
  readonly careerURL: string = `${process.env.BASE_URL ?? ''}${
    paths.careers_url ?? ''
  }`;

  constructor(page: Page) {
    this.page = page;
    this.pageFirstHeading = page.getByText('Make moves with us');
    this.pageSecondHeading = page.getByText('Join our journey to reimagine');
  }

  async gotoPage() {
    await this.page.goto(this.careerURL);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async pageDisplaysSuccessfully() {
    await expect(this.pageFirstHeading).toBeVisible();
    await expect(this.pageSecondHeading).toBeVisible();
    await expect(this.page).toHaveURL(this.careerURL);
  }
}
