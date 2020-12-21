import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import{ GlobalConstants } from '../common/global-constants';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import {  Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-detaillocations',
  templateUrl: './detaillocations.page.html',
  styleUrls: ['./detaillocations.page.scss'],
})
export class DetaillocationsPage implements OnInit {

  details: any;
  trustedUrl: any;
  spec: any;
  direction:any;
  offset = 0;
  pokemon = [];	
  availoc:any;



  footer = GlobalConstants.sitefooter;

  constructor(public platform: Platform, private pokeService: PokemonService, private route: ActivatedRoute, public router: Router, public sanitizer: DomSanitizer, private titleService: Title, private meta: Meta, private metaService: Meta) {}
 
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
    this.pokeService.getAVaillocDetails(index).subscribe(details => {
      this.details = details;
      this.trustedUrl = this.geturl();
      this.spec=details['custom_data']['contact'];
      this.direction=details['custom_data']['routeurl'];
      
     // this.availoc=details['available_locations'];
      //console.log(JSON.stringify(this.availoc));
      

    this.titleService.setTitle((this.details?.meta_title));
    this.metaService.updateTag({ name: 'description', content: this.details?.meta_description });
    this.metaService.updateTag({ name: 'keywords', content: this.details?.meta_keyword });
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: this.details?.meta_title });
    this.metaService.updateTag({ name: 'twitter:description', content: this.details?.meta_description });
    this.metaService.updateTag({ name: 'twitter:image:src', content: "../../assets/images/socialmedia/vehicle.jpg"});
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: this.details?.ogurl });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: this.details?.meta_description });
    this.metaService.updateTag({ property: 'og:title', content:  this.details?.meta_title });
    this.metaService.updateTag({ property: 'og:image', content: '../../assets/images/socialmedia/vehicle.jpg' });
    //app
    this.metaService.updateTag({ property: 'al:ios:app_name', content: 'Wicked Campers' });
    this.metaService.updateTag({ property: 'al:android:package', content: 'com.wickedcampers.android' });
   
 
     
    });
    
     
  }
  geturl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.details?.iframe);
  }
}
