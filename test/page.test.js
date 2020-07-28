/* eslint-disable no-undef */
jest.setTimeout(10000);

describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:5000');
  });


  it('should display CovItOut homepage', async () => {
    await expect(page).toMatch('CovItOut');
  });
});