import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {
  users: Array<any>;
  user: {name: "", lastName: "", email: ""};
  action: string = "default";

  onSave(user){
  if (this.action == "edit"){

    }
    if (this.action == "create"){
      this.users.push(user);
    }
  }

  onCreate(){
    this.user = {name: "", lastName: "", email: ""};
    this.action = "create";
  }
  onDelete(index){
    this.users.splice(index, 1);
  }

  onEdit(user){
    this.user = user;
    this.action = "edit";
  }
  constructor(private clientService: ClientService) {

  }

  ngOnInit() {
    this.users = this.clientService.clients;
  }


}