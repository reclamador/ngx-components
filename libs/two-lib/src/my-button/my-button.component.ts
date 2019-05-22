import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'two-lib-button',
  template: '<button>MyButton</button>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoLibButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
