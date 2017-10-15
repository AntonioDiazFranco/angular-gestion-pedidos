import { AngularGestionPedidosPage } from './app.po';

describe('angular-gestion-pedidos App', function() {
  let page: AngularGestionPedidosPage;

  beforeEach(() => {
    page = new AngularGestionPedidosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
