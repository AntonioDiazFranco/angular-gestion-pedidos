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
import { ProductService } from './services/products/product.service';
import { CreateComponent } from './components/sales/create/create.component';
import { ListComponent } from './components/sales/list/list.component';
import { SaleService } from './services/sales/sale.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationGuard} from './guards/authentication.guard';


var roots = [
  { path: 'sales', component: SalesComponent, canActivate : [AuthenticationGuard] },
  { path: 'clients', component: ClientsComponent, canActivate : [AuthenticationGuard] },
  { path: 'inventory', component: InventoryComponent, canActivate : [AuthenticationGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
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
    ListComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(roots),
    HttpClientModule
  ],

  providers: [ClientService, ProductService,SaleService, AuthenticationGuard, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule { }
