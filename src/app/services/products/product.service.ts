import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  items: Array<any> = [
  {id:1, name: "Aceite", brand: "Cada Dia", provider: "AGD", quantity: "10", price: "50"},
  {id:2, name: "Arroz", brand: "Molinos", provider: "Adeco", quantity: "100", price: "20"},
  {id:3, name: "Azucar", brand: "Chango", provider: "Adeco", quantity: "20", price: "25"},
  {id:4, name: "Cerveza", brand: "Lupulo", provider: "AGD", quantity: "100", price: "23"},
  {id:5, name: "Frijol", brand: "Mas", provider: "NUUE", quantity: "300", price: "10"},
  ];

  constructor(private http:HttpClient) {}

    find(){
      console.log("Hola inventario");
      return this.http.get('http://localhost:3000/api/products');
    }

    insertOne(obj){
      return this.http.post('http://localhost:3000/api/products', obj);
    }

    updateOne(obj){
      return this.http.put('http://localhost:3000/api/products', obj);
    }

    deleteOne(id){
      return this.http.delete('http://localhost:3000/api/products/' + id);
    }

}
