import { Component, OnInit } from '@angular/core';
import {Kind} from '../../model/kind.enum';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.page.html',
  styleUrls: ['./pet-form.page.scss'],
})
export class PetFormPage implements OnInit {

  photoUrl: SafeResourceUrl;
  kinds = Kind;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  async takePhoto() {
    console.log('Take Pet\'s photo');

    const image = await Plugins.Camera.getPhoto({
        quality: 85,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
    });

    this.photoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

}
