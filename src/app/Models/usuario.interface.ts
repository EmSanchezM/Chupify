import { Role } from './role.model';

export class UsuarioAll {
    constructor(
        public _id: string,
        public first_name: string,
        public last_name: string,
        public email: string,
        public password: string,
        public role: Role[]
    ){
        
    }
}