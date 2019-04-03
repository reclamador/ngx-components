import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';

import { TwoLibModule } from '@reclamador/two-lib';

const routes: Routes = [{
  path: 'test',
  component: TestComponent
}];

const components = [
  TestComponent
];

@NgModule({
  imports: [
    ThemeModule,
    TwoLibModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    ...components,
  ],
})
export class TestModule { }
