import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'two-lib-button',
  templateUrl: './my-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoLibButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
