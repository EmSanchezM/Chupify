import { Component, OnInit } from '@angular/core';
/*MODEOLOS*/
import { Empresa } from 'src/app/Models/empresa.model';

/*SERVICIOS*/
import { EmpresaService } from 'src/app/Services/empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  public status: Boolean = false;
  public mensaje: string = '';
  public empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
  }

  getEmpresas(){
    this.empresaService.getAllEmpresas().subscribe(
      response=> this.empresas = response
    )
  }

  borrarEmpresa(empresa: Empresa){
    this.empresaService.borrarEmpresa(empresa._id).subscribe(
      response=>{
        console.log(response);
        if(response['ok']){
          this.status = true;
          this.mensaje = `${response['message']} exitosamente!`;
        }
        this.getEmpresas();
      }, 
      error=>{
        this.status = false;
        this.mensaje = `${error}`
      }
    )
  }

}
