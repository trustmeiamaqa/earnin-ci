import { expect, type Locator, type Page } from '@playwright/test';
import { paths } from '../constants/paths';

export class InTheNews {
  readonly page: Page;
  readonly pageFirstHeading: Locator;
  readonly pageSecondHeading: Locator;
  readonly inTheNewsURL: string = `${process.env.BASE_URL ?? ''}${
    paths.in_the_new_url ?? ''
  }`;

  constructor(page: Page) {
    this.page = page;
    this.pageFirstHeading = page.getByRole('heading', {
      name: 'EarnIn press center',
    });
    this.pageSecondHeading = page.getByRole('heading', {
      name: 'We’re rewriting the script on',
    });
  }

  async gotoInTheNewPage() {
    await this.page.goto(this.inTheNewsURL);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async pageDisplays() {
    await expect(this.pageFirstHeading).toBeVisible();
    await expect(this.pageSecondHeading).toBeVisible();
    await expect(this.page).toHaveURL(this.inTheNewsURL);
  }
}
