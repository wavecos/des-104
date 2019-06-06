import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Song } from '../model/song.model';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {

  @Input() song: Song;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.song.track);
  }

  changeBehavior($event) {
    console.log($event);

    this.song.artist = this.song.artist.toUpperCase();
    this.song.price = this.song.price + 100;
  }


}
