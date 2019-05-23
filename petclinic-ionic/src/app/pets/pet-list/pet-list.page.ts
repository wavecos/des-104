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
    this.pets = this.petService.getPets();
    console.log('hello pet list!!');
  }

}
