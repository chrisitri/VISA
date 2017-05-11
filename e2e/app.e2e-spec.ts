import { VISAPage } from './app.po';

describe('visa App', () => {
  let page: VISAPage;

  beforeEach(() => {
    page = new VISAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
