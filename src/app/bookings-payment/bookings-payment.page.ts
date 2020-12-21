import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import { IonInput, IonList, IonSlides,AlertController ,NavParams} from '@ionic/angular';
import { ActivatedRoute, Router , NavigationExtras } from '@angular/router';
import{ GlobalConstants } from '../common/global-constants';
import {DomSanitizer} from "@angular/platform-browser";
import {  Title, Meta } from '@angular/platform-browser';

import { HttpClient,HttpHeaders, HttpRequest } from '@angular/common/http';
import jsSHA from 'jssha';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-bookings-payment',
  templateUrl: './bookings-payment.page.html',
  styleUrls: ['./bookings-payment.page.scss'],
})
export class BookingsPaymentPage implements OnInit {
  paydata:any;
  warning="";
  payexpresurl;
  thumbnail="";
  bookinfo:any=[];
  rateinfo:any=[];
  customerinfo=[];
  extrasfee:any;
  titlecf="";
  textcf="";
  vaulturl="";
  dataload=false;
  depositammount=0;
  constructor(private route: ActivatedRoute,private pokeService: PokemonService,private router: Router, public alertController: AlertController,private domSanitizer : DomSanitizer,private titleService: Title,private metaService: Meta,private http: HttpClient) {
    
    this.route.queryParams.subscribe(params => {
      if(params['payres']!=null){
        this.warning=atob(params['payres']);
      }
      if (this.router.getCurrentNavigation().extras.state) {
        this.paydata= this.router.getCurrentNavigation().extras.state.data;
        sessionStorage.setItem('paymentdatasession', JSON.stringify(this.paydata));
        console.log("postdata");
      } else if (sessionStorage.getItem("step3session")){
        this.paydata=JSON.parse(sessionStorage.getItem("paymentdatasession"));
        console.log("sessiondata");
      }else{
        console.log("error no data"); 
      }
    });
  }

  ngOnInit() {
    //test auric
    //this.paydata['vehicleavailable']=2;
    //meta
    this.titleService.setTitle('Wicked Campers - Bookings Payment');
    this.metaService.updateTag({ name: 'description', content: 'Find cheap Campervan hire at over 46 locations in 10 countries ✅ Rent a campervan deals ✅ Book in 60 seconds ✅ Trusted by 1+ million customers.' });

    console.log("payurl:"+this.payexpresurl);
    console.log(this.paydata);
    this.pokeService.getBookingSetting().subscribe(sett => {
      this.depositammount=sett['deposit-amount'];
    });
    this.pokeService.getRCMBookingInfo(this.paydata['reservationref']).subscribe(res => {
      
      this.pokeService.bookingGetVehDetail(res['results']['bookinginfo'][0]['vehiclecategoryid']).subscribe(dt=>{
        this.thumbnail=dt['thumbnail'];
        console.log(this.thumbnail);
      });
      this.bookinfo=res['results']['bookinginfo'][0];
      this.rateinfo=res['results']['rateinfo'][0];
      this.extrasfee=res['results']['extrafees'];
      this.customerinfo=res['results']['customerinfo'][0];
      this.dataload=true;
      console.log(this.bookinfo);
      //call vault if vehicle not available
      if(this.paydata['vehicleavailable']!=1){
        this.pokeService.getRCMvaulturl(this.paydata['reservationref']).subscribe(vr=>{
          //console.log(atob(vr['results']['url']));
          this.payexpresurl=this.domSanitizer.bypassSecurityTrustResourceUrl(atob(vr['results']['url']));
        });
        //window.addEventListener('message', this.receiveMessage, false);
        window.addEventListener('message', (event) => {
          //var key=event.message?"message":"data";
          console.log(this.paydata['reservationref']);
          var data=event['data'];
          console.log(data);
          var splitdata=data.split(',');
          if(splitdata[5]=='ADD'){
            this.pokeService.saveRCMvault(this.paydata['reservationref'],btoa(data)).subscribe(vv=>{
              if(vv['status']=="OK" && vv['results']['paymentsaved']==true){
                let navigationExtras: NavigationExtras = {
                  state: {
                    data: this.paydata
                  }
                };
                this.router.navigate(['bookings-confirmation'], navigationExtras);
                }
            })
          }
        });

      }else{
        let cost=this.bookinfo['totalcost'];
        if(this.paydata['paytype']=="deposit"){
          cost=this.depositammount;
        }
        //test
        //let payurl="https://bookings.wickedcampers.com.au/assets/include/pxpay-new-local.php?Submit=Submit&Quantity=1&Amount="+ cost+"&Reference="+this.paydata['reservationno']+"&ReservationRef="+this.paydata['reservationref']+"&vehicleAvailable="+this.paydata['vehicleavailable']+"&depositOnly="+this.paydata['paytype'];
        //live
        let payurl="https://bookings.wickedcampers.com.au/assets/include/pxpay-new-live.php?Submit=Submit&Quantity=1&Amount="+ cost+"&Reference="+this.paydata['reservationno']+"&ReservationRef="+this.paydata['reservationref']+"&vehicleAvailable="+this.paydata['vehicleavailable']+"&depositOnly="+this.paydata['paytype'];
        this.payexpresurl=this.domSanitizer.bypassSecurityTrustResourceUrl(payurl); 
        console.log(this.payexpresurl);
      }
    });
  }
  
}
