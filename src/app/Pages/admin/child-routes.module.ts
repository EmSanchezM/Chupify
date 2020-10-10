import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const childAdminRoutes: Routes = [
    {
        path: '',
    }
];

@NgModule({
    imports: [ RouterModule.forChild(childAdminRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildAdminRoutesModule { }