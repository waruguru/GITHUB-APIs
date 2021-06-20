import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data-service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    username: string;
    isNotEmpty: boolean;
    dataService: DataService;

  constructor(dataService: DataService, private router: Router) {
    this.dataService = dataService;
   }

  startSearch(){
    if(this.username){
        this.dataService.getData(this.username);
        this.router.navigate(['../results']);
    }else{
        this.isNotEmpty = true;
    }
  }
  hideAlert(){
      this.isNotEmpty = false;
  }

  ngOnInit(): void {
      this.isNotEmpty = false;
  }

}
