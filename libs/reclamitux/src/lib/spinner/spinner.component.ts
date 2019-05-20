/**
 * Copypasted from nebular nbSpinner so we can use our own html
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-spinner',
  template: `
    <div class="home-spinner">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="message" *ngIf="message">{{ message }}</div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  @Input() message: string = 'Cargando...';
}
