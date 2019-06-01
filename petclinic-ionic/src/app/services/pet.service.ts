import {Injectable} from '@angular/core';
import {Pet} from '../model/pet.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {APIResponse} from '../model/apiresponse';
import {map} from 'rxjs/operators';
import {unescape} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) {
  }

  getPets(): Observable<APIResponse> {
    return this.http.get('http://10.0.0.17:8080/pet')
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
    return this.http.get('http://10.0.0.17:8080/pet/' + id)
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
            registerDate: jsonPet['registerDate'],
            status: jsonPet['status']
          };
          response.result = pet;
        }
        return response;
      }));
  }

  createPet(pet: Pet): Observable<APIResponse> {
    return this.http.post('http://10.0.0.17:8080/pet', pet)
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
            registerDate: jsonPet['registerDate'],
            status: jsonPet['status']
          };
          response.result = pet;
        }
        return response;
      }));
  }

  updatePet(pet: Pet): Observable<APIResponse> {
    return this.http.put('http://10.0.0.17:8080/pet/' + pet.id, pet)
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
    return this.http.delete('http://10.0.0.17:8080/pet/' + id)
      .pipe(map(json => {
        const response: APIResponse = {
          status: json['status'],
          message: json['message'],
          result: json['result']
        };
        return response;
      }));
  }

  // Pet Photo
  uploadPetPhoto(petId: string, imageBase64: string): Observable<APIResponse> {
    const blob = this.imageBase64toBlob(imageBase64);
    const formData = new FormData();
    formData.append('sampleFile', blob);

    return this.http.post('http://10.0.0.17:8080/upload/' + petId, formData)
      .pipe(map(json => {
        const response: APIResponse = {
          status: json['status'],
          message: json['message'],
          result: json['result']
        };
        return response;
      }));
  }

  imageBase64toBlob(imageBase64) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString;
    if (imageBase64.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(imageBase64.split(',')[1]);
    } else {
      byteString = unescape(imageBase64.split(',')[1]);
    }

    // separate out the mime component
    const mimeString = imageBase64.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });

  }

}
