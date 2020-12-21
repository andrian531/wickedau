import { Component } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import { PokemonService } from './../services/pokemon.service';
import {  Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-our-vehicles',
  templateUrl: './our-vehicles.page.html',
  styleUrls: ['./our-vehicles.page.scss'],
})
export class OurVehiclesPage  {
  offset = 0;
  pokemon = [];	
  campervan = [];
  footer = GlobalConstants.sitefooter;
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta, private metaService: Meta) {}

  ngOnInit()  {
    this.loadPokemon();
    this.titleService.setTitle('Our Campervans - Wicked Campers Australia');
    this.metaService.updateTag({ name: 'description', content: 'Wicked Campers offers 2,3,5 seaters Compare campervan, car hire and 4x4 rental Australia. Select from a variety of vehicle in and save!' });
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:url', content: 'https://www.wickedcampers.com.au/our-vehicles' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Our Campervans - Wicked Campers Australia' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Wicked Campers offers 2,3,5 seaters Compare campervan, car hire and 4x4 rental Australia. Select from a variety of vehicle in and save!' });
    this.metaService.updateTag({ name: 'twitter:image', content: '../../assets/images/socialmedia/ourvehicles.jpg' });
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.wickedcampers.com.au/our-vehicles' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: 'Wicked Campers offers 2,3,5 seaters Compare campervan, car hire and 4x4 rental Australia. Select from a variety of vehicle in and save!' });
    this.metaService.updateTag({ property: 'og:title', content: 'Our Campervans - Wicked Campers Australia' });
    this.metaService.updateTag({ property: 'og:image', content: '../../assets/images/socialmedia/ourvehicles.jpg' });
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
      this.pokeService.getCampervan(this.offset).subscribe(res => {
        this.campervan = [...this.campervan, ...res];
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
