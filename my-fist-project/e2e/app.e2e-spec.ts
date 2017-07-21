import { MyFistProjectPage } from './app.po';

describe('my-fist-project App', () => {
  let page: MyFistProjectPage;

  beforeEach(() => {
    page = new MyFistProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
