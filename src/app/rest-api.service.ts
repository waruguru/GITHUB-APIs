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
  // repoClass!:RepoClass


  constructor() { }
}
