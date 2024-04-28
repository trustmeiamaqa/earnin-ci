import { expect, type Locator, type Page } from '@playwright/test';

export class OurImpactDesktop {
  readonly page: Page;
  readonly pageFirstHeading: Locator;
  readonly pageSecondHeading: Locator;
  readonly ourImpactURL: string = `${process.env.base_url ?? ''}${
    process.env.our_impact_url ?? ''
  }`;

  constructor(page: Page) {
    this.page = page;
    this.pageFirstHeading = page.getByRole('heading', {
      name: 'Reimagining the way money',
    });
    this.pageSecondHeading = page.getByText('As one of the first pioneers');
  }

  async gotoOurImpactPage() {
    await this.page.goto(this.ourImpactURL);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async pageDisplays() {
    await expect(this.pageFirstHeading).toBeVisible();
    await expect(this.pageSecondHeading).toBeVisible();
    await expect(this.page).toHaveURL(this.ourImpactURL);
  }
}
