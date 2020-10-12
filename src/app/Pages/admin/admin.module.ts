import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NgModel, NgControl } from '@angular/forms';

import { SharedHomeModule } from '../../Components/shared.module';

import {AdminComponent} from './admin.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component'

@NgModule({
    declarations: [
        AdminComponent,
        EstadisticasComponent
    ],
    exports: [
        AdminComponent,
        EstadisticasComponent
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