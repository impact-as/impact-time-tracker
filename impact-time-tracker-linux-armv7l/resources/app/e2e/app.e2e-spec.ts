import { Timetracker2Page } from './app.po';

describe('timetracker2 App', () => {
  let page: Timetracker2Page;

  beforeEach(() => {
    page = new Timetracker2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
