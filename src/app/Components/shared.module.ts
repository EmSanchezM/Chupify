  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CardTiendasComponent } from './card-tiendas/card-tiendas.component';
import { PreciosComponent } from './precios/precios.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent, 
        BannerComponent, 
        CardTiendasComponent,
        PreciosComponent,
        FooterComponent,
         
    ],
    exports: [
        HeaderComponent, 
        BannerComponent, 
        CardTiendasComponent,
        PreciosComponent,
        FooterComponent
    ],
})
export class SharedHomeModule { }