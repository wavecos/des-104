import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SongDetailPageModule } from './song-detail/song-detail.module';

const routes: Routes = [
  { path: '', redirectTo: 'songs', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'songs', 
    children: [
      { path: '', loadChildren: './song-search/song-search.module#SongSearchPageModule' },
      { path: ':trackId', loadChildren: './song-detail/song-detail.module#SongDetailPageModule' }
    ]
 },
  // { path: 'song-search', loadChildren: './song-search/song-search.module#SongSearchPageModule' },
  // { path: 'song-detail', loadChildren: './song-detail/song-detail.module#SongDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
