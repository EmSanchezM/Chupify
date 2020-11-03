import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticasComponent } from './estadisticas/estadisticas.component';
//CRUD USUARIOS
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';

const childAdminRoutes: Routes = [
    {
        path: 'inicio',
        component: EstadisticasComponent
    },
    {
        path:'usuarios',
        component: UsuariosComponent
    },
    {
        path:'usuarios/nuevo',
        component: UsuarioFormComponent
    },
    {
        path: 'usuarios/editar/:id',
        component: UsuarioFormComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(childAdminRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildAdminRoutesModule { }