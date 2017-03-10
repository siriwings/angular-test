import {Component, OnInit} from '@angular/core';
import {User} from "../shared/models/user";

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
    <p>
      about Works!
    </p>
   
      <ul *ngIf="users">
        <li *ngFor="let user of users"><a [routerLink]="['/about',user.name]">{{user.name}}</a> </li>
</ul>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
users: User[]=m_users;
  constructor() {
  }

  ngOnInit() {
  }

}
