import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchivosComponent } from './archivos/archivos.component'

const childAdminCompaniesRoutes: Routes = [
    {
        path: 'archivos',
        component: ArchivosComponent  
    }
];

@NgModule({
    imports: [ RouterModule.forChild(childAdminCompaniesRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildAdminCompaniesRoutesModule { }