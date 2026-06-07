import { test, expect, Page } from '@playwright/test';

const CONTAINER = 'div.EventContainer___StyledDiv-sc-14u79u8-0';

function getEventContainer(page: Page) {
  return page.locator(CONTAINER);
}

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.sitickets.com/event/test-qa-long-term');
  await page.waitForSelector(CONTAINER);
});


test('URL Validation', async ({page}) => {
  await page.goto('https://www.sitickets.com/event/test-qa-long-term');
  await expect(page.url()).toBe('https://www.sitickets.com/event/test-qa-long-term');
});

test('Event Title Validation', async ({page}) => {
  const searchInContainer = getEventContainer(page);
  await expect(searchInContainer).toContainText('Test QA Long Term 121212');
});

test('Event Date Validation', async ({page}) => {
  const searchInContainer = getEventContainer(page);
  await expect(searchInContainer).toContainText('Mon, Dec 1 2025 9:30 AM');
});

test('Event Location Validation', async ({page}) => {
  const searchInContainer = getEventContainer(page);
  await expect(searchInContainer).toContainText('North Austin, Travis County, 12221 N Mopac Expy, Austin, TX, 78758-2401');
});

test('Count Number Of Ticket Groups', async ({ page }) => {
  const desiredTicketGroupCount = 4;
  const actualTicketGroupCount = await page.locator('div.styles__TicketDetail-sc-1vlhbwl-1.gJISQL').count();
  expect(actualTicketGroupCount).toBe(desiredTicketGroupCount);
});

test('Event Description Validation', async ({page}) => {
  await expect(page.locator('div.styles__EventDescriptionContainer-sc-g7wfep-48')).toContainText('this is an edit 232323 edit');
});
