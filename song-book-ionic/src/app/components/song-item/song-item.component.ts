import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/model/song.model';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss'],
})
export class SongItemComponent implements OnInit {

  @Input() song: Song

  constructor() { }

  ngOnInit() {}

}
