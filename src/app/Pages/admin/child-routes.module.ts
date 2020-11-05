import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticasComponent } from './estadisticas/estadisticas.component';
//CRUD USUARIOS
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';
import { PlanesPagoComponent } from './planes-pago/planes-pago.component';
import { PlanesFormComponent } from './planes-pago/planes-form/planes-form.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresasFormComponent } from './empresas/empresas-form/empresas-form.component';

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
    },
    {
        path: 'empresas',
        component: EmpresasComponent
    },
    {
        path: 'empresas/nuevo',
        component: EmpresasFormComponent
    },
    {
        path: 'empresas/editar/:id',
        component: EmpresasFormComponent
    },
    {
        path: 'planes-pago',
        component: PlanesPagoComponent
    },
    {
        path: 'planes-pago/nuevo',
        component: PlanesFormComponent
    },
    {
        path: 'planes-pago/editar/:id',
        component: PlanesFormComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(childAdminRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildAdminRoutesModule { }