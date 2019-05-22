import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  template: `
    <div>
      <mylib-button></mylib-button>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
}
