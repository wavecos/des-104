import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pet} from '../../model/pet.model';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss'],
})
export class PetItemComponent implements OnInit {

  @Input() pet: Pet;
  @Output() deleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  deletePet(petId: string) {
    this.deleteEvent.emit(petId);
  }

}
