import { Component, OnInit } from '@angular/core';
import {Kind} from '../../model/kind.enum';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.page.html',
  styleUrls: ['./pet-form.page.scss'],
})
export class PetFormPage implements OnInit {

  kinds = Kind;

  constructor() { }

  ngOnInit() {
  }

}
