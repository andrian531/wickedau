import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import { PokemonService } from './../services/pokemon.service';
import {  Title, Meta } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-checkin-document',
  templateUrl: './checkin-document.page.html',
  styleUrls: ['./checkin-document.page.scss'],
})
export class CheckinDocumentPage implements OnInit {

  //loadAPI: Promise<any>;
 token:any="";

 //condition variable
 disablebtnds=false;
 disablebtnmb=false;
 errormsg="";
 showresult=false;
 dataloaded=false;
 infodiv=false;
 
 //view variable
 footer = GlobalConstants.sitefooter;
 bookinginfo:any=[];
 rateinfo:any=[];
 extrafee:any=[];
 maindriver:any;
 extradriver:any=[];
 thumbnail="";
 reservationref="";
 constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta,private cookiess: CookieService) {
   /*this.loadAPI = new Promise((resolve) => {
     this.loadScript();
     resolve(true);
   });*/
   this.gettoken();
   if(sessionStorage.getItem("checkinref")){
     this.reservationref=sessionStorage.getItem("checkinref");
     if(this.token==""){
       this.pokeService.getCheckinToken().subscribe(res => {
         this.getbookinfo(res['access_token'],this.reservationref);
       });
     }else{
       this.getbookinfo(this.token,this.reservationref);
     }
     console.log("sessiondata");
     this.showresult=true;
   }
   
 }
 
 ngOnInit() {
   this.token=this.gettoken();
   
   this.titleService.setTitle("Online Check-in | Wicked Campers");
   this.meta.updateTag({ property: 'og:url', content:'http://yoururl.com'});
   this.meta.updateTag({ property: 'og:title', content:"Campervan hire Australia | Wicked Campers" });
   this.meta.updateTag({ property: 'og:image', content: "your image link"});
   this.meta.updateTag({ property: 'og:description', content:  "Wicked Campers offers 2,3,5 seaters Compare campervan, car hire and 4x4 rental Australia. Select from a variety of vehicle in and save!"});
 }
 gettoken(){
   const cookieExists: boolean = this.cookiess.check('chkToken');
   if (cookieExists==false){
     console.log("tkn false");
     this.pokeService.getCheckinToken().subscribe(res => {
       this.cookiess.set( 'chkToken', res['access_token'], {expires: 0.0138889});
     });
   } 
   this.token=this.cookiess.get('chkToken');
   return this.cookiess.get('chkToken');
 }
 getbookinfo(tokenx,resref){
   this.pokeService.getworkflow(tokenx,resref).subscribe(ress =>{
     this.dataloaded=true;
     if(ress['status']=='OK'){
       this.bookinginfo=ress['results']['bookinginfo'][0];
       this.rateinfo=ress['results']['rateinfo'][0];
       this.extrafee=ress['results']['extrafees'];
       this.maindriver=ress['results']['customerinfo'][0];
       this.extradriver=ress['results']['extradrivers'];
       this.pokeService.bookingGetVehDetail(this.bookinginfo['vehiclecategoryid']).subscribe(dt=>{
         this.thumbnail=dt['thumbnail'];
       });
       //console.log(JSON.stringify(ress['results']['bookinginfo'][0]));
     }
     
   })
 }
 openinfo(){
   this.showresult=false;
   this.infodiv=true;
 }
 closeinfo(){
   this.showresult=true;
   this.infodiv=false;
 }


}
