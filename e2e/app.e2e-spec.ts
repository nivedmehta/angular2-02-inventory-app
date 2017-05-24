import { Angular2A02InventoryAppPage } from './app.po';

describe('angular2-a02-inventory-app App', () => {
  let page: Angular2A02InventoryAppPage;

  beforeEach(() => {
    page = new Angular2A02InventoryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
