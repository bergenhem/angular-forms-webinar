import { AngularFormsWebinarPage } from './app.po';

describe('angular-forms-webinar App', () => {
  let page: AngularFormsWebinarPage;

  beforeEach(() => {
    page = new AngularFormsWebinarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
