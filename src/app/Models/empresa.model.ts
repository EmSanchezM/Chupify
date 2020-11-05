import { Usuario } from './usuario.model';
import { PlanPago } from './planPago.model';

export class Empresa{
    constructor(
        public _id: string,
        public name: string,
        public rubro: string,
        public tienda: string,
        public usuario: Usuario,
        public plan_pago: PlanPago
    ){}
}