import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { DataService } from 'src/app/data-service/data.service';

import { browserRefresh } from '../../app.component'



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, AfterViewInit {

    user: User;
    repos = [];
    dataService: DataService;
    isDoneLoading: boolean;
    browserRefresh: boolean;
    router: Router;

  constructor(dataService: DataService, router: Router) { 
      this.dataService = dataService;
      this.router = router;
  }
  

  ngAfterViewInit(){
      this.isDoneLoading = true;
  }

  ngOnInit(): void {
      this.isDoneLoading = false;
      this.browserRefresh = browserRefresh;
      this.user = this.dataService.user;
      this.repos = this.dataService.repos;
      if(browserRefresh){
          this.router.navigate(['../search']);
      }
  }

}
