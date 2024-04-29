import { expect, type Locator, type Page } from '@playwright/test';
import { paths } from '../constants/paths';

export class OurImpact {
  readonly page: Page;
  readonly pageFirstHeading: Locator;
  readonly pageSecondHeading: Locator;
  readonly ourImpactURL: string = `${process.env.BASE_URL ?? ''}${
    paths.our_impact_url ?? ''
  }`;

  constructor(page: Page) {
    this.page = page;
    this.pageFirstHeading = page.getByRole('heading', {
      name: 'Reimagining the way money',
    });
    this.pageSecondHeading = page.getByText('As one of the first pioneers');
  }

  async gotoPage() {
    await this.page.goto(this.ourImpactURL);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async pageDisplaysSuccessfully() {
    await expect(this.pageFirstHeading).toBeVisible();
    await expect(this.pageSecondHeading).toBeVisible();
    await expect(this.page).toHaveURL(this.ourImpactURL);
  }
}
