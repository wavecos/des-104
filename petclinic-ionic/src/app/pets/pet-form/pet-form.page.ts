import { Component, OnInit } from '@angular/core';
import {Kind} from '../../model/kind.enum';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {PetService} from '../../services/pet.service';
import {Pet} from '../../model/pet.model';
import {Status} from '../../model/status.enum';
import {ToastController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {switchMap} from 'rxjs/internal/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.page.html',
  styleUrls: ['./pet-form.page.scss'],
})
export class PetFormPage implements OnInit {

  photoUrl: SafeResourceUrl;
  isEdit: boolean;
  kinds = Kind;
  pet: Pet = {
    id: '',
    name: '',
    age: 0,
    kind: Kind.DOG,
    breed: '',
    photoUrl: '',
    registerDate: new Date(),
    status: Status.ACTIVE
  };

  constructor(private sanitizer: DomSanitizer,
              private petService: PetService,
              private toastController: ToastController,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(map(paramMap => {
        const petId = paramMap.get('id');
        return petId;
      }))
      .pipe(switchMap(petId => {
        if (petId) { // edicion de mascota
          this.isEdit = true;
          return this.petService.getPetById(petId)
            .pipe(map(response => {
              return response.result;
            }));
        } else { // adicion de mascota
          this.isEdit = false;
          return of({
            id: '',
            name: '',
            age: 0,
            kind: Kind.DOG,
            breed: '',
            photoUrl: '',
            registerDate: new Date(),
            status: Status.ACTIVE
          });
        }
      }))
      .subscribe(pet => {
        this.pet = pet;
      });
  }

  savePet() {
    if (this.isEdit) {
      this.updatePet();
    } else {
      this.createPet();
    }
  }

  createPet() {
    console.log('Create Pet');
    // console.log('pet :: ' + JSON.stringify(this.pet));
    this.petService.createPet(this.pet)
      .subscribe(response => {
        this.showMessage(response.message);
      });
  }

  updatePet() {
    console.log('Update Pet');
    this.petService.updatePet(this.pet)
      .subscribe(response => {
        this.showMessage(response.message);
      });
  }

  async showMessage(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });

    toast.present();
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
