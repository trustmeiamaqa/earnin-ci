import { expect, type Locator, type Page } from '@playwright/test';

export class NavigationBar {
  readonly page: Page;
  readonly toggleNav: Locator;
  readonly whoweareExpander: Locator;
  readonly navProducts: Locator;
  readonly navCreditMonitoring: Locator;
  readonly navWhoWeAre: Locator;
  readonly navAboutUs: Locator;
  readonly navOurImpact: Locator;
  readonly navInTheNews: Locator;
  readonly navCareers: Locator;

  constructor(page: Page) {
    this.page = page;
    this.toggleNav = page.getByTestId('toggle-nav');
    this.whoweareExpander = page.getByTestId('whoweare-expander');
    this.navProducts = page.getByRole('link', { name: 'Products' });
    this.navCreditMonitoring = page.getByRole('link', {
      name: 'Credit Monitoring',
    });
    this.navWhoWeAre = page.getByRole('link', { name: 'Who We Are' });
    this.navAboutUs = page.getByRole('link', { name: 'About Us' });
    this.navOurImpact = page.getByRole('link', { name: 'Our Impact' });
    this.navInTheNews = page.getByRole('link', { name: 'In the News' });
    this.navCareers = page.getByRole('link', { name: 'Careers' });
  }
  // Who We Are navigation menu
  async navWhoWeAreIsVisible() {
    await expect(this.navWhoWeAre).toBeVisible();
  }
  async navWhoWeAreIsNotVisible() {
    await expect(this.navWhoWeAre).not.toBeVisible();
  }
  async gotoNavWhoWeAre() {
    await this.toggleNav.click();
    await this.navWhoWeAre.click();
  }
  // About us navigation menu
  async navAboutUsIsVisible() {
    await this.toggleNav.click();
    await this.whoweareExpander.click();
    await expect(this.navAboutUs).toBeVisible();
  }
  async navAboutUsIsNotVisible() {
    await this.toggleNav.click();
    await this.whoweareExpander.click();
    await expect(this.navAboutUs).not.toBeVisible();
  }
  async gotoNavAboutUs() {
    if (!(await this.navAboutUs.isVisible())) {
      await this.toggleNav.click();
      await this.whoweareExpander.click();
      await this.navAboutUs.click();
    } else {
      await this.navAboutUs.click();
    }
  }
  // Our Impact navigation menu
  async navOurImpactIsVisible() {
    await this.toggleNav.click();
    await this.whoweareExpander.click();
    await expect(this.navOurImpact).toBeVisible();
  }
  async navOurImpactIsNotVisible() {
    await this.toggleNav.click();
    await this.whoweareExpander.click();
    await expect(this.navOurImpact).not.toBeVisible();
  }
  async gotoNavOurImpact() {
    if (!(await this.navOurImpact.isVisible())) {
      await this.toggleNav.click();
      await this.whoweareExpander.click();
      await this.navOurImpact.click();
    } else {
      await this.navOurImpact.click();
    }
  }

  async navInTheNewsIsVisible() {
    await this.toggleNav.click();
    await this.whoweareExpander.click();
    await expect(this.navInTheNews).toBeVisible();
  }
  async navInTheNewsIsNotVisible() {
    await expect(this.navInTheNews).not.toBeVisible();
  }
  async gotoInTheNews() {
    if (!(await this.navInTheNews.isVisible())) {
      await this.toggleNav.click();
      await this.whoweareExpander.click();
      await this.navInTheNews.click();
    } else {
      await this.navInTheNews.click();
    }
  }

  async navCareersIsVisible() {
    await this.toggleNav.click();
    await this.whoweareExpander.click();
    await expect(this.navCareers).toBeVisible();
  }
  async navCareersIsNotVisible() {
    await this.toggleNav.click();
    await this.whoweareExpander.click();
    await expect(this.navCareers).not.toBeVisible();
  }
  async gotoCareers() {
    if (!(await this.navCareers.isVisible())) {
      await this.toggleNav.click();
      await this.whoweareExpander.click();
      await this.navCareers.click();
    } else {
      await this.navCareers.click();
    }
  }
}
