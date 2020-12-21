import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import { PokemonService } from './../services/pokemon.service';
import {  Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-online-checkin',
  templateUrl: './online-checkin.page.html',
  styleUrls: ['./online-checkin.page.scss'],
})
export class OnlineCheckinPage implements OnInit {
  footer = GlobalConstants.sitefooter;
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Check My Booking | Wicked Campers");
    this.meta.updateTag({ property: 'og:url', content:'http://yoururl.com'});
    this.meta.updateTag({ property: 'og:title', content:"Campervan hire Australia | Wicked Campers" });
    this.meta.updateTag({ property: 'og:image', content: "your image link"});
    this.meta.updateTag({ property: 'og:description', content:  "Wicked Campers offers 2,3,5 seaters Compare campervan, car hire and 4x4 rental Australia. Select from a variety of vehicle in and save!"});
    this.pokeService.getCheckinToken('au').subscribe(res => {
      console.log("token:"+JSON.stringify(res));
    });
  }

}
