import { MylibModule } from '@reclamador/mylib';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { TestComponent } from './test/test.component';
import { TwoLibModule } from 'dist/libs/two-lib';

const PAGES_COMPONENTS = [
  PagesComponent,
  TestComponent
];

@NgModule({
  imports: [
    ThemeModule,
    MylibModule,
    TwoLibModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  exports: [TestComponent]
})
export class PagesModule {}
