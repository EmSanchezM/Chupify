import { Component, OnInit } from '@angular/core';
/*MODELOS*/
import { PlanPago } from 'src/app/Models/planPago.model';

/*SERVICIOS*/
import { PlanesPagoService } from 'src/app/Services/planes-pago.service';

@Component({
  selector: 'app-planes-pago',
  templateUrl: './planes-pago.component.html',
  styleUrls: ['./planes-pago.component.css']
})
export class PlanesPagoComponent implements OnInit {
  public status: Boolean = false;
  public mensaje: string = '';
  public planesPago: PlanPago[] = [];

  constructor(private planesPagoService: PlanesPagoService) { }

  ngOnInit(): void {
    this.getPlanesPago();
  }

  getPlanesPago(){
    this.planesPagoService.getAllPlanes().subscribe(
      response=> this.planesPago = response
    )
  }

  borrarPlan(planPago: PlanPago){
    this.planesPagoService.borrarPlanPago(planPago._id).subscribe(
      response=>{
        console.log(response);
        if(response['ok']){
          this.status = true;
          this.mensaje = `${response['message']} exitosamente!`;
        }
        this.getPlanesPago();
      }, 
      error=>{
        this.status = false;
        this.mensaje = `${error}`
      }
    )
  }

}
