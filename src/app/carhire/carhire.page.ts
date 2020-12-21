import { Component } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import { PokemonService } from './../services/pokemon.service';
import {  Title, Meta, MetaDefinition } from '@angular/platform-browser';



@Component({
  selector: 'app-carhire',
  templateUrl: './carhire.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class CarhirePage {
  offset = 0;
  pokemon = [];	
  car = [];

  footer = GlobalConstants.sitefooter;
 
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta, private metaService: Meta) {
   
  }
  
  ngOnInit()  {
    this.loadPokemon();
    this.titleService.setTitle('Cheap Car hire Australia - Wicked Campers');
    this.metaService.updateTag({ name: 'description', content: 'Book cheap car hire with Wicked campers, check out our best offers and save tons of money on your hire.' });
    // Twitter
    this.metaService.updateTag({ property: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ property: 'twitter:url', content: 'https://www.wickedcampers.com.au/our-vehicles/car-hire' });
    this.metaService.updateTag({ property: 'twitter:title', content: 'Car hire - Wicked Campers Australia' });
    this.metaService.updateTag({ property: 'twitter:description', content: 'Book cheap car hire with Wicked campers, check out our best offers and save tons of money on your hire.' });
    this.metaService.updateTag({ property: 'twitter:image:src', content: '../../assets/images/socialmedia/carhire.jpg' });
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.wickedcampers.com.au/our-vehicles/car-hire' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: 'Book cheap car hire with Wicked campers, check out our best offers and save tons of money on your hire.' });
    this.metaService.updateTag({ property: 'og:title', content: 'Car hire - Wicked Campers Australia' });
    this.metaService.updateTag({ property: 'og:image', content: '../../assets/images/socialmedia/carhire.jpg' });
    //app
    this.metaService.updateTag({ property: 'al:ios:app_name', content: 'Wicked Campers' });
    this.metaService.updateTag({ property: 'al:android:package', content: 'com.wickedcampers.android' });
  
 
  }
  loadPokemon(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 0;
    }

    this.pokeService.getPokemon(this.offset).subscribe(res => {
      this.pokemon = [...this.pokemon, ...res];
      if (event) {
        event.target.complete();
      }
      });
     
        this.pokeService.getCar(this.offset).subscribe(res => {
          this.car = [...this.car, ...res];
          if (event) {
            event.target.complete();
          }
          });
         
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  
 
   
  onSearchChange(e) {
    let value = e.detail.value;
 
    if (value == '') {
      this.offset = 0;
      this.loadPokemon();
      return;
    }
 
    this.pokeService.findPokemon(value).subscribe(res => {
      this.pokemon = [res];
    }, err => {
      this.pokemon = [];
    });
  }
	
/*
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 5);
  }
*/

}
