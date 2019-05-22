import { Component } from '@angular/core';

@Component({
  selector: 'demo-test',
  styleUrls: [],
  template: '<two-lib-button></two-lib-button>'
})
export class TestComponent {
  text = 'Prueba comp'
  constructor() {}
  clicktest() {
    // const oneLib = new OneLib();
    // console.log(oneLib.foo());
  }
}
