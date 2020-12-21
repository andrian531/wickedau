import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import{ GlobalConstants } from '../common/global-constants';
import {  Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-vic',
  templateUrl: './vic.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class VicPage implements OnInit {

  offset = 0;
  pokemon = [];	
  catlocv = [];
  footer = GlobalConstants.sitefooter;
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta, private metaService: Meta ) {}

  ngOnInit()  {
    this.loadPokemon();
    this.titleService.setTitle('Campervan Hire Victoria - Wicked Campers');
    this.metaService.updateTag({ name: 'description', content: 'Starting or ending your roadtrip in Australia in Victoria? Well just pickup or dropoff your campervan in our Melbourne depot. Our friendly and sexy staff in Melbourne can assist you on your travel in and out of Victoria.' });
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:url', content: 'https://www.wickedcampers.com.au/locations/vic' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Campervan Hire Victoria - Wicked Campers Australia' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Starting or ending your roadtrip in Australia in Victoria? Well just pickup or dropoff your campervan in our Melbourne depot. Our friendly and sexy staff in Melbourne can assist you on your travel in and out of Victoria.' });
    this.metaService.updateTag({ name: 'twitter:image:src', content: '../../assets/images/socialmedia/vic.jpg' });
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.wickedcampers.com.au/locations/vic' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:title', content: 'Campervan Hire Victoria - Wicked Campers Australia' });
    this.metaService.updateTag({ property: 'og:description', content: 'Starting or ending your roadtrip in Australia in Victoria? Well just pickup or dropoff your campervan in our Melbourne depot. Our friendly and sexy staff in Melbourne can assist you on your travel in and out of Victoria.' });
    this.metaService.updateTag({ property: 'og:image', content: '../../assets/images/socialmedia/vic.jpg' });
    //app
    this.metaService.updateTag({ property: 'al:ios:app_name', content: 'Wicked Campers' });
    this.metaService.updateTag({ property: 'al:android:package', content: 'com.wickedcampers.android' });
   
  }
  loadPokemon(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 0;
    }

    this.pokeService.getLocations(this.offset).subscribe(res => {
      this.pokemon = [...this.pokemon, ...res];
 
      if (event) {
        event.target.complete();
      }
      
    });
    this.pokeService.getLocationCategoryv(this.offset).subscribe(res => {
      this.catlocv = [...this.catlocv, ...res];
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

}
