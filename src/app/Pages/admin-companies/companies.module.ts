import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

import { SharedHomeModule } from '../../Components/shared.module';

import { AdminCompaniesComponent } from './admin-companies.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { PaginasComponent } from './paginas/paginas.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
    declarations: [
        AdminCompaniesComponent,
        ArchivosComponent,
        PaginasComponent,
        LogoutComponent
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
        EditorModule,
        SharedHomeModule
    ]
})
export class PagesAdminCompaniesModule { }