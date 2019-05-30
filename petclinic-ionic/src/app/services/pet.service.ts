import {Injectable} from '@angular/core';
import {Pet} from '../model/pet.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {APIResponse} from '../model/apiresponse';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) {
  }

  getPets(): Observable<APIResponse> {
    return this.http.get('http://localhost:8080/pet')
      .pipe(map(json => {
        const response: APIResponse = {
          status: json['status'],
          message: json['message'],
          result: json['result']
        };

        if (response.status === 'OK') {
          const pets: Pet[] = [];
          response.result.forEach(jsonPet => {
            const pet: Pet = {
              id: jsonPet['_id'],
              name: jsonPet['name'],
              age: jsonPet['age'],
              kind: jsonPet['kind'],
              breed: jsonPet['breed'],
              photoUrl: jsonPet['photoUrl'],
              registerDate: jsonPet['registerDate'],
              status: jsonPet['status']
            };
            pets.push(pet);
          });
          response.result = pets;
        }

        return response;
      }));
  }

  getPetById(id: string): Observable<APIResponse> {
    return this.http.get('http://localhost:8080/pet/' + id)
      .pipe(map(json => {
        const response: APIResponse = {
          status: json['status'],
          message: json['message'],
          result: json['result']
        };

        if ( response.status === 'OK' ) {
          const jsonPet = response.result;
          const pet: Pet = {
            id: jsonPet['_id'],
            name: jsonPet['name'],
            age: jsonPet['age'],
            kind: jsonPet['kind'],
            breed: jsonPet['breed'],
            photoUrl: jsonPet['photoUrl'],
            registerDate: jsonPet['registerDate'],
            status: jsonPet['status']
          };
          response.result = pet;
        }
        return response;
      }));
  }

  createPet(pet: Pet): Observable<APIResponse> {
    return this.http.post('http://localhost:8080/pet', pet)
      .pipe(map(json => {
        const response: APIResponse = {
          status: json['status'],
          message: json['message'],
          result: json['result']
        };
        return response;
      }));
  }

  updatePet(pet: Pet): Observable<APIResponse> {
    return this.http.put('http://localhost:8080/pet/' + pet.id, pet)
      .pipe(map(json => {
        const response: APIResponse = {
          status: json['status'],
          message: json['message'],
          result: json['result']
        };
        return response;
      }));
  }

  deletePetById(id: string): Observable<APIResponse> {
    return this.http.delete('http://localhost:8080/pet/' + id)
      .pipe(map(json => {
        const response: APIResponse = {
          status: json['status'],
          message: json['message'],
          result: json['result']
        };
        return response;
      }));
  }

}
