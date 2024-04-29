import { expect, type Locator, type Page } from '@playwright/test';

export class NavigationBar {
  readonly page: Page;
  readonly navProducts: Locator;
  readonly navCreditMonitoring: Locator;
  readonly navWhoWeAre: Locator;
  readonly navAboutUs: Locator;
  readonly navOurImpact: Locator;
  readonly navInTheNews: Locator;
  readonly navCareers: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navProducts = page.getByRole('link', { name: 'Products' });
    this.navCreditMonitoring = page.getByRole('link', {
      name: 'Credit Monitoring',
    });
    this.navWhoWeAre = page.getByRole('link', { name: 'Who We Are' });
    this.navAboutUs = page
      .getByLabel('Main Navigation')
      .getByRole('link', { name: 'About Us' });
    this.navOurImpact = page.getByRole('link', { name: 'Our Impact' });
    this.navInTheNews = page.getByRole('link', { name: 'In the News' });
    this.navCareers = page
      .getByLabel('Main Navigation')
      .getByRole('link', { name: 'Careers' });
  }
  // Who We Are navigation menu
  async navWhoWeAreIsVisible() {
    await this.navWhoWeAre.hover();
    await expect(this.navWhoWeAre).toBeVisible();
  }
  async navWhoWeAreIsNotVisible() {
    await expect(this.navWhoWeAre).not.toBeVisible();
  }
  async gotoNavWhoWeAre() {
    await this.navWhoWeAre.hover();
    await this.navWhoWeAre.click();
  }
  // About US navigation menu
  async navAboutUsIsVisible() {
    await this.navWhoWeAre.hover();
    await expect(this.navAboutUs).toBeVisible();
  }
  async navAboutUsIsNotVisible() {
    await expect(this.navAboutUs).not.toBeVisible();
  }
  async gotoNavAboutUs() {
    await this.navWhoWeAre.hover();
    await this.navAboutUs.click();
  }
  // Our Impact navigation menu
  async navOurImpactIsVisible() {
    await this.navWhoWeAre.hover();
    await expect(this.navOurImpact).toBeVisible();
  }
  async navOurImpactIsNotVisible() {
    await expect(this.navOurImpact).not.toBeVisible();
  }
  async gotoNavOurImpact() {
    await this.navWhoWeAre.hover();
    await this.navOurImpact.click();
  }

  async navInTheNewsIsVisible() {
    await this.navWhoWeAre.hover();
    await expect(this.navInTheNews).toBeVisible();
  }
  async navInTheNewsIsNotVisible() {
    await expect(this.navInTheNews).not.toBeVisible();
  }
  async gotoInTheNews() {
    await this.navWhoWeAre.hover();
    await this.navInTheNews.click();
  }

  async navCareersIsVisible() {
    await this.navWhoWeAre.hover();
    await expect(this.navCareers).toBeVisible();
  }
  async navCareersIsNotVisible() {
    await expect(this.navCareers).not.toBeVisible();
  }
  async gotoCareers() {
    await this.navWhoWeAre.hover();
    await this.navCareers.click();
  }
}
