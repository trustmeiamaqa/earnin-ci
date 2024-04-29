import { type Page } from 'playwright';

export const interceptRequest = async (page: Page): Promise<string> => {
  let intercepted = '';

  page.on('request', async (request) => {
    const url = request.url();
    const resourceType = request.resourceType();

    // Check if the request is Fetch or XHR on URL contains 'segment' and '/t'
    if (
      url.includes('/t') &&
      url.includes('segment') &&
      (resourceType === 'fetch' || resourceType === 'xhr')
    ) {
      const postData = await request.postData();
      if (postData) {
        // Parse postData as JSON
        intercepted = JSON.parse(postData.toString());
      }
    }
  });

  return intercepted;
};
