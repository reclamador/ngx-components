import { PagesModule } from './pages/pages.module';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';

import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TwoLibModule } from '../../../../libs/two-lib/src';
import { MylibModule } from '../../../../libs/mylib/src';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    ThemeModule.forRoot(),
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    AppRoutingModule,
    PagesModule,
    TwoLibModule,
    MylibModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
