import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EstadisticasComponent} from './estadisticas/estadisticas.component'

const childAdminRoutes: Routes = [
    {
        path: '',
        component: EstadisticasComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(childAdminRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildAdminRoutesModule { }