import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedHomeModule } from '../../Components/shared.module';

import {AdminComponent} from './admin.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
    declarations: [
        AdminComponent,
        EstadisticasComponent,
        UsuariosComponent
    ],
    exports: [
        AdminComponent,
        EstadisticasComponent,
        UsuariosComponent
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