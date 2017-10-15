import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client/client.service';
import { ProductService } from '../../../services/Products/Product.service';
import { SaleService } from '../../../services/Sales/sale.service';
@Component({
  selector: 'app-sales-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  users: Array<any>;
  client: any;
  items: Array<any>;
  selectedItems: Array<any>=[];
  select(item){
    this.selectedItems.push(item);
  }
  constructor(private clientService: ClientService, private ProductService: ProductService) { }

  ngOnInit() {
    this.users = this.clientService.clients;
    this.items = this.ProductService.items;
  }

}
