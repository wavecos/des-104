import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Pet} from '../../model/pet.model';
import {PetService} from '../../services/pet.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.page.html',
  styleUrls: ['./pet-list.page.scss'],
})
export class PetListPage implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('Pet List');
    this.loadPets();
  }

  loadPets() {
    this.petService.getPets()
      .subscribe(response => {
        if ( response.status === 'OK' ) {
          this.pets = response.result;
        } else {
          this.showMessage(response.message);
        }
      });
  }

  deletePet($event) {
    const petId = $event;
    console.log('Eliminar mascota con id : ' + petId);
    this.petService.deletePetById(petId)
      .subscribe(response => {
        if (response.status === 'OK') {
          this.loadPets();
        }

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

}
