import { Component, OnInit } from '@angular/core';
import { Song } from '../model/song.model';
import { SongService } from '../services/song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.page.html',
  styleUrls: ['./song-search.page.scss'],
})
export class SongSearchPage implements OnInit {

  artistName: string = 'beatles';
  songs: Song[] = [];
  ocultar: boolean = false;

  constructor(private songService: SongService, private router: Router) { }

  ngOnInit() {
  }

  searchArtist() {
    console.log("busqueda para: " + this.artistName);
    this.songService.getSongs(this.artistName)
      .subscribe((songs) => {
        this.songs = songs;
        this.ocultar = true;
      });
  }

  showDetail() {
    console.log('ir a detalle 3');
    this.router.navigate['/song/detail'];
  }

}
