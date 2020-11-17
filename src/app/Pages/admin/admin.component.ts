import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  routes:any = [
    {
      path: 'inicio',
      icono: 'home',
      titulo: 'Inicio'    
    },
    {
      path: 'empresas',
      icono: 'shop',
      titulo: 'Empresas'    
    },
    {
      path: 'planes-pago',
      icono: 'dollar-circle',
      titulo: 'Planes de Pago'    
    },
    {
      path: 'plantillas',
      icono: 'html5',
      titulo: 'Gestion de Plantillas'    
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
