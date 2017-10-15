import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SalesComponent } from './components/sales/sales.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule  } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { ClientService } from './services/client/client.service';
import { ProductService } from './services/Products/Product.service';
import { CreateComponent } from './components/sales/create/create.component';
import { ListComponent } from './components/sales/list/list.component';
import { SaleService } from './services/Sales/sale.service';
//import { HttpClientModule }       from '@angular/common/http';

var roots = [
{ path: 'sales', component: SalesComponent},
{ path: 'clients', component: ClientsComponent},
{ path: 'inventory', component: InventoryComponent},
{ path: 'home', component: HomeComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    SalesComponent,
    InventoryComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FilterPipe,
    CreateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(roots),
    //HttpClientModule
  ],

  providers: [ClientService, ProductService,SaleService],
  bootstrap: [AppComponent],
})
export class AppModule { }
