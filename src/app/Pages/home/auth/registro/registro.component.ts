import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

import { EmpresaRegistro } from 'src/app/Models/empresa.model';

import { UsuarioService } from 'src/app/Services/usuario.service';
import { ValidadorService } from 'src/app/Services/validador.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UsuarioService]
})
export class RegistroComponent implements OnInit {

  public formRegistro: FormGroup;

  constructor(private fb: FormBuilder, private validador: ValidadorService, private usuarioService: UsuarioService, private router: Router) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  get nombreNoValido() {
    return this.formRegistro.get('first_name').invalid && this.formRegistro.get('first_name').touched
  }

  get apellidoNoValido() {
    return this.formRegistro.get('last_name').invalid && this.formRegistro.get('last_name').touched
  }

  get emailNoValido() {
    return this.formRegistro.get('email').invalid && this.formRegistro.get('email').touched
  }

  get emailExiste(){
    return this.formRegistro.get('email').errors?.existeEmail;
  }

  get passwordNoValido() {
    return this.formRegistro.get('password').invalid && this.formRegistro.get('password').touched
  }

  get passwordrepeatNoValido() {
    let contrasena1 = this.formRegistro.get('password').value;
    let contrasena2 = this.formRegistro.get('passwordrepeat').value;

    return (contrasena1 === contrasena2) ? false: true;
  }

  get empresaNoValida() {
    return this.formRegistro.get('name').invalid && this.formRegistro.get('name').touched
  }

  get rubroNoValido() {
    return this.formRegistro.get('rubro').invalid && this.formRegistro.get('rubro').touched
  }

  get tiendaNoValida() {
    return this.formRegistro.get('tienda').invalid && this.formRegistro.get('tienda').touched
  }

  createForm(){
    this.formRegistro = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordrepeat:['', [Validators.required]],
      role:['EMPRESA_ROLE', [Validators.required, Validators.minLength]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      rubro: ['', [Validators.required, Validators.minLength(4)]],
      tienda: ['', [Validators.required, Validators.minLength(4)]],
      planpay:['GRATIS', [Validators.required, Validators.minLength(4)]]
    },
      {
        validators: this.validador.passwordsIguales('password', 'passwordrepeat'), 
        asyncValidators: this.validador.existeEmail('email'),
        updateOn: 'blur'
      }
    );
  }

  onCreateEmpresa(){
    if(this.formRegistro.invalid){
      return Object.values(this.formRegistro.controls).forEach(control=>{control.markAsTouched();});
    }else{
      console.log(this.formRegistro.value)
      const {first_name, last_name, email, password, role, name, rubro, tienda, planpay} = this.formRegistro.value;
      const empresa = new EmpresaRegistro(first_name, last_name, email, password, role, name, rubro, tienda, planpay);
      //console.log(empresa)
      this.usuarioService.registroUsuarioEmpresa(empresa).subscribe(
        response=>{
          console.log(response);
          if(response.token){
            this.router.navigateByUrl('login');
          }
          this.formRegistro.reset();
        },error=>{
          console.log(error)
        }
      )
    }
  }


}
