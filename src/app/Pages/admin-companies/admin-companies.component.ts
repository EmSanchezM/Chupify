import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-companies',
  templateUrl: './admin-companies.component.html',
  styleUrls: ['./admin-companies.component.css']
})
export class AdminCompaniesComponent implements OnInit {

  routes:any = [
    {
      path: 'archivos',
      icono: 'file-add',
      titulo: 'Gestion de archivos'    
    },
    {
      path:'paginas',
      icono: 'html5',
      titulo: 'Gestion de paginas'
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
