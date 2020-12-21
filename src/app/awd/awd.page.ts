import { Component } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import { PokemonService } from './../services/pokemon.service';
import {  Title, Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'app-awd',
  templateUrl: './awd.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class AwdPage {
  offset = 0;
  pokemon = [];	
  //campervan = [];
  awd = [];
  //car = [];


  footer = GlobalConstants.sitefooter;
 
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta, private metaService: Meta) {}
  
  ngOnInit()  {
    this.loadPokemon();
    this.titleService.setTitle('4WD & AWD Hire - Wicked Campers');
    this.metaService.updateTag({ name: 'description', content: 'Wicked 4WD & AWD Hire you will find the perfect rental vehicle amongst our range of Premium & Budget' });
    // Twitter
    this.metaService.updateTag({ property: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ property: 'twitter:url', content: 'https://www.wickedcampers.com.au/our-vehicles/4wd-rental' });
    this.metaService.updateTag({ property: 'twitter:title', content: '4WD & AWD Hire - Wicked Campers Australia' });
    this.metaService.updateTag({ property: 'twitter:description', content: 'Wicked 4WD & AWD Hire you will find the perfect rental vehicle amongst our range of Premium & Budget' });
    this.metaService.updateTag({ property: 'twitter:image:src', content: '../../assets/images/socialmedia/4wd.jpg' });
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.wickedcampers.com.au/our-vehicles/4wd-rental' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: 'Wicked 4WD & AWD Hire you will find the perfect rental vehicle amongst our range of Premium & Budget' });
    this.metaService.updateTag({ property: 'og:title', content: '4WD & AWD Hire - Wicked Campers Australia' });
    this.metaService.updateTag({ property: 'og:image', content: '../../assets/images/socialmedia/4wd.jpg' });
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
     
          this.pokeService.getawd(this.offset).subscribe(res => {
            this.awd = [...this.awd, ...res];
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
