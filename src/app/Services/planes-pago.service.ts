import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

/*RXJS*/
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
/*Modelos*/
import { PlanPago } from '../Models/planPago.model';

const API_URL = environment.API;

@Injectable({
  providedIn: 'root'
})
export class PlanesPagoService {

  public headers: HttpHeaders;
  public planesPago: PlanPago[] = [];
  public planPago: PlanPago;

  constructor(private http: HttpClient, private router: Router) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getAllPlanes(): Observable<any>{
    return this.http.get(`${API_URL}/planespago`, {headers: this.headers}).pipe(
      map((planesPago: PlanPago[])=>{
        return this.planesPago = planesPago;
      }),
      catchError(error=>{ return throwError('ERROR al obtener planes de pago', error)})
    )
  }

  getPlanid(id:string): Observable<any>{
    return this.http.get(`${API_URL}/planespago/${id}`, {headers: this.headers}).pipe(
      map((planPago: PlanPago)=> this.planPago = planPago),
      catchError(error=>{return throwError('ERROR al obtener plan de pago por id', error)})
    );
  }

  createPlanPago(planPago: PlanPago): Observable<any>{
    let params = JSON.stringify(planPago);
    return this.http.post(`${API_URL}/planespago`, params, {headers: this.headers}).pipe(
      map(response=>{
        return response;
      }),
      catchError(error=>{
        console.log('ERROR ', error.message)
        return throwError('ERROR al crear plan de pago');
      })
    )
  }

  actualizarPlanPago(planPago: PlanPago, id:string){
    let params = JSON.stringify(planPago);
    return this.http.put(`${API_URL}/planespago/${id}`, params, {headers: this.headers}).pipe(
      map(response=> response),
      catchError(error=>{return throwError('ERROR al actualizar plan de pago', error);})
    )
  }

  borrarPlanPago(id: string){
    return this.http.delete(`${API_URL}/planespago/${id}`, {headers: this.headers}).pipe(
      map(response=> response),
      catchError(error=> throwError('ERROR al borrar plan de pago', error))
    )
  }
  
}
