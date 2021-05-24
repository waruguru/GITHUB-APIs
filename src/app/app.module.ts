import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { DetailsRepoComponent } from './details-repo/details-repo.component';
import { SearchOneComponent } from './search-one/search-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchRepoComponent,
    DetailsRepoComponent,
    SearchOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
