import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import{ GlobalConstants } from '../common/global-constants';
import {  Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-nt',
  templateUrl: './nt.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class NtPage implements OnInit {

  offset = 0;
  pokemon = [];	
  catlocnt = [];
  footer = GlobalConstants.sitefooter;
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta, private metaService: Meta ) {}

  

  ngOnInit()  {
    this.loadPokemon();
    this.titleService.setTitle('Campervan Hire Northern Territory - Wicked Campers');
    this.metaService.updateTag({ name: 'description', content: 'Travelling to, from or around the Top End? You can pickup yourcampervan from our depot in Darwin or Alice Springs. Our sexy and friendly staff there can help you out on your travel in the Northern Territory.' });
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:url', content: 'https://www.wickedcampers.com.au/locations/nt' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Campervan Hire Northern Territory - Wicked Campers Australia' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Travelling to, from or around the Top End? You can pickup yourcampervan from our depot in Darwin or Alice Springs. Our sexy and friendly staff there can help you out on your travel in the Northern Territory.' });
    this.metaService.updateTag({ name: 'twitter:image:src', content: '../../assets/images/socialmedia/nt.jpg' });
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.wickedcampers.com.au/locations/nt' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:title', content: 'Campervan Hire Northern Territory - Wicked Campers Australia' });
    this.metaService.updateTag({ property: 'og:description', content: 'Travelling to, from or around the Top End? You can pickup yourcampervan from our depot in Darwin or Alice Springs. Our sexy and friendly staff there can help you out on your travel in the Northern Territory.' });
    this.metaService.updateTag({ property: 'og:image', content: '../../assets/images/ocialmedia/nt.jpg' });
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
    this.pokeService.getLocationCategorynt(this.offset).subscribe(res => {
      this.catlocnt = [...this.catlocnt, ...res];
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
