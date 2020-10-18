import { Injectable } from '@angular/core';
import { AsyncValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

import { Observable} from 'rxjs';

import { Usuario } from '../Models/usuario.model';

import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ValidadorService{

  public usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  passwordsIguales( password: string, passwordrepeat: string ) {

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.controls[password];
      const pass2Control = formGroup.controls[passwordrepeat];

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }

    }
  }

  existeEmail(email:string): AsyncValidatorFn{
    return (formGroup: FormGroup): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> | null =>{
      const emailControl = formGroup.controls[email];

      this.usuarioService.getUsuarioEmail(emailControl.value).subscribe(
        response=>{
          console.log(response)
          this.usuarios = response;
          this.usuarios.map(usuario=>{
            console.log(usuario.email, emailControl.value);
            if(usuario.email === emailControl.value){
              emailControl.setErrors({existeEmail: true});
            }else{
              emailControl.setErrors(null);
            }
          })
        }
      )
      return null;
    }
    
  }
}
