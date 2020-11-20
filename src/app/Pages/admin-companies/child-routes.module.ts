import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchivosComponent } from './archivos/archivos.component';
import { PaginasComponent } from './paginas/paginas.component';

const childAdminCompaniesRoutes: Routes = [
    {
        path: 'archivos',
        component: ArchivosComponent  
    },
    {
        path:'paginas',
        component: PaginasComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(childAdminCompaniesRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildAdminCompaniesRoutesModule { }