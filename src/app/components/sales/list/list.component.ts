import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../../services/Sales/sale.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  sales: Array<any>;

  constructor(private SaleService: SaleService) { }

  ngOnInit() {
    this.sales=this.SaleService.sales;
  }

}
