import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {appRouting} from "./app.routing";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    //NotFoundComponent,
    // AboutComponent,
    // DashboardComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
