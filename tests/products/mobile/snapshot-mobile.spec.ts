import { test, Page, devices, expect } from '@playwright/test';
import { CreditMonitoring } from '../../../src/pages/CreditMonitoring.page';
import { AboutUs } from '../../../src/pages/AboutUs.page';
import { OurImpact } from '../../../src/pages/OurImpact.page';
import { InTheNews } from '../../../src/pages/InTheNews.page';
import { Careers } from '../../../src/pages/Careers.page';
import { PDPA } from '../../../src/components/PDPA';

test.describe(
  'Verify that the marketing page snapshot remains unchanged on Mobile',
  { tag: ['@snapshot', '@mobile'] },
  async () => {
    let page: Page;

    test.beforeEach(async ({ browser }) => {
      const context = await browser.newContext({
        ...devices['iPhone 12'],
      });
      page = await context.newPage();
    });

    test('Credit Monitoring page', async () => {
      const creditPage = new CreditMonitoring(page);
      const acceptPDPABtn = new PDPA(page);

      // goto page
      await creditPage.gotoPage();
      await acceptPDPABtn.acceptPDPA();
      await creditPage.pageDisplaysSuccessfully();

      // Scroll to the bottom of the page
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await page.waitForTimeout(3000);

      // ensure the page remains unchanged
      await expect(page).toHaveScreenshot('credit-monitoring-page.png', {
        fullPage: true,
      });
    });

    test('About us page', async () => {
      const aboutUsPage = new AboutUs(page);
      const acceptPDPABtn = new PDPA(page);

      // goto page
      await aboutUsPage.gotoPage();
      await acceptPDPABtn.acceptPDPA();
      await aboutUsPage.pageDisplaysSuccessfully();

      // Scroll to the bottom of the page
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await page.waitForTimeout(3000);

      // ensure the page remains unchanged
      await expect(page).toHaveScreenshot('about-us-page.png', {
        fullPage: true,
      });
    });

    test('Our impact page', async () => {
      const ourImpactPage = new OurImpact(page);
      const acceptPDPABtn = new PDPA(page);

      // goto page
      await ourImpactPage.gotoPage();
      await acceptPDPABtn.acceptPDPA();
      await ourImpactPage.pageDisplaysSuccessfully();

      // Scroll to the bottom of the page
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await page.waitForTimeout(3000);

      // ensure the page remains unchanged
      await expect(page).toHaveScreenshot('our-impact-page.png', {
        fullPage: true,
      });
    });

    test('In the news page', async () => {
      const inTheNewstPage = new InTheNews(page);
      const acceptPDPABtn = new PDPA(page);

      // goto page
      await inTheNewstPage.gotoPage();
      await acceptPDPABtn.acceptPDPA();
      await inTheNewstPage.pageDisplaysSuccessfully();

      // Scroll to the bottom of the page
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await page.waitForTimeout(3000);

      // ensure the page remains unchanged
      await expect(page).toHaveScreenshot('in-the-news-page.png', {
        fullPage: true,
        maxDiffPixelRatio: 0.15,
      });
    });

    test('Careers page', async () => {
      const CareersPage = new Careers(page);
      const acceptPDPABtn = new PDPA(page);

      // goto page
      await CareersPage.gotoPage();
      await acceptPDPABtn.acceptPDPA();
      await CareersPage.pageDisplaysSuccessfully();

      // Scroll to the bottom of the page
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await page.waitForTimeout(3000);

      // ensure the page remains unchanged
      await expect(page).toHaveScreenshot('careers-page.png', {
        fullPage: true,
      });
    });
  }
);
