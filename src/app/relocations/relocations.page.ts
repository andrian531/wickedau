import { Component } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import { PokemonService } from './../services/pokemon.service';
import {  Title, Meta } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { ModalPopupPage } from '../modal-popup/modal-popup.page';
import { IframePage } from '../iframe/iframe.page';
@Component({
  selector: 'app-relocations',
  templateUrl: './relocations.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class RelocationsPage {

  footer = GlobalConstants.sitefooter;
 
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta, public modalController: ModalController, private metaService: Meta) {}


  ngOnInit() {
   
    this.titleService.setTitle('Relocations Specials - Wicked Campers Australia');
    this.metaService.updateTag({ name: 'description', content: 'Looking for Sweet Campervan Relocation Deals? Come on down baby, Wicked Campers are the sexiest cowboys on the farm!' });
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:url', content: 'https://www.wickedcampers.com.au/locations' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Relocations Specials - Wicked Campers Australia' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Looking for Sweet Campervan Relocation Deals? Come on down baby, Wicked Campers are the sexiest cowboys on the farm!' });
    this.metaService.updateTag({ name: 'twitter:image', content: '../../socialmedia/relo.jpg' });
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.wickedcampers.com.au/locations' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: 'Looking for Sweet Campervan Relocation Deals? Come on down baby, Wicked Campers are the sexiest cowboys on the farm!' });
    this.metaService.updateTag({ property: 'og:title', content: 'Relocations Specials - Wicked Campers Australia' });
    this.metaService.updateTag({ property: 'og:image', content: '../../socialmedia/relo.jpg' });
    //app
    this.metaService.updateTag({ property: 'al:ios:app_name', content: 'Wicked Campers' });
    this.metaService.updateTag({ property: 'al:android:package', content: 'com.wickedcampers.android' });
   

  }
  async showModal() {
    const modal = await this.modalController.create({
      component: ModalPopupPage,
      componentProps: {
        'name': 'Hello User'
      }
    });
    return await modal.present();
  }

  async showModalx() {
    const modal = await this.modalController.create({
      component: IframePage,
      componentProps: {
        'name': 'Hello User'
      }
    });
    return await modal.present();
  }

}
