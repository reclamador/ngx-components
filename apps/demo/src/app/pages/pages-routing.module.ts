import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'test',
    component: TestComponent,
  }, {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full',
  }],
}];

const components = [
  TestComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    ...components,
  ],
})
export class PagesRoutingModule {
}
