import {Component, Input, OnInit} from '@angular/core';
import {Pet} from '../../model/pet.model';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss'],
})
export class PetItemComponent implements OnInit {

  @Input() pet: Pet;

  constructor() { }

  ngOnInit() {}

}
