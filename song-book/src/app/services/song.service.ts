import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../model/song.model';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  getSongs(artistName: string): Observable<Song[]> {
    return this.http.get('https://itunes.apple.com/search?term=' + artistName + '&entity=song&limit=10')
      .pipe(map(jsonData => {
        const songsJson = jsonData['results'];
        const songs: Song[] = [];

        songsJson.forEach(jsonElement => {
          const song = new Song();
          song.artist = jsonElement['artistName'];
          song.track = jsonElement['trackName'];
          song.album = jsonElement['collectionName'];
          song.price = jsonElement['trackPrice'];
          song.releaseDate = jsonElement['releaseDate'];
          song.albumImageUrl = jsonElement['artworkUrl100'];
          song.previewTrackUrl = jsonElement['previewUrl'];
          song.genreName = jsonElement['primaryGenreName'];

          songs.push(song);
        });

        return songs;
      }));

  }

}
