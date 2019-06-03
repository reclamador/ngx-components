import { Component, Input, OnInit, Output } from '@angular/core';

import { NbMenuService, NbMenuItem } from '@nebular/theme';

export interface IUser {
  name:string;
  surnames:string;
  username: string;
  email: string;
  avatar: string;
}

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';
  @Input() appName = 'Default';
  @Input() user = {
    name: '',
    surnames: '',
    username: '',
    email: '',
    avatar: ''
  };
  @Input() userMenu: NbMenuItem[] = [];
  @Output() toggleSidebar() {
    this.isMenuToggled = !this.isMenuToggled;
    return this.isMenuToggled;
  }
  @Output() goToHome = () => {};
  isMenuToggled = false;

  constructor(
  ) {}

  ngOnInit() { }
}
