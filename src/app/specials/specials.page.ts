import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import{ GlobalConstants } from '../common/global-constants';
import {  Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class SpecialsPage{
  offset = 0;
  pokemon = [];	
  pages = [];
  footer = GlobalConstants.sitefooter;
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta, private metaService: Meta) {}
  
  ngOnInit()  {
    this.loadPokemon();
    this.titleService.setTitle('Wicked Specials - Wicked Campers Australia');
    this.metaService.updateTag({ name: 'description', content: 'Campervan special deals in Australia. We have lowest van special for your road trip in Australia.' });
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:url', content: 'https://www.wickedcampers.com.au/specials' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Wicked Specials - Wicked Campers Australia' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Campervan special deals in Australia. We have lowest van special for your road trip in Australia.' });
    this.metaService.updateTag({ name: 'twitter:image:src', content: 'https://res.cloudinary.com/ddnzpxj6t/image/upload/v1597851199/specials/naked-special-2.jpg' });
    // Facebook
    this.metaService.updateTag({ property: 'fb:app_id', content: '885351928512415' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.wickedcampers.com.au/specials' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: 'Campervan special deals in Australia. We have lowest van special for your road trip in Australia.' });
    this.metaService.updateTag({ property: 'og:title', content: 'Wicked Specials - Wicked Campers Australia' });
    this.metaService.updateTag({ property: 'og:image', content: '../../assets/images/socialmedia/specials.jpg' });
    //app
    this.metaService.updateTag({ property: 'al:ios:app_name', content: 'Wicked Campers' });
    this.metaService.updateTag({ property: 'al:android:package', content: 'com.wickedcampers.android' });
   
  
  }
  loadPokemon(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 25;
    }
    this.pokeService.getPokemon(this.offset).subscribe(res => {
      this.pokemon = [...this.pokemon, ...res];
      if (event) {
        event.target.complete();
      }
      });
      this.pokeService.getSpecials(this.offset).subscribe(res => {
        this.pages = [...this.pages, ...res];
        //console.log(this.pages);
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
