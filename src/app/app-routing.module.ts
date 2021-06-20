import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: 'search', component: SearchComponent},
    { path: 'results', component: ResultsComponent},
    { path: '404', component: NotFoundComponent},
    { path: '', redirectTo:'search', pathMatch:'full'},
    { path: '**', redirectTo:'404', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
