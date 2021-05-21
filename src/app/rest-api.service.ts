import { Injectable } from '@angular/core';
//import httpClient --->>http
import {HttpClient} from '@angular/common/http';
//import enviroment
import {environment} from '../environments/environment';
//import user details
import {UserDetails} from './user-details'
//import repos
import {RepoClass} from './repo-class';
@Injectable({
  providedIn: 'root'
})
export class RestAPIService {
  //blueprint of classes
  userDetails!:UserDetails
  repoClass!:RepoClass


  constructor(private http:HttpClient) { 
    this.userDetails=new UserDetails('','','','');//for userDetails
    this.repoClass=new RepoClass('',newDate() ,'','','','','')//for repos
  }
  // receiving the data 
  //funcion for getName  [search ] from user query
  //create a promise that upon resolve it returns the data and incase there is an error it rejects the error
  getUserDetails(user:string){
    interface ApiResponse{
      login:string,
      avatar_url:string,
      repos_url:string,
      name:string
    }
      //create api response containg all the data we need
      let promise=new Promise(function(resolve,reject){
        //communicate with API to get the information on name ,repo url and that
        
      })

  }

  // receiving the data 
  //funcion for getRepo  [search ] from user query
  //create api response containg all the data we need
  //create a promise that upon resolve it returns the data and incase there is an error it rejects the error return array

}
