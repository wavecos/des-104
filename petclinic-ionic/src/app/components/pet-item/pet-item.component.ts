import {Component, Input, OnInit} from '@angular/core';
import {Pet} from '../../model/pet.model';
import {PetService} from '../../services/pet.service';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss'],
})
export class PetItemComponent implements OnInit {

  @Input() pet: Pet;

  constructor(private petService: PetService) { }

  ngOnInit() {}

  deletePet(petId: string) {
    console.log('Eliminar mascota con id : ' + petId);
    this.petService.deletePetById(petId)
      .subscribe(response => {
        console.log('message :' + response.message);
      });
  }

}
