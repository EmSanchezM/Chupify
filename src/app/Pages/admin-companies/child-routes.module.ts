import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchivosComponent } from './archivos/archivos.component';
import { PaginasComponent } from './paginas/paginas.component';
import { LogoutComponent } from './logout/logout.component'

const childAdminCompaniesRoutes: Routes = [
    {
        path: 'archivos',
        component: ArchivosComponent  
    },
    {
        path:'paginas',
        component: PaginasComponent
    },
    {
        path:'logout',
        component: LogoutComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(childAdminCompaniesRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildAdminCompaniesRoutesModule { }