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
    return this.http.get('https://itunes.apple.com/search?term=' + artistName + '&entity=song&limit=30')
      .pipe(map(jsonData => {
        const songsJson = jsonData['results'];
        const songs: Song[] = [];

        songsJson.forEach(jsonElement => {
          const song = new Song();
          song.trackId = jsonElement['trackId']; 
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

  getSongById(trackId: string): Observable<Song> {
    return this.http.get('https://itunes.apple.com/us/lookup?id=' + trackId)
      .pipe(map(jsonData => {

        console.log('  data : ' + JSON.stringify(jsonData));

        const songJson = jsonData['results'][0];
        console.log('song json : ' + JSON.stringify(songJson));

        return new Song();
      }));
  }



}
