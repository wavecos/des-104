import {Kind} from './kind.enum';
import {Status} from './status.enum';

export interface Pet {
    id: string;
    name: string;
    breed: string; // raza
    kind: Kind; // especie
    age: number; // edad
    registerDate: Date; // fecha de registro
    status: Status; // estado
}
