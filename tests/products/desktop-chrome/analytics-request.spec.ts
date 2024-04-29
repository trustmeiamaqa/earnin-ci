import { test, Page, devices, expect } from '@playwright/test';
import { CreditMonitoring } from '../../../src/pages/CreditMonitoring.page';
import { AboutUs } from '../../../src/pages/AboutUs.page';
import { OurImpact } from '../../../src/pages/OurImpact.page';
import { InTheNews } from '../../../src/pages/InTheNews.page';
import { Careers } from '../../../src/pages/Careers.page';
import { analytics } from '../../../src/constants/analytics';

test.describe(
  'Verify the event segment /t analytics remain unchanged',
  {
    tag: ['@analytics', '@desktop'],
  },
  async () => {
    let page: Page;

    test.beforeEach(async ({ browser }) => {
      const context = await browser.newContext({
        ...devices['Desktop Chrome'],
      });
      page = await context.newPage();
    });

    test('Credit Monitoring page', async () => {
      let eventName = '';
      let screenName = '';
      // Intercept network requests
      page.on('request', async (request) => {
        const url = request.url();
        const resourceType = request.resourceType();
        // Check if the request is Fetch or XHR on URL contains 'segment' and '/t'
        if (
          url.includes('/t') &&
          url.includes('segment') &&
          (resourceType === 'fetch' || resourceType === 'xhr')
        ) {
          const postData = request.postData();
          if (postData) {
            // Parse postData as JSON
            const postDataJSON = JSON.parse(postData.toString());
            eventName = postDataJSON['event'];
            screenName = postDataJSON['properties']['screenName'];
          }
        }
      });
      // goto page
      const creditPage = new CreditMonitoring(page);
      await creditPage.gotoPage();
      // verify value
      expect(eventName).toBe(analytics.creditMonitoring.event);
      expect(screenName).toBe(analytics.creditMonitoring.properties.screenName);
    });

    test('About us page', async () => {
      let eventName = '';
      let screenName = '';
      // Intercept network requests
      page.on('request', async (request) => {
        const url = request.url();
        const resourceType = request.resourceType();
        if (
          url.includes('/t') &&
          url.includes('segment') &&
          (resourceType === 'fetch' || resourceType === 'xhr')
        ) {
          const postData = request.postData();
          if (postData) {
            // Parse postData as JSON
            const postDataJSON = JSON.parse(postData.toString());
            eventName = postDataJSON['event'];
            screenName = postDataJSON['properties']['screenName'];
          }
        }
      });
      // goto page
      const aboutUsPage = new AboutUs(page);
      await aboutUsPage.gotoPage();
      // verify value
      expect(eventName).toBe(analytics.aboutUs.event);
      expect(screenName).toBe(analytics.aboutUs.properties.screenName);
    });

    test('Our Impact page', async () => {
      let eventName = '';
      let screenName = '';
      // Intercept network requests
      page.on('request', async (request) => {
        const url = request.url();
        const resourceType = request.resourceType();
        if (
          url.includes('/t') &&
          url.includes('segment') &&
          (resourceType === 'fetch' || resourceType === 'xhr')
        ) {
          const postData = request.postData();
          if (postData) {
            // Parse postData as JSON
            const postDataJSON = JSON.parse(postData.toString());
            eventName = postDataJSON['event'];
            screenName = postDataJSON['properties']['screenName'];
          }
        }
      });
      // goto page
      const ourImpactPage = new OurImpact(page);
      await ourImpactPage.gotoPage();
      // verify value
      expect(eventName).toBe(analytics.ourImpact.event);
      expect(screenName).toBe(analytics.ourImpact.properties.screenName);
    });

    test('In the news page', async () => {
      let eventName = '';
      let screenName = '';
      // Intercept network requests
      page.on('request', async (request) => {
        const url = request.url();
        const resourceType = request.resourceType();
        if (
          url.includes('/t') &&
          url.includes('segment') &&
          (resourceType === 'fetch' || resourceType === 'xhr')
        ) {
          const postData = request.postData();
          if (postData) {
            // Parse postData as JSON
            const postDataJSON = JSON.parse(postData.toString());
            eventName = postDataJSON['event'];
            screenName = postDataJSON['properties']['screenName'];
          }
        }
      });
      // goto page
      const inTheNewsPage = new InTheNews(page);
      await inTheNewsPage.gotoPage();
      // verify value
      expect(eventName).toBe(analytics.inTheNews.event);
      expect(screenName).toBe(analytics.inTheNews.properties.screenName);
    });

    test('Careers page', async () => {
      let eventName = '';
      let screenName = '';
      // Intercept network requests
      page.on('request', async (request) => {
        const url = request.url();
        const resourceType = request.resourceType();
        if (
          url.includes('/t') &&
          url.includes('segment') &&
          (resourceType === 'fetch' || resourceType === 'xhr')
        ) {
          const postData = request.postData();
          if (postData) {
            // Parse postData as JSON
            const postDataJSON = JSON.parse(postData.toString());
            eventName = postDataJSON['event'];
            screenName = postDataJSON['properties']['screenName'];
          }
        }
      });
      // goto page
      const careersPage = new Careers(page);
      await careersPage.gotoPage();
      // verify value
      expect(eventName).toBe(analytics.careers.event);
      expect(screenName).toBe(analytics.careers.properties.screenName);
    });
  }
);
