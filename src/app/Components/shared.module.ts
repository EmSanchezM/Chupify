  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent, 
        BannerComponent, 
        FooterComponent
    ],
    exports: [
        HeaderComponent, 
        BannerComponent, 
        FooterComponent
    ],
})
export class SharedHomeModule { }