import { Component, OnDestroy } from '@angular/core';
import {
  NbMenuItem,
  NbSidebarService
} from '@nebular/theme';

@Component({
  selector: 'demo-sample-layout',
  styles: [
    `
      :host nb-layout-header a {
        font-size: 2rem;
        text-decoration: none;
      }
      :host nb-layout-column {
        height: 50vw;
      }
      :host nb-layout-column:first-child {
        background: #f4f4f7;
      }
    `
  ],
  template: `
    <nb-layout>
      <nb-layout-header subheader>
        <a href="#" (click)="toggle()"><i class="nb-menu"></i></a>
      </nb-layout-header>

      <nb-sidebar></nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
    </nb-layout>
  `
})
export class SampleLayoutComponent implements OnDestroy {
  subMenu: NbMenuItem[] = [];
  layout: any = {};
  sidebar: any = {};

  private alive = true;

  constructor(protected sidebarService: NbSidebarService) {}

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
