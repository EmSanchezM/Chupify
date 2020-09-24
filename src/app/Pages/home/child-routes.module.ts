import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent } from './index-page/index-page.component';

const childHomeRoutes: Routes = [
    {
        path: '',
        component: IndexPageComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(childHomeRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildHomeRoutesModule { }