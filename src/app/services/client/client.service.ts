import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientService {
  clients: Array<any> = [
  {name: "Victor Hugo", lastName: "Aguilar Parra", email: "victor@email.com"},
  {name: "Javier Alejandro", lastName: "Arreola Grajeda", email: "javier@email.com"},
  {name: "Jose Fransisco", lastName: "Greco", email: "Jose@email.com"},
  {name: "Juan Manuel ", lastName: "Medrano", email: "Juan@email.com"},
  ];

  constructor(private http:HttpClient) { }

  find(){
    console.log("Hola clientes");
    return this.http.get('http://localhost:3000/api/clients');
  }

  insertOne(obj){
    return this.http.post('http://localhost:3000/api/clients', obj);
  }

  updateOne(obj){
    return this.http.put('http://localhost:3000/api/clients', obj);
  }

  deleteOne(id){
    return this.http.delete('http://localhost:3000/api/clients/' + id);
  }


}
