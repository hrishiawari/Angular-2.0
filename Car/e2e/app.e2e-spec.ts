import { CarPage } from './app.po';

describe('car App', () => {
  let page: CarPage;

  beforeEach(() => {
    page = new CarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
