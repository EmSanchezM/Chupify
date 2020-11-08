import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { delay } from 'rxjs/operators';

import { Empresa } from 'src/app/Models/empresa.model';
import { PlanPago } from 'src/app/Models/planPago.model';
import { Role } from 'src/app/Models/role.model';
import { Usuario } from 'src/app/Models/usuario.model';

import { EmpresaService } from 'src/app/Services/empresa.service';
import { PlanesPagoService } from 'src/app/Services/planes-pago.service';

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

  public current = 0;
  public index = 'Usuario';
  
  public planesPago: PlanPago[] = [];

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public empresaService: EmpresaService,
    public planesPagoService: PlanesPagoService
  ){ 
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.cargarEmpresa(id);
    })
    this.getPlanesPago();
  }

  getPlanesPago(){
    this.planesPagoService.getAllPlanes().subscribe(
      response=> this.planesPago = response
    )
  }

  cargarEmpresa(id: string){
    if(id === undefined){
      return false;
    }
    this.empresaService.getEmpresaId(id).pipe(delay(100)).subscribe(
      response=>{
        if(!response) this.router.navigateByUrl('admin/empresas');
        this.empresaEditar = response;
        console.log(response.usuario.first_name);
        
        const empresaForm = {
          first_name_user: response.usuario.first_name,
          last_name_user: response.usuario.last_name,
          email_user: response.usuario.email,
          password: ':)',
          repeatpassword_user: ':)',
          role_user: 'EMPRESA_ROLE',
          name_empresa: response.name,
          rubro: response.rubro,
          tienda: response.tienda,
          pago: response.plan_pago.name ? `${response.plan_pago.name}`: 0
        }

        this.formEmpresa.setValue(empresaForm);
      }
    )
  }

  crearFormulario(){
    this.formEmpresa = this.fb.group({
      first_name_user: ['', [Validators.required, Validators.minLength(3)]],
      last_name_user: ['', [Validators.required, Validators.minLength(3)]],
      email_user: ['', [Validators.required, Validators.minLength(1)]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      repeatpassword_user: ['',[Validators.required]],
      name_empresa: ['', [Validators.required, Validators.minLength(3)]],
      rubro: ['', [Validators.required, Validators.minLength(3)]],
      tienda: ['', [Validators.required, Validators.minLength(5)]],
      pago: new FormControl('', Validators.required)
    })
  }

  onEmpresaForm(){
    const params = this.activatedRoute.snapshot.params;
    console.log(this.formEmpresa.value)
    if(this.formEmpresa.invalid){
      return Object.values( this.formEmpresa.controls ).forEach( control => { control.markAsTouched(); });
    }else{
      const {
        first_name_user,
        last_name_user,
        email_user,
        password, 
        name_empresa,
        rubro,
        tienda,
        pago } = this.formEmpresa.value;
      
      const roleUser = new Role('', 'EMPRESA_ROLE');
      const usuario = new Usuario('',first_name_user, last_name_user, email_user, password, roleUser,'');
      const plan_pago = new PlanPago('', pago, '','', '');
      const empresa = new Empresa('', name_empresa, rubro, tienda, usuario, plan_pago);
      
      if(params.id){
        let id = params.id;
        /*ACTUALIZAMOS EMPRESA*/
        this.empresaService.actualizarEmpresa(empresa, id).subscribe(
          response => {
            this.status = true;
            this.mensaje = 'Empresa actualizada exitosamente!';
            console.log(response);
            this.router.navigateByUrl('admin/empresas');
          },
          error=>{
            this.status = false;
            this.mensaje = `No se ha actualizado la empresa. ERROR: ${error.message}`
          }
        )
      }else{
        this.empresaService.agregarEmpresa(empresa).subscribe(
          response=>{
            this.status = true;
            this.mensaje = 'Empresa agregada exitosamente!';
            console.log(response);
            this.router.navigateByUrl('admin/empresas');
          },
          error=>{
            console.error(error);
            this.status = false;
            this.mensaje = `No se ha podido agregar ${error}`;
          }
        )
      }
    }
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'Usuario';
        break;
      }
      case 1: {
        this.index = 'Empresa';
        break;
      }
      case 2: {
        this.index = 'Confirmar';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  //Validaciones
  get nombreUsuarioNoValido() {
    return this.formEmpresa.get('first_name_user').invalid && this.formEmpresa.get('first_name_user').touched
  }

  get apellidoUsuarioNoValido() {
    return this.formEmpresa.get('last_name_user').invalid && this.formEmpresa.get('last_name_user').touched
  }
  
  get correoNoValido() {
    return this.formEmpresa.get('email_user').invalid && this.formEmpresa.get('email_user').touched
  }

  get passwordNoValida() {
    return this.formEmpresa.get('password').invalid && this.formEmpresa.get('password').touched
  }

  get repeatPasswordNoValida() {
    const password = this.formEmpresa.get('password').value;
    const repeatpassword = this.formEmpresa.get('repeatpassword_user').value;

    return (password === repeatpassword) ? false : true;
  }

  get nombreEmpresaNoValido() {
    return this.formEmpresa.get('name_empresa').invalid && this.formEmpresa.get('first_name_user').touched
  }

  get rugroNoValido() {
    return this.formEmpresa.get('rubro').invalid && this.formEmpresa.get('rubro').touched
  }

  get nombreTiendaNoValido() {
    return this.formEmpresa.get('tienda').invalid && this.formEmpresa.get('tienda').touched
  }

}
