import { Injectable } from '@angular/core';
import { Goals } from '../goalsList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

    getGoals(){
        return Goals;
    }
  constructor() { }
}
