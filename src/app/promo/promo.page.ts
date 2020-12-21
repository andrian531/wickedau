import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import{ GlobalConstants } from '../common/global-constants';
import {  Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class PromoPage  {

  offset = 0;
  pokemon = [];	
  pages = [];
  footer = GlobalConstants.sitefooter;
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta) {}
  
  ngOnInit()  {
    this.loadPokemon();
    this.titleService.setTitle("Wicked Specials | Wicked Campers");
    this.meta.updateTag({ property: 'og:url', content:'http://yoururl.com'});
    this.meta.updateTag({ property: 'og:title', content:"Wicked Specials | Wicked Campers" });
    this.meta.updateTag({ property: 'og:image', content: "your image link"});
    this.meta.updateTag({ property: 'og:description', content:  "Campervan special deals in Australia. We have lowest van special for your road trip in Australia."});
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
      this.pokeService.getPromo(this.offset).subscribe(res => {
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
	
}
