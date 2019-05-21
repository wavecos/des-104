import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SongService} from '../services/song.service';
import {map, switchMap} from 'rxjs/operators';
import {Song} from '../model/song.model';

@Component({
    selector: 'app-song-detail',
    templateUrl: './song-detail.page.html',
    styleUrls: ['./song-detail.page.scss'],
})
export class SongDetailPage implements OnInit {
    song: Song = {
        trackId: 0,
        artist: '',
        album: '',
        track: '',
        price: 0.0,
        releaseDate: new Date(),
        albumImageUrl: '',
        previewTrackUrl: '',
        genreName: ''
    };

    constructor(private songService: SongService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap
            .pipe(map(paramMap => {
                const trackId = paramMap.get('trackId');
                return trackId;
            }))
            .pipe(switchMap(trackId => {
                console.log('track Id recibido : ' + trackId);
                return this.songService.getSongById(trackId);
            }))
            .subscribe(song => {
                console.log(song);
                this.song = song;
            });
    }

}
