import { AngularMaterialPrototypePage } from './app.po';

describe('angular-material-prototype App', () => {
  let page: AngularMaterialPrototypePage;

  beforeEach(() => {
    page = new AngularMaterialPrototypePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
