import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EstadisticasComponent} from './estadisticas/estadisticas.component';
import {UsuariosComponent} from './usuarios/usuarios.component';

const childAdminRoutes: Routes = [
    {
        path: '',
        component: EstadisticasComponent
    },
    {
        path:'usuarios',
        component: UsuariosComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(childAdminRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildAdminRoutesModule { }