import { OneLib } from '@reclamador/one-lib';
import { Component } from '@angular/core';

@Component({
  selector: 'demo-test',
  styleUrls: [],
  template: '<reclamador-my-button (click)="clicktest()">{{text}}</reclamador-my-button>'
})
export class TestComponent {
  text = 'Prueba comp'
  constructor() {}
  clicktest() {
    const oneLib = new OneLib();
    console.log(oneLib.foo());
  }
}
