import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/Services/empresa.service';

import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  public totalUsuarios = 0;
  public totalEmpresas = 0; 

  constructor(
    private usuarioService: UsuarioService,
    private empresaService: EmpresaService
  ) { }

  ngOnInit(): void {
    this.countUsuarios()
    this.countEmpresas()
  }

  countUsuarios(){
    this.usuarioService.getAllUsuarios().subscribe(response=>{
      this.totalUsuarios = response.length
    }, error=> console.error(error))
  }

  countEmpresas(){
    this.empresaService.getAllEmpresas().subscribe(response=>{
      this.totalEmpresas = response.length
    }, error=> console.error(error))
  }

}
