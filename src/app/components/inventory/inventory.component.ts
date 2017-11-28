import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products/product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  items: Array<any>;
  item: {id: "", name: "", brand: "", provider: "", quantity: "", price: ""};
  action: string = "default";

  onCreate(){
    this.item = {id:"", name: "", brand: "", provider: "", quantity: "", price: ""};
    this.action = "create";
  }

  onEdit(item){
    this.item = item;
    this.action = "edit";
  }

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    console.log("Hola");
    this.onFind();

  }

  onFind(){
    this.ProductService.find().subscribe((res:any) => {
      this.items = res.body;
      console.log(res.body);
   });
  }

  onSave(user){
    if (this.action == "edit"){
      this.ProductService.updateOne(user).subscribe((res:any) => {
        this.onFind();
      });
    }
    if (this.action == "create"){
      this.ProductService.insertOne(user).subscribe((res:any) => {
        this.onFind();
      });
    }
  }

  onDelete(id){
    this.ProductService.deleteOne(id).subscribe((res:any) => {
      this.onFind();
    });
  }

}
