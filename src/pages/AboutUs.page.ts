import { expect, type Locator, type Page } from '@playwright/test';
import { paths } from '../constants/paths';

export class AboutUs {
  readonly page: Page;
  readonly pageFirstHeading: Locator;
  readonly pageSecondHeading: Locator;
  readonly pageThirdHeading: Locator;
  readonly aboutUsURL: string = `${process.env.BASE_URL ?? ''}${
    paths.about_us_url ?? ''
  }`;

  constructor(page: Page) {
    this.page = page;
    this.pageFirstHeading = page.getByRole('heading', { name: 'Our story' });
    this.pageSecondHeading = page.getByRole('heading', {
      name: 'At EarnIn, we’re reimagining',
    });
    this.pageThirdHeading = page.getByRole('heading', {
      name: "See what we're all about",
    });
  }

  async gotoPage() {
    await this.page.goto(this.aboutUsURL);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async pageDisplaysSuccessfully() {
    await expect(this.pageFirstHeading).toBeVisible();
    await expect(this.pageSecondHeading).toBeVisible();
    await expect(this.pageThirdHeading).toBeVisible();
    await expect(this.page).toHaveURL(this.aboutUsURL);
  }
}
