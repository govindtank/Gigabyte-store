import { GigabytePage } from './app.po';

describe('gigabyte App', () => {
  let page: GigabytePage;

  beforeEach(() => {
    page = new GigabytePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
