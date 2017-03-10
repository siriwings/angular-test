import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <p>
      not-found Works!
    </p>
    <a routerLink="/">404 Error</a>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
