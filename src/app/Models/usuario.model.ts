import { Role } from './role.model';

export class Usuario {
    constructor(
        public _id: string,
        public first_name: string,
        public last_name: string,
        public email: string,
        public password: string,
        public role: Role,
        public token: string
    ){
        
    }
}