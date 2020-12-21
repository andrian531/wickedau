import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit, NgZone, ElementRef, ViewChild  } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{ GlobalConstants } from '../common/global-constants';
import { Platform } from '@ionic/angular';
//import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation/ngx'; 
import { IonSlides } from '@ionic/angular';
import {  Title, Meta } from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-aupagedetail',
  templateUrl: './aupagedetail.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class AupagedetailPage implements OnInit {

 
  details: any;
  mySlider: any;
  //bannerx: any;
  pokemon = [];	
  offset = 0;
 
  
  footer = GlobalConstants.sitefooter;

  @ViewChild('mySlider')  slides: IonSlides;

  swipeNext(){
    this.slides.slideNext();
  }
  swipePrev(){
    this.slides.slidePrev(); 
  }


  constructor(public platform: Platform, private pokeService: PokemonService, private route: ActivatedRoute, public router: Router,private titleService: Title, private meta: Meta, private sanitizer: DomSanitizer, private metaService: Meta) { }
  
 
  ngOnInit() {
    
    let index = this.route.snapshot.paramMap.get('index');
      this.pokeService.getPagesDetail(index).subscribe(details => {
      this.details  = details;
      //this.bannerx  = details['custom_data'];
      //this.availoc=details['available_locations'];
      //console.log(JSON.stringify(this.availoc));
     
    this.titleService.setTitle((this.details?.metatitle));
    this.metaService.updateTag({ name: 'description', content: this.details?.metadesc });
    this.metaService.updateTag({ name: 'keywords', content: this.details?.metakeyword });
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: this.details?.metatitle });
    this.metaService.updateTag({ name: 'twitter:description', content: this.details?.metadesc });
    this.metaService.updateTag({ name: 'twitter:image:src', content: "../../assets/images/socialmedia/vehicle.jpg"});
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: this.details?.ogurl });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: this.details?.metadesc });
    this.metaService.updateTag({ property: 'og:title', content:  this.details?.metatitle });
    this.metaService.updateTag({ property: 'og:image', content: '../../assets/images/socialmedia/vehicle.jpg' });
    //app
    this.metaService.updateTag({ property: 'al:ios:app_name', content: 'Wicked Campers' });
    this.metaService.updateTag({ property: 'al:android:package', content: 'com.wickedcampers.android' });
     

    });
    this.pokeService.getPokemon(this.offset).subscribe(res => {
      this.pokemon = [...this.pokemon, ...res];
     
      });
  }

  slideOpts1= {
    //loop: true, // have to add loop = true, otherwise when reach to last slide if will all the way back to first, not just smooth slide to first
    slidesPerView: 1, 
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 15,
    autoplay: true,
    speed: 900,
    pager: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    }
    };

    
   
}