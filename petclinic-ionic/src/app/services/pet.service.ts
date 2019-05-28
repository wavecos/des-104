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
        return response;
      }));
  }

  getPetById(id: string): Observable<Pet> {
    return this.http.get('http://localhost:8080/pet/' + id)
      .pipe(map(json => {
        // const response: APIResponse = {
        //   status: json['status'],
        //   message: json['message'],
        //   result: json['result']
        // };
        return json['result'];
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

  updatePet(id: string, pet: Pet): Observable<APIResponse> {
    return this.http.put('http://localhost:8080/pet/' + id, pet)
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
