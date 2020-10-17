import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
/*Interfaces*/
import { RegistroForm } from '../Models/registro-form.interface';
import { EmpresaRegistro } from 'src/app/Models/empresa.model';


const API_URL = environment.API;

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  public headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  registroUsuarioEmpresa(empresa: EmpresaRegistro){
    return this.http.post(`${API_URL}/auth/registro`, empresa).pipe(
      map(response=> {
        console.log(response);
        return response;
      }),
      catchError(error=>{
        return throwError('ERROR al registrar empresa', error);
      })
    )
  }
}
