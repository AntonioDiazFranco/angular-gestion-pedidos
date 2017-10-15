import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  items: Array<any> = [
  {id:1, name: "Aceite", brand: "Cada Dia", provider: "AGD", quantity: "10", price: "50"},
  {id:2, name: "Arroz", brand: "Molinos", provider: "Adeco", quantity: "100", price: "20"},
  {id:3, name: "Azucar", brand: "Chango", provider: "Adeco", quantity: "20", price: "25"},
  {id:4, name: "Cerveza", brand: "Lupulo", provider: "AGD", quantity: "100", price: "23"},
  {id:5, name: "Frijol", brand: "Mas", provider: "NUUE", quantity: "300", price: "10"},
  ];
  
  constructor() { }

}
