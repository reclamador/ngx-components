import { Component } from '@angular/core';

@Component({
  selector: 'demo-ngx-pages',
  styleUrls: [],
  template: `
    <demo-sample-layout>
      <router-outlet></router-outlet>
    </demo-sample-layout>
  `,
})
export class PagesComponent {
  menu = [];
}
