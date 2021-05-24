import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-one',
  templateUrl: './search-one.component.html',
  styleUrls: ['./search-one.component.css']
})
export class SearchOneComponent implements OnInit {

  faSearch = faSearch;
  search:string = '';
  githubsearchService: GithubsearchService;
  public shwinput = true;
  public showrepo = false;



  constructor(githubsearchService:GithubsearchService) { 
    this.githubsearchService = githubsearchService
  }

  ngOnInit(): void {
  }

  submitQuery(){
    this.githubsearchService.getUserDetails(this.search)
    this.shwinput = false;
    this.showrepo = true;
  }

  showrepodata(event:any){
    this.shwinput = event;
    this.showrepo = false;
  }
}