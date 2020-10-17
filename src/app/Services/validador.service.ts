import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadorService {

  constructor() { }

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
}
