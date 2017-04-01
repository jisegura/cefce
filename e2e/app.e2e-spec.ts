import { ScefcePage } from './app.po';

describe('scefce App', () => {
  let page: ScefcePage;

  beforeEach(() => {
    page = new ScefcePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
