import { Component } from '@angular/core';
import {RestAPIService} from './rest-api.service'//connecting to service class
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
  constructor(rstservice:RestAPIService){ //initialized
    this.restservice=rstservice

  }
  submitUser(){
    this.restservice.getUserDetails(this.search)
  }

}
