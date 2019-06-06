import { Component, OnInit } from '@angular/core';
import { SongService } from '../services/song.service';
import { Song } from '../model/song.model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  artistName: string = '';
  songs: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit() {
  }

  searchArtist() {
    this.songService.getSongs(this.artistName)
      .subscribe( (resultSongs) => {
        console.log(this.songs);
        this.songs = resultSongs;
      });
  }

  checkKey($event) {
    console.log($event);
    localStorage.setItem('evento', Date.now());
  }

}
