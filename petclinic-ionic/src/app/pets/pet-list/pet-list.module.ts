import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PetListPage } from './pet-list.page';
import {PetItemComponent} from '../../components/pet-item/pet-item.component';

const routes: Routes = [
  {
    path: '',
    component: PetListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PetListPage, PetItemComponent]
})
export class PetListPageModule {}
