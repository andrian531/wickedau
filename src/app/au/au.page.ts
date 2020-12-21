import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit, NgZone, ElementRef, ViewChild  } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{ GlobalConstants } from '../common/global-constants';
import { Platform } from '@ionic/angular';
//import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation/ngx'; 
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-au',
  templateUrl: './au.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})




export class AuPage implements OnInit  {

  offset = 0;
  pokemon = [];	
  pages = [];
  footer = GlobalConstants.sitefooter;

  @ViewChild('mySlider')  slides: IonSlides;

  swipeNext(){
    this.slides.slideNext();
  }
  swipePrev(){
    this.slides.slidePrev(); 
  }


  constructor(public platform: Platform, private pokeService: PokemonService, private route: ActivatedRoute, public router: Router) {}
  
  ngOnInit()  {
    this.loadPokemon();

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

      this.pokeService.getMenugroup(this.offset).subscribe(res => {
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
