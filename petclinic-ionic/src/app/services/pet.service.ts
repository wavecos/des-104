import {Injectable} from '@angular/core';
import {Pet} from '../model/pet.model';
import {Kind} from '../model/kind.enum';
import {Status} from '../model/status.enum';

@Injectable({
    providedIn: 'root'
})
export class PetService {

    constructor() {
    }

    getPets(): Pet[] {
        const pets: Pet[] = [
            {
                id: '0',
                name: 'firulais',
                breed: 'Gran Danes',
                kind: Kind.DOG,
                age: 3,
                registerDate: new Date(),
                photoUrl: 'https://cdn.newsapi.com.au/image/v1/67a523605bca40778c6faaad93883a3b',
                status: Status.ACTIVE
            },
            {
                id: '1',
                name: 'Garfield',
                breed: 'Siames',
                kind: Kind.CAT,
                age: 5,
                registerDate: new Date(),
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF968Sm-HTQEZbOjG_CNBPBCo_2FFwOBTLPPr0cGU0bgKgFIt5',
                status: Status.ACTIVE
            }
        ];
        return pets;
    }
}
