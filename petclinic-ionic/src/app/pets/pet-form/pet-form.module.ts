import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PetFormPage } from './pet-form.page';
import {EnumlistPipe} from '../../utils/enumlist.pipe';
import {AgeValidatorDirective} from '../../utils/age-validator.directive';

const routes: Routes = [
  {
    path: '',
    component: PetFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PetFormPage, EnumlistPipe, AgeValidatorDirective]
})
export class PetFormPageModule {}
