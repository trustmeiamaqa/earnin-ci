import { test, Page, devices } from '@playwright/test';
import { CreditMonitoringDesktop } from '../../../src/pages/CreditMonitoring.page';
import { AboutUsDesktop } from '../../../src/pages/AboutUs.page';
import { OurImpactDesktop } from '../../../src/pages/OurImpact.page';
import { InTheNewsDesktop } from '../../../src/pages/InTheNews.page';
import { CareersDesktop } from '../../../src/pages/Careers.page';
import { PDPA } from '../../../src/components/PDPA';
// desktop nav bar
import { NavigationBar } from '../../../src/components/NavigationBarDesktop';

test.describe('Ensure navigation menus works correctly', async () => {
  let mainPage: Page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['Desktop Chrome'],
    });
    mainPage = await context.newPage();

    // start from credit monitoring page
    const creditPage = new CreditMonitoringDesktop(mainPage);
    const acceptPDPABtn = new PDPA(mainPage);
    // goto credit monitoring page
    await creditPage.gotoCreditMonitoringPage();
    // accept PDPA for first landing
    await acceptPDPABtn.acceptPDPA();
    // ensure the page displays correctly
    await creditPage.pageDisplays();
  });

  test('Navigate to "Who we are" page', async () => {
    const navBar = new NavigationBar(mainPage);
    const aboutUsPage = new AboutUsDesktop(mainPage);
    // is menu visible
    await navBar.navWhoWeAreIsVisible();
    // navigate to "Who We Are" menu
    await navBar.gotoNavWhoWeAre();
    // ensure the page displays correctly
    await aboutUsPage.pageDisplays();
  });

  test('Navigate to "About Us" page', async () => {
    const navBar = new NavigationBar(mainPage);
    const aboutUsPage = new AboutUsDesktop(mainPage);
    // is menu visible
    await navBar.navAboutUsIsVisible();
    // navigate to About us menu
    await navBar.gotoNavAboutUs();
    // ensure the page displays correctly
    await aboutUsPage.pageDisplays();
  });

  test('Navigate to "Our Impact" page', async () => {
    const navBar = new NavigationBar(mainPage);
    const ourImpactPage = new OurImpactDesktop(mainPage);
    // is menu visible
    await navBar.navOurImpactIsVisible();
    // navigate to About us menu
    await navBar.gotoNavOurImpact();
    // ensure the page displays correctly
    await ourImpactPage.pageDisplays();
  });

  test('Navigate to "In the News" page', async () => {
    const navBar = new NavigationBar(mainPage);
    const inTheNewsPage = new InTheNewsDesktop(mainPage);
    // is menu visible
    await navBar.navInTheNewsIsVisible();
    // navigate to About us menu
    await navBar.gotoInTheNews();
    // ensure the page displays correctly
    await inTheNewsPage.pageDisplays();
  });

  test('Navigate to "Careers" page', async () => {
    const navBar = new NavigationBar(mainPage);
    const careersPage = new CareersDesktop(mainPage);
    // is menu visible
    await navBar.navCareersIsVisible();
    // navigate to About us menu
    await navBar.gotoCareers();
    // ensure the page displays correctly
    await careersPage.pageDisplays();
  });
});
