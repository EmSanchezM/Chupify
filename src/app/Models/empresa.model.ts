export class EmpresaRegistro{
    constructor(
        public id: string,
        public first_name: string,
        public last_name: string,
        public email: string,
        public password: string,
        public role: string,
        public name: string,
        public rubro: string,
        public tienda: string,
        public planpay: string
    ){}

    get fullName(){
        return `${this.first_name} ${this.last_name}`;
    }
}