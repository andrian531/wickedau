import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import{ GlobalConstants } from '../common/global-constants';
import {  Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-wa',
  templateUrl: './wa.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class WaPage implements OnInit {

  offset = 0;
  pokemon = [];	
  catlocwa = [];
  footer = GlobalConstants.sitefooter;
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta, private metaService: Meta ) {}

  ngOnInit()  {
    this.loadPokemon();
    this.titleService.setTitle('Campervan Hire Western Australia - Wicked Campers');
    this.metaService.updateTag({ name: 'description', content: 'If you are starting your roadtrip from Western Australia, feel free to pickup and drop-off your van from our depot either in Perth, Broome or Exmouth.' });
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:url', content: 'https://www.wickedcampers.com.au/locations/wa' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Campervan Hire Western Australia - Wicked Campers Australia' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'If you are starting your roadtrip from Western Australia, feel free to pickup and drop-off your van from our depot either in Perth, Broome or Exmouth.' });
    this.metaService.updateTag({ name: 'twitter:image:src', content: '../../assets/images/socialmedia/wa.jpg' });
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.wickedcampers.com.au/locations/wa' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:title', content: 'Campervan Hire Western Australia - Wicked Campers Australia' });
    this.metaService.updateTag({ property: 'og:description', content: 'If you are starting your roadtrip from Western Australia, feel free to pickup and drop-off your van from our depot either in Perth, Broome or Exmouth.' });
    this.metaService.updateTag({ property: 'og:image', content: '../../assets/images/socialmedia/wa.jpg' });
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
    this.pokeService.getLocationCategorywa(this.offset).subscribe(res => {
      this.catlocwa = [...this.catlocwa, ...res];
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
