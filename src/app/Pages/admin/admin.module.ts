import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedHomeModule } from '../../Components/shared.module';

import {AdminComponent} from './admin.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';
//import { EmpresasComponent } from './empresas/empresas.component';
//import { EmpresasFormComponent } from './empresas/empresas-form/empresas-form.component';
import { PlanesPagoComponent } from './planes-pago/planes-pago.component';
import { PlanesFormComponent } from './planes-pago/planes-form/planes-form.component';

@NgModule({
    declarations: [
        AdminComponent,
        EstadisticasComponent,
        UsuariosComponent,
        UsuarioFormComponent,
        //EmpresasComponent,
        //EmpresasFormComponent,
        PlanesPagoComponent,
        PlanesFormComponent,
    ],
    exports: [
        AdminComponent,
        EstadisticasComponent,
        UsuariosComponent,
        //EmpresasComponent,
        PlanesPagoComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedHomeModule
    ]
})
export class PagesAdminModule { }