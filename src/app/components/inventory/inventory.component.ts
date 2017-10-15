import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/Products/Product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  items: Array<any>;
  item: {id: "", name: "", brand: "", provider: "", quantity: "", price: ""};
  action: string = "default";

  onSave(item){
    if (this.action == "edit"){

      }
      if (this.action == "create"){
        this.items.push(item);
      }
  }

  onCreate(){
    this.item = {id:"", name: "", brand: "", provider: "", quantity: "", price: ""};
    this.action = "create";
  }
  onDelete(index){
    this.items.splice(index, 1);
  }

  onEdit(item){
    this.item = item;
    this.action = "edit";
  }

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.items = this.ProductService.items;
  }

}
