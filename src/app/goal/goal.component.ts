import { Quote } from '../quote-class/quote';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert-service/alert.service';
import { Goal } from '../goal'
import { GoalService } from '../goal-service/goal.service';
import { HttpClient } from '@angular/common/http';
import { QuoteRequestService } from '../quote-http/quote-request.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

    goals: Goal[];
    alertService: AlertService;
    quote: Quote;
    quoteService: QuoteRequestService;

    constructor(goalService: GoalService, alertService:AlertService, quoteService:QuoteRequestService) {
        this.goals = goalService.getGoals();
        this.alertService = alertService;
        this.quoteService = quoteService;
     }


  addNewGoal(goal){
      let goalLength = this.goals.length;
      goal.id = goalLength + 1;
      let cDate = new Date(goal.completeDate);
      goal.completeDate = new Date(cDate.getFullYear(), cDate.getMonth(), cDate.getDate());
      this.goals.push(goal);
      this.alertService.alertMe("Goal successfully added.")
  }
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index){
    if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete "${this.goals[index].name}"?`);
        if(toDelete){
            this.goals.splice(index, 1);
            this.alertService.alertMe("The goal has been deleted.");
        }
    }
  }

  ngOnInit(): void {
      this.quoteService.quoteRequest();
      this.quote = this.quoteService.quote;
  }

}
