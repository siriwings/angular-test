import {Component, OnInit} from '@angular/core';
import {User} from "../shared/models/user";
import {ActivatedRoute, Router} from "@angular/router";
const m_users: User[] = [
  {
    name: 'Chris',
    nickname: 'dsevilayha',
    phone:'010-4443-0009'
  },
  {
    name: 'Nick',
    nickname: 'whatnicktweets',
    phone:'010-6666-7777'
  },
  {
    name: 'Holly',
    nickname: 'hollylawly',
    phone:'010-2031-2323'
  }
];
@Component({
  selector: 'app-about',
  template: `
<p>This is user single page</p>
<div *ngIf="user">
    {{user.name}}
    {{user.phone}}
    {{user.nickname}}
    <button (click)="goBack()">Go back</button>
 </div> `,
  styles: []
})
export class AboutUserComponent implements OnInit {
user;
  constructor(private route:ActivatedRoute,private router:Router) {}

  ngOnInit() {

    let name=this.route.snapshot.params['name'];
    console.log(name);

    this.user=m_users.find(user=>user.name===name);
  }

  goBack() {
    this.router.navigate(['/about']);
  }

}
