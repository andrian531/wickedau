import { Component } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import{ GlobalConstants } from '../common/global-constants';
import {  Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class TripsPage {
  offset = 0;
  pokemon = [];	
  trips = [];
  footer = GlobalConstants.sitefooter;
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta) {}

  ngOnInit()  {
    this.loadPokemon();
    this.titleService.setTitle("Campervan Packages & Trip Ideas | Wicked Campers");
    this.meta.updateTag({ property: 'og:url', content:'http://yoururl.com'});
    this.meta.updateTag({ property: 'og:title', content:"Campervan Hire Locations | Wicked Campers" });
    this.meta.updateTag({ property: 'og:image', content: "your image link"});
    this.meta.updateTag({ property: 'og:description', content:  "Australia sweet packages for you to enjoy on you campervan roadtrip in Australia."});
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
    this.pokeService.gettripideas(this.offset).subscribe(res => {
      this.trips = [...this.trips, ...res];
 
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
