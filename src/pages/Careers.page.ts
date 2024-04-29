import { expect, type Locator, type Page } from '@playwright/test';
import { paths } from '../constants/paths';

export class CareersDesktop {
  readonly page: Page;
  readonly pageFirstHeading: Locator;
  readonly pageSecondHeading: Locator;
  readonly careerURL: string = `${process.env.base_url ?? ''}${
    paths.careers_url ?? ''
  }`;

  constructor(page: Page) {
    this.page = page;
    this.pageFirstHeading = page.getByText('Make moves with us');
    this.pageSecondHeading = page.getByText('Join our journey to reimagine');
  }

  async gotoCareerPage() {
    await this.page.goto(this.careerURL);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async pageDisplays() {
    await expect(this.pageFirstHeading).toBeVisible();
    await expect(this.pageSecondHeading).toBeVisible();
    await expect(this.page).toHaveURL(this.careerURL);
  }
}
