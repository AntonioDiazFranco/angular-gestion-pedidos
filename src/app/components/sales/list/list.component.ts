import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../../services/sales/sale.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  sale: Array<any>;
  isLoading = false;
  action: string = "default";

  constructor(private SaleService: SaleService) { }

  ngOnInit() {
    console.log("Listado de pedidos")
    this.onFind();
  }

  onFind(){
    this.isLoading= true;
    this.SaleService.find().subscribe((res:any) => {
      this.sale = res.body;
      console.log(res.body);
      this.isLoading= false;
    });
  }

  onDelete(id){
    this.SaleService.deleteOne(id).subscribe((res:any) => {
      console.log(res);
      this.onFind();
    });
}

/*  onFind(){
    this.SaleService.find().subscribe((res:any) => {
    this.sale = res.body;
    console.log(res.body);
   });
 }*/

  /*onSave(sale){
    if (this.action == "edit"){
      this.SaleService.updateOne(user).subscribe((res:any) => {
        this.onFind();
      });
    }
    if (this.action == "create"){
      this.SaleService.insertOne(user).subscribe((res:any) => {
        this.onFind();
      });
    }
  }*/

/*  onDelete(id){
    this.SaleService.deleteOne(id).subscribe((res:any) => {
      this.onFind();
    });
  }*/

}
