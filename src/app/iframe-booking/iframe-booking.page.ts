import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router , NavigationExtras } from '@angular/router';
import * as moment from 'moment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PokemonService } from './../services/pokemon.service';

@Component({
  selector: 'app-iframe-booking',
  templateUrl: './iframe-booking.page.html',
  styleUrls: ['./iframe-booking.page.scss'],
})
export class IframeBookingPage implements OnInit {

  booklocation:any;
  Age:any;
  bookdata: any;
  bookurl: any;
  
  
  step1={
    country:'au',
    pickuploc:'',
    pickupdate:'',
    pickuptime:'',
    dropoffloc:'',
    dropoffdate:'',
    dropofftime:'',
    voucher:'',
    age:''
  };
  step1m={
    country:'au',
    pickuploc:'',
    pickupdate:'',
    pickuptime:'',
    dropoffloc:'',
    dropoffdate:'',
    dropofftime:'',
    voucher:'',
    age:''
  };
  agexx=0;
  alldata=1;
  dateverify=1;

  PickupOptions: any = {
    Header:'Select Pickup Location',
    cssClass: 'action-sheet-height'
  };
  DropoffOptions: any = {
    Header:'Select Dropoff Location',
    cssClass: 'action-sheet-height'
  };

  datedesktop=[];
  public minDate = moment().add(1, 'd').format();
  public maxDate = moment().add(5, 'y').format();

  dayx = new Date();

  public mindateDS= moment(this.dayx.setHours(10,0,0)).format();
  public maxdateDS= moment(this.dayx.setHours(16,30,0)).format();

  constructor(private pokeService: PokemonService, private route: ActivatedRoute, public router: Router,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loadbookdata();
  }
  //bookings
  setdropdate(){
    var test=moment(this.step1m.pickupdate).add(7,'d').format();
    this.step1m.dropoffdate=test;
  }
  swaploc(){
    var pick=this.step1.pickuploc;
    var retr=this.step1.dropoffloc;
    this.step1.pickuploc=retr;
    this.step1.dropoffloc=pick;
  }
  loadbookdata(){
    console.log(this.maxDate);
    this.pokeService.getRCMLocation('au').subscribe(res => {
      this.booklocation =res['results']['locations'];
      this.step1['age'] =res['results']['driverages'][0]['id'];
      this.step1m['age'] =res['results']['driverages'][0]['id'];
      let defaultid='0';
      this.booklocation.forEach(function (value) {
        if(value['isdefault']==true){
          defaultid=value['id'];
        }
      });
      if(defaultid!='0'){
        this.step1.dropoffloc=defaultid;
        this.step1.pickuploc=defaultid;
      }
      //console.log(JSON.stringify(this.booklocation));
      //console.log("age:"+this.step1['age']);
    });
    /*this.pokeService.getRCMAge('au').subscribe(res => {
      this.Age=res;
      this.step1['age'] =res[0]['id'];
      console.log("age:"+this.step1['age']);
    });*/
  }
  gotostep2(form){
    
      this.step1.pickupdate=moment(this.step1.pickupdate).format();
      //this.step1.pickuptime=moment(this.step1.pickuptime).format("HH_mm");
      this.step1.dropoffdate=moment(this.step1.dropoffdate).format();
      //this.step1.dropofftime=moment(this.step1.dropofftime).format("HH_mm");
      console.log(this.step1);
      if(this.step1.dropoffdate>=this.step1.pickupdate){
        let navigationExtras: NavigationExtras = {
          state: {
            data: this.step1
          }
        };
        this.router.navigate(['bookings-select-vehicles'], navigationExtras);
      }
  }
  gotostep2m(form){
    
      //this.step1m.pickupdate=moment(this.step1m.pickupdate).format("DD/MM/YYYY");
      //this.step1m.pickuptime=moment(this.step1m.pickuptime).format("HH:mm");
      //this.step1m.dropoffdate=moment(this.step1m.dropoffdate).format("DD/MM/YYYY");
      //this.step1m.dropofftime=moment(this.step1m.dropofftime).format("HH:mm");
      console.log(this.step1m);
      if(this.step1m.dropoffdate>=this.step1m.pickupdate){
        let navigationExtras: NavigationExtras = {
          state: {
            data: this.step1m
          }
        };
        this.router.navigate(['bookings-select-vehicles'], navigationExtras);
      }
  }
  @ViewChild('picker') picker;
  open() {
    this.picker.open();
  }
}
