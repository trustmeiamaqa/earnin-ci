import { test, Page, devices } from '@playwright/test';
import { CreditMonitoring } from '../../../src/pages/CreditMonitoring.page';
import { AboutUs } from '../../../src/pages/AboutUs.page';
import { OurImpact } from '../../../src/pages/OurImpact.page';
import { InTheNews } from '../../../src/pages/InTheNews.page';
import { Careers } from '../../../src/pages/Careers.page';
import { PDPA } from '../../../src/components/PDPA';
import { NavigationBar } from '../../../src/components/NavigationBarMobile';

test.describe(
  'Ensure navigation menus work on Mobile correctly',
  {
    tag: '@mobile',
  },
  async () => {
    let page: Page;

    test.beforeEach(async ({ browser }) => {
      const context = await browser.newContext({
        ...devices['iPhone 12'],
      });
      page = await context.newPage();

      // start from credit monitoring page
      const creditPage = new CreditMonitoring(page);
      const acceptPDPABtn = new PDPA(page);
      // goto credit monitoring page
      await creditPage.gotoPage();
      // accept PDPA for first landing
      await acceptPDPABtn.acceptPDPA();
      // ensure the page displays correctly
      await creditPage.pageDisplaysSuccessfully();
    });

    test('Navigate to "Who we are" page', async () => {
      const navBar = new NavigationBar(page);
      const aboutUsPage = new AboutUs(page);
      // is menu visible
      await navBar.navWhoWeAreIsVisible();
      // navigate to "Who We Are" menu
      await navBar.gotoNavWhoWeAre();
      // ensure the page displays correctly
      await aboutUsPage.pageDisplaysSuccessfully();
    });

    test('Navigate to "About Us" page', async () => {
      const navBar = new NavigationBar(page);
      const aboutUsPage = new AboutUs(page);
      // is menu visible
      await navBar.navAboutUsIsVisible();
      // navigate to About us menu
      await navBar.gotoNavAboutUs();
      // ensure the page displays correctly
      await aboutUsPage.pageDisplaysSuccessfully();
    });

    test('Navigate to "Our Impact" page', async () => {
      const navBar = new NavigationBar(page);
      const ourImpactPage = new OurImpact(page);
      // is menu visible
      await navBar.navOurImpactIsVisible();
      // navigate to About us menu
      await navBar.gotoNavOurImpact();
      // ensure the page displays correctly
      await ourImpactPage.pageDisplaysSuccessfully();
    });

    test('Navigate to "In the News" page', async () => {
      const navBar = new NavigationBar(page);
      const inTheNewsPage = new InTheNews(page);
      // is menu visible
      await navBar.navInTheNewsIsVisible();
      // navigate to About us menu
      await navBar.gotoInTheNews();
      // ensure the page displays correctly
      await inTheNewsPage.pageDisplaysSuccessfully();
    });

    test('Navigate to "Careers" page', async () => {
      const navBar = new NavigationBar(page);
      const careersPage = new Careers(page);
      // is menu visible
      await navBar.navCareersIsVisible();
      // navigate to About us menu
      await navBar.gotoCareers();
      // ensure the page displays correctly
      await careersPage.pageDisplaysSuccessfully();
    });
  }
);
