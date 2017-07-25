import { MymeanappPage } from './app.po';

describe('mymeanapp App', () => {
  let page: MymeanappPage;

  beforeEach(() => {
    page = new MymeanappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
