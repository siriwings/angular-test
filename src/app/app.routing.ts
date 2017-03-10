import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AboutUserComponent} from "./about/about-user.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'about/:name', component: AboutUserComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),FormsModule,CommonModule],
  exports: [RouterModule],
  declarations: [
    AboutComponent,
    AboutUserComponent,
    DashboardComponent,
    HomeComponent,
    NotFoundComponent
  ]
})

export class appRouting {}
//
// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'contact', component: ContactComponent }
// ];
//
// export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
