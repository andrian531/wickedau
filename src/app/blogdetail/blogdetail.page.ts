import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit, NgZone, ElementRef, ViewChild  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ GlobalConstants } from '../common/global-constants';
import { Platform } from '@ionic/angular';
//import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation/ngx'; 
import { IonSlides } from '@ionic/angular';
import {  Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class BlogdetailPage implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  height = 0;
  details: any;
  detailsx: any;
  detailsxc: any;
  spec:any;
  mySlider: any;
  availoc:any;
  blog: any;
  
  footer = GlobalConstants.sitefooter;

  @ViewChild('mySlider')  slides: IonSlides;

  swipeNext(){
    this.slides.slideNext();
  }
  swipePrev(){
    this.slides.slidePrev(); 
  }


  constructor(public platform: Platform, private pokeService: PokemonService, private route: ActivatedRoute, private titleService: Title, private meta: Meta) { 
    console.log(platform.height());
    this.height = platform.height() - 56;
    
  }
  
 
  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokeService.getBlogDetails(index).subscribe(details => {
      this.details = details;
      this.spec=details['specification'];
      this.availoc=details['available_locations'];
      console.log(JSON.stringify(this.availoc));
      this.titleService.setTitle((this.details?.title));
      this.meta.updateTag({ property: 'og:url', content:'http://yoururl.com'});
      this.meta.updateTag({ property: 'og:title', content:"Trip Ideas | Wicked Campers" });
      this.meta.updateTag({ property: 'og:image', content: "your image link"});
      this.meta.updateTag({ property: 'og:description', content:  "Wicked Campers have 18 Rental Locations across Australia and New Zealand...and 46 Hire Locations around the World!"});
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