import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import{ GlobalConstants } from '../common/global-constants';
import {  Title, Meta, MetaDefinition } from '@angular/platform-browser';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class LocationsPage {
  offset = 0;
  pokemon = [];	
  footer = GlobalConstants.sitefooter;
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta, private metaService: Meta ) {}


  ngOnInit()  {
    this.loadPokemon();
    this.titleService.setTitle('Australia Depot Locations - Wicked Campers Australia');
    this.metaService.updateTag({ name: 'description', content: 'Wicked Campers have 18 Rental Locations across Australia and New Zealand...and 46 Hire Locations around the World!' });
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:url', content: 'https://www.wickedcampers.com.au/locations' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Australia Depot Locations - Wicked Campers Australia' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Wicked Campers have 18 Rental Locations across Australia and New Zealand...and 46 Hire Locations around the World!' });
    this.metaService.updateTag({ name: 'ttwitter:image:src', content: '../../socialmedia/depot.jpg' });
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.wickedcampers.com.au/locations' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: 'Wicked Campers have 18 Rental Locations across Australia and New Zealand...and 46 Hire Locations around the World!' });
    this.metaService.updateTag({ property: 'og:title', content: 'Australia Depot Locations - Wicked Campers Australia' });
    this.metaService.updateTag({ property: 'og:image', content: '../../socialmedia/depot.jpg' });
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
