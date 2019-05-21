/**
 * Simple html spinner
 */
import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'ngx-spinner',
  template: `
    <div class="home-spinner">
      <span *ngFor="let elm of Arr(elements).fill(1)" [style.background-color]="color"></span>
    </div>
    <div class="message" *ngIf="message">{{ message }}</div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @HostBinding('class.fade') get fade() {
    return this.opacity;
  };
  @HostBinding('class.fixed') get fix() {
    return this.fixed;
  };

  public Arr = Array; // accesor to html global Array object
  public elements = 12; // hardcoded in scss, changes should be made both places

  @Input() color: string = '#6699ff';
  @Input() message: string;
  @Input() fixed: boolean = false;
  @Input() opacity: boolean = true;
}
