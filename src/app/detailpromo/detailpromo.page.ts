import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import{ GlobalConstants } from '../common/global-constants';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-detailpromo',
  templateUrl: './detailpromo.page.html',
  styleUrls: ['./detailpromo.page.scss'],
})
export class DetailpromoPage {

  details: any;
  trustedUrl: any;
  spec: any;
  footer = GlobalConstants.sitefooter;
  offset = 0;
  pokemon = [];	
  pages = [];

  constructor(public platform: Platform, private pokeService: PokemonService, private route: ActivatedRoute, private titleService: Title, private meta: Meta) {
    
  }
 
  /*
  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokeService.getAVaillocDetails(index).subscribe(detaillocations => {
      this.detaillocations = detaillocations;
      this.trustedUrl = this.geturl();
    });
   */
  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokeService.getPromoDetails(index).subscribe(details => {
      this.details = details;
      //this.spec=details['custom_data']['contact'];
      //this.availoc=details['available_locations'];
      //console.log(JSON.stringify(this.availoc));
      this.titleService.setTitle((this.details?.title));
      this.meta.updateTag({ property: 'og:image', content: (this.details?.thumbs)});
      this.meta.updateTag({ property: 'og:description', content: (this.details?.intro)});
    });
    
        this.pokeService.getPokemon(this.offset).subscribe(res => {
        this.pokemon = [...this.pokemon, ...res];
        });

        this.pokeService.getPromo(this.offset).subscribe(res => {
          this.pages = [...this.pages, ...res];
          //console.log(this.pages);
          
          });
      
}



  

    
  
  
}

