import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit, NgZone, ElementRef, ViewChild  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ GlobalConstants } from '../common/global-constants';
import { Platform } from '@ionic/angular';
//import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation/ngx'; 
import { IonSlides } from '@ionic/angular';
import {  Title, Meta } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { IframePage } from '../iframe/iframe.page';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  
  lat: number = 51.678418;
  lng: number = 7.809007;
  height = 0;
  details: any;
  detailsx: any;
  detailsxc: any;
  spec:any;
  mySlider: any;
  availoc:any;
  bookurl='https://www.wickedcampers.com.au/';
  footer = GlobalConstants.sitefooter;

  @ViewChild('mySlider')  slides: IonSlides;

  swipeNext(){
    this.slides.slideNext();
  }
  swipePrev(){
    this.slides.slidePrev(); 
  }


  constructor(public platform: Platform, private pokeService: PokemonService, private route: ActivatedRoute, private titleService: Title, private meta: Meta, public modalController: ModalController, private metaService: Meta) { 
    console.log(platform.height());
    this.height = platform.height() - 56;
    
  }
  
 
  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokeService.getPokeDetails(index).subscribe(details => {
      this.details = details;
      this.spec=details['specification'];
      this.availoc=details['available_locations'];
      console.log(JSON.stringify(this.availoc));
      console.log(details['data']['bookurlx']);
      if(details['data']['bookurlx']!=undefined){
        this.bookurl=details['data']['bookurlx'];
      }

    this.titleService.setTitle((this.details?.meta_title));
    this.metaService.updateTag({ name: 'description', content: this.details?.meta_description });
    this.metaService.updateTag({ name: 'keywords', content: this.details?.meta_keyword });
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:url', content: this.details?.ogurl });
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

  slideOpts1= {
    //loop: true, // have to add loop = true, otherwise when reach to last slide if will all the way back to first, not just smooth slide to first
    slidesPerView: 1, 
    initialSlide: 0,
    loop: true,
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

    
    async showModal() {
      const modal = await this.modalController.create({
        component: IframePage,
        componentProps: {
          'name': 'Hello User'
        }
      });
      return await modal.present();
    }
}