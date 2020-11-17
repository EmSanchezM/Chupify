import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*COMPONENTES*/
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  exports: [
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzStepsModule,
    NzCollapseModule,
    NzTableModule,
    NzButtonModule,
    NzUploadModule,
    NzModalModule
  ],
  imports: [
    CommonModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzStepsModule,
    NzCollapseModule,
    NzTableModule,
    NzButtonModule,
    NzUploadModule,
    NzModalModule
  ]
})
export class NgZorroModule { }
