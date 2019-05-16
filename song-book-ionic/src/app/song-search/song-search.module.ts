import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SongSearchPage } from './song-search.page';
import { SongItemComponent } from '../components/song-item/song-item.component';

const routes: Routes = [
  {
    path: '',
    component: SongSearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SongSearchPage,
    SongItemComponent
  ]
})
export class SongSearchPageModule {}
