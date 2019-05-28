import { Component, OnInit } from '@angular/core';
import {Pet} from '../../model/pet.model';
import {PetService} from '../../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.page.html',
  styleUrls: ['./pet-list.page.scss'],
})
export class PetListPage implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService) { }

  ngOnInit() {
    console.log('Pet List');
    this.loadPets();
  }

  loadPets() {
    this.petService.getPets()
      .subscribe(response => {
        if (response.status === 'OK') {
          this.pets = [];
          response.result.forEach(json => {
            const pet: Pet = {
              id: json['_id'],
              name: json['name'],
              age: json['age'],
              kind: json['kind'],
              breed: json['breed'],
              photoUrl: json['photoUrl'],
              registerDate: json['registerDate'],
              status: json['status']
            };
            this.pets.push(pet);
          });

        } else {
          console.log(response.message);
        }
      });
  }

}
