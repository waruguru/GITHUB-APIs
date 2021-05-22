import { Component } from '@angular/core';
import {RestAPIService} from './rest-api.service'//connecting to service class
import { UserDetails } from './user-details';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restApi';

  //internalize the services

restservice :any //declared

search!:string;

//hold data
holduserDetails!:UserDetails

  constructor(rstservice:RestAPIService){ //initialized
    this.restservice=rstservice

  }
  submitUser(){
    this.restservice.getUserDetails(this.search)
  }

//receive data
  displayUserDetails(){
    this.restservice.getUserDetails(this.search)
    this.holduserDetails=this.restservice.userDetails



  }


}
