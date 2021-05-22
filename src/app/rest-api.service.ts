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
  userDetails:UserDetails
  repoClass:RepoClass
  repoData:any=[]//repo data full
  singleRepoData:any=[]//for single repo data


  constructor(private http:HttpClient) { 
    this.userDetails=new UserDetails('','','','');//for userDetails
    this.repoClass=new RepoClass('',newDate() ,'','','','','')//for repos
  }
  // receiving the data 
  //funcion for getName  [search ] from user query
  //create a promise that upon resolve it returns the data and incase there is an error it rejects the error
  getUserDetails(user:string){
    //declare data as empty everytime the data is called
    this.userDetails=new UserDetails('','','','');//for userDetails

    interface ApiResponse{
      login:string,
      avatar_url:string,
      repos_url:string,
      name:string
    }
      //create api response containg all the data we need
      //initialize promise as a variable

      let promise=new Promise((resolve,reject) =>{
        //communicate with API to get the information on name ,repo url and that
        this.http.get<ApiResponse>('https://api.github.com/users/'+ user +'?access_token=' + environment.apikey).toPromise().then(response =>{
          this.userDetails.login=response.login,
          this.userDetails.avatar_url=response.avatar_url,
          this.userDetails.repo_url=response.repos_url
          this.userDetails.name=response.name

          resolve("It is successful")
        }), (error:any)=>{
          reject(error);
        }

      })
      return promise

      

  }

  // receiving the data 
  getUserRepos(user:string){
//delete everything in the array
    this.repoData.splice(0,this.repoData.length)
    let promise =new Promise((resolve, reject) => {
      this.http.get<any>('https://api.github.com/users/'+ user+'/repos?access_token=' + environment.apikey).toPromise().then(response =>{
        for ( var i=0;i<response.length;i++){
        this.singleRepoData=new RepoClass(response[i].name,response[i].updated_at,response[i].html_url,response[i].clone_url,response[i].git_url, response[i].pushed_at,response[i].collaborators_url)
        this.repoData.push(this.singleRepoData)
        }
        resolve('It is super succesful')
      }),(error:any)=>{
        reject(error)
      }
      })
      return promise;
      
    

  }
  //funcion for getRepo  [search ] from user query in array

  //create api response containg all the data we need
  //create a promise that upon resolve it returns the data and incase there is an error it rejects the error return array

}
