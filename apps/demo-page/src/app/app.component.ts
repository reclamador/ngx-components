import { Component } from '@angular/core';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	multiselectValue = [];
	multiselectOptions = [{
		id: 1,
		name: 'opción 1'
	}, {
		id: 2,
		name: 'opción 2'
	}];
}
