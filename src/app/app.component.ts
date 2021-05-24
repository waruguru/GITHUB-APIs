// import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component,DoCheck } from '@angular/core';
import {RestAPIService} from './rest-api.service'//connecting to service class
import { UserDetails } from './user-details';
@Component({
  moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css']
  providers:[RestAPIService]
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
