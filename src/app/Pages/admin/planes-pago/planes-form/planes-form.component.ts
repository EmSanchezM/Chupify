import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { delay } from 'rxjs/operators';

import { PlanPago } from 'src/app/Models/planPago.model';

import { PlanesPagoService } from 'src/app/Services/planes-pago.service';

@Component({
  selector: 'app-planes-form',
  templateUrl: './planes-form.component.html',
  styleUrls: ['./planes-form.component.css']
})
export class PlanesFormComponent implements OnInit {

  public formPlanPago: FormGroup;
  public planEditar: PlanPago;

  public status: Boolean = false;
  public planEditarStatus: Boolean = false;
  public mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private planesPagoService: PlanesPagoService
  ){ 
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.cargarUsuario(id);
    })
  }

  cargarUsuario(id: string){
    if(id === undefined){
      return false;
    }
    this.planesPagoService.getPlanid(id).pipe(delay(100)).subscribe(
      response=>{
        if(!response) this.router.navigateByUrl('admin/planes-pago');
        this.planEditar = response;
        
        const planForm = {
          name: response.name,
          duration: response.duration,
          price: response.price,
          description: response.description
        }

        this.formPlanPago.setValue(planForm);
      }
    )
  }

  crearFormulario(){
    this.formPlanPago = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      duration: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.minLength(1)]],
      description:['',[Validators.required, Validators.minLength(6)]],
    })
  }

  onPlanPagoForm(){
    const params = this.activatedRoute.snapshot.params;

    if(this.formPlanPago.invalid){
      return Object.values( this.formPlanPago.controls ).forEach( control => { control.markAsTouched(); });
    }else{
      const {name, duration, price, description} = this.formPlanPago.value;
      const planPago = new PlanPago('', name, duration, price, description);

      if(params.id){
        let id = params.id;
        this.planEditarStatus = true;
        this.planesPagoService.actualizarPlanPago(planPago, id).subscribe(
          response=>{
            this.status = true;
            this.mensaje = 'Plan de Pago actualizado exitosamente!';
            console.log(response);
            this.router.navigateByUrl('admin/planes-pago');
          },
          error=> console.error(error)
        )
       
      }else{
        this.planEditarStatus = false;
        this.planesPagoService.createPlanPago(planPago).subscribe(
          response=>{
            this.status = true;
            this.mensaje = 'Plan de pago agregado exitosamente!';
            console.log(response);
            this.router.navigateByUrl('admin/planes-pago');
          }, 
          error=> console.error('ERROR al agregar plan ', error)
        )
        
      }
    }
  }

  //Validaciones
  get nameNoValido() {
    return this.formPlanPago.get('name').invalid && this.formPlanPago.get('name').touched
  }

  get duracionNoValida() {
    return this.formPlanPago.get('duration').invalid && this.formPlanPago.get('duration').touched
  }
  
  get precioNoValido() {
    return this.formPlanPago.get('price').invalid && this.formPlanPago.get('price').touched
  }

  get descripcionNoValida() {
    return this.formPlanPago.get('description').invalid && this.formPlanPago.get('description').touched
  }

}
