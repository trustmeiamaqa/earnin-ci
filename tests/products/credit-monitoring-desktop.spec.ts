import { test, expect } from '@playwright/test';
import { CreditMonitoringDesktop } from '../../src/pages/CreditMonitoringDesktop.page';
import { AboutUsDesktop } from '../../src/pages/AboutUsDesktop.page';
import { OurImpactDesktop } from '../../src/pages/OurImpactDesktop.page';
import { NavigationBar } from '../../src/components/NavigationBar';
import { PDPA } from '../../src/components/PDPA';

test.describe('Ensure navigation menus works correctly', async () => {
  test.beforeEach(async ({ page }) => {
    // start from credit monitoring page
    const creditPage = new CreditMonitoringDesktop(page);
    const acceptPDPABtn = new PDPA(page);
    // goto credit monitoring page
    await creditPage.gotoCreditMonitoringPage();
    // accept PDPA for first landing
    await acceptPDPABtn.acceptPDPA();
    // ensure the page displays correctly
    await creditPage.pageDisplays();
  });

  test('Navigate to "Who we are" page', async ({ page }) => {
    const navBar = new NavigationBar(page);
    const aboutUsPage = new AboutUsDesktop(page);
    // is menu visible
    await navBar.navWhoWeAreIsVisible();
    // navigate to "Who We Are" menu
    await navBar.gotoNavWhoWeAre();
    // ensure the page displays correctly
    await aboutUsPage.pageDisplays();
  });

  test('Navigate to "About Us" page', async ({ page }) => {
    const navBar = new NavigationBar(page);
    const aboutUsPage = new AboutUsDesktop(page);
    // is menu visible
    await navBar.navAboutUsIsVisible();
    // navigate to About us menu
    await navBar.gotoNavAboutUs();
    // ensure the page displays correctly
    await aboutUsPage.pageDisplays();
  });

  test('Navigate to "Our Impact" page', async ({ page }) => {
    const navBar = new NavigationBar(page);
    const ourImpactPage = new OurImpactDesktop(page);
    // is menu visible
    await navBar.navOurImpactIsVisible();
    // navigate to About us menu
    await navBar.gotoNavOurImpact();
    // ensure the page displays correctly
    await ourImpactPage.pageDisplays();
  });
});
// const homePage = new HomePage(page);
// const searchResultPage = new SearchResultPage(page);
// // get options value
// const dpOption = options['July'].toString();
// const rtOption = options['December (two years from now)'].toString();
// // fil in the search form
// await homePage.fillInSearchForm(dpOption, rtOption);
// await homePage.clickSearchButton();
// // expect displays seats available info
// await searchResultPage.searchResultDisplays();
// await searchResultPage.seatsAvailableInfoDisplays();
// });

// test('Users can see no more seats available when seats are unavailable.', async ({
//   page,
// }) => {
//   const homePage = new HomePage(page);
//   const searchResultPage = new SearchResultPage(page);

//   // get options value
//   const dpOption = options['December'].toString();
//   const rtOption = options['July (two years from now)'].toString();

//   // fil in the search form
//   await homePage.fillInSearchForm(dpOption, rtOption);
//   await homePage.clickSearchButton();

//   // expect displays seats unavailable info
//   await searchResultPage.searchResultDisplays();
//   await searchResultPage.seatsUnavailableInfoDisplays();
// });

// test('Users can this schedule is not possible message', async ({ page }) => {
//   const homePage = new HomePage(page);
//   const searchResultPage = new SearchResultPage(page);

//   // get options value
//   const dpOption = options['July (next year)'].toString();
//   const rtOption = options['December (next year)'].toString();

//   // fil in the search form
//   await homePage.fillInSearchForm(dpOption, rtOption);
//   await homePage.clickSearchButton();

//   // expect displays seats unavailable info
//   await searchResultPage.searchResultDisplays();
//   await searchResultPage.invalidScheduleInfoDisplay();
// });
