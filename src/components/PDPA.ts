import { expect, type Locator, type Page } from '@playwright/test';

export class PDPA {
  readonly page: Page;
  readonly pdpaToasterText: Locator;
  readonly pdpaAgreeBtn: Locator;

  constructor(page: Page) {
    this.pdpaToasterText = page.getByText(
      'Do Not Share My Personal Information I Agree'
    );
    this.pdpaAgreeBtn = page.getByRole('button', { name: 'I Agree' });
  }

  async acceptPDPA() {
    await this.pdpaToasterText.isVisible();
    await this.pdpaAgreeBtn.click();
  }
}
