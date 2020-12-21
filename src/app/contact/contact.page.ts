import { Component } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import { PokemonService } from './../services/pokemon.service';
import {  Title, Meta } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { ModalPopupPage } from '../modal-popup/modal-popup.page';
import { IframePage } from '../iframe/iframe.page';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
   styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class ContactPage {

  footer = GlobalConstants.sitefooter;
 
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta, public modalController: ModalController, private metaService: Meta) {}


  ngOnInit() {
    this.titleService.setTitle('Contact Us - Wicked Campers');
    this.metaService.updateTag({ name: 'description', content: 'Wanna Hire a Campervan? Contact Wicked Campers Australia...we talk the dirtiest!' });
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:url', content: 'https://www.wickedcampers.com.au/contact-us' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Contact Us - Wicked Campers Australia' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Wanna Hire a Campervan? Contact Wicked Campers Australia...we talk the dirtiest!' });
    this.metaService.updateTag({ name: 'twitter:image:src', content: '../../assets/images/socialmedia/contact.jpg' });
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.wickedcampers.com.au/contact-us' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: 'Wanna Hire a Campervan? Contact Wicked Campers Australia...we talk the dirtiest!' });
    this.metaService.updateTag({ property: 'og:title', content: 'Contact Us - Wicked Campers Australia' });
    this.metaService.updateTag({ property: 'og:image', content: '../../assets/images/socialmedia/contact.jpg' });
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
