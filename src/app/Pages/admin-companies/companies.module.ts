import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedHomeModule } from '../../Components/shared.module';

import { AdminCompaniesComponent } from './admin-companies.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { PaginasComponent } from './paginas/paginas.component';


@NgModule({
    declarations: [
        AdminCompaniesComponent,
        ArchivosComponent,
        PaginasComponent
    ],
    exports: [
        AdminCompaniesComponent,
        ArchivosComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedHomeModule
    ]
})
export class PagesAdminCompaniesModule { }