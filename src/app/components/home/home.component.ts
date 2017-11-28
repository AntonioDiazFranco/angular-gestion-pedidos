import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
import { ProductService } from '../../services/products/product.service';
import { SaleService } from '../../services/sales/sale.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Array<any>;
  user: {name: "", lastName: "", email: ""};
  items: Array<any>;
  item: {id: "", name: "", brand: "", provider: "", quantity: "", price: ""};
  sale: Array<any>;

  constructor(private clientService: ClientService, private ProductService: ProductService,private SaleService: SaleService) {
    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
    };

    window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };

   }

   ngOnInit() {
     console.log("Hola HOME");
     this.onFind();
     this.onFind2();
     this.onFind3();
   }

   onFind(){
     this.clientService.find().subscribe((res:any) => {
       this.users = res.body;
       console.log(res.body);
    });
   }
   onFind2(){
     this.ProductService.find().subscribe((res:any) => {
       this.items = res.body;
       console.log(res.body);
    });
   }
   onFind3(){
     this.SaleService.find().subscribe((res:any) => {
       this.sale = res.body;
       console.log(res.body);
     });
   }


}
