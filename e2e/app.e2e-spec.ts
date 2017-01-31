import { QuickheroPage } from './app.po';

describe('quickhero App', function() {
  let page: QuickheroPage;

  beforeEach(() => {
    page = new QuickheroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
