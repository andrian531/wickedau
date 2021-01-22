import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import { PokemonService } from './../services/pokemon.service';
import {  Title, Meta } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-online-checkin',
  templateUrl: './online-checkin.page.html',
  styleUrls: ['./online-checkin.page.scss'],
})
export class OnlineCheckinPage implements OnInit {
  //loadAPI: Promise<any>;
  token:any="";

  //condition variable
  disablebtnds=false;
  disablebtnmb=false;
  errormsg="";
  showresult=false;
  dataloaded=false;
  infodiv=false;
  //form variable
  cf={
    email:"",
    bookno:""
  };
  mcf={
    email:"",
    bookno:""
  };

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

  findbooking(){
    
    if(this.cf.email!="" && this.cf.bookno!=""){
      this.disablebtnds=true;
      if(this.token==""){
        this.pokeService.getCheckinToken().subscribe(res => {
          this.pokeService.findbooking(res['access_token'],this.cf.email,this.cf.bookno).subscribe(resx => {
            console.log(JSON.stringify(resx));
            if(resx['status']=="ERR"){
              this.errormsg=resx['error'];
            }else{
              this.showresult=true;
              this.errormsg="";
            }
            this.disablebtnds=false;
          });
          
        });
      }else{
        this.pokeService.findbooking(this.token,this.cf.email,this.cf.bookno).subscribe(resx => {
          console.log(JSON.stringify(resx));
          if(resx['status']=="ERR"){
            this.errormsg=resx['error'];
          }else{
            this.showresult=true;
            this.errormsg="";
          }
          this.disablebtnds=false;
        });
      }
    }
  }

  mfindbooking(){
    console.log("act checkin"+JSON.stringify(this.mcf));
    if(this.mcf.email!="" && this.mcf.bookno!=""){
      console.log('direct token');
      if(this.token==""){
        this.pokeService.getCheckinToken().subscribe(res => {
          this.pokeService.findbooking(res['access_token'],this.mcf.email,this.mcf.bookno).subscribe(resx => {
            //console.log(JSON.stringify(resx));
            if(resx['status']=="ERR"){
              this.errormsg=resx['error'];
            }else{
              this.showresult=true;
              this.errormsg="";
              sessionStorage.setItem('checkinref', resx['results'][0]['reservationref']);
              this.getbookinfo(res['access_token'],resx['results'][0]['reservationref']);
              
            }
          });
          
        });
      }else{
        console.log('cookie token');
        this.pokeService.findbooking(this.token,this.mcf.email,this.mcf.bookno).subscribe(resx => {
          //console.log(JSON.stringify(resx));
          if(resx['status']=="ERR"){
            this.errormsg=resx['error'];
          }else{
            this.showresult=true;
            this.errormsg="";
            sessionStorage.setItem('checkinref', resx['results'][0]['reservationref']);
            this.getbookinfo(this.token,resx['results'][0]['reservationref']);
          }
        });
      }
    }
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
  /*
  public loadScript() {        
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }

    if (!isFound) {
        var dynamicScripts = ["../assets/js/checkinhome.js"];

        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
  }*/
}
