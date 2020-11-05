import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { delay } from 'rxjs/operators';

import { Empresa } from 'src/app/Models/empresa.model';
import { EmpresaService } from 'src/app/Services/empresa.service';

@Component({
  selector: 'app-empresas-form',
  templateUrl: './empresas-form.component.html',
  styleUrls: ['./empresas-form.component.css']
})
export class EmpresasFormComponent implements OnInit {

  public formEmpresa: FormGroup;
  public empresaEditar: Empresa;

  public status: Boolean = false;
  public planEditarStatus: Boolean = false;
  public mensaje: string = '';

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public empresaService: EmpresaService
  ){ 
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.cargarEmpresa(id);
    })
  }

  cargarEmpresa(id: string){
    if(id === undefined){
      return false;
    }
    this.empresaService.getEmpresaId(id).pipe(delay(100)).subscribe(
      response=>{
        if(!response) this.router.navigateByUrl('admin/empresas');
        this.empresaEditar = response;
        
        const empresaForm = {
          name: response.name,
          duration: response.duration,
          price: response.price,
          description: response.description
        }

        this.formEmpresa.setValue(empresaForm);
      }
    )
  }


  crearFormulario(){
    this.formEmpresa = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      duration: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.minLength(1)]],
      description:['',[Validators.required, Validators.minLength(6)]],
    })
  }

}
