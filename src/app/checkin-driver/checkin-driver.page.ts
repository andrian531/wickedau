import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import { PokemonService } from './../services/pokemon.service';
import {  Title, Meta } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-checkin-driver',
  templateUrl: './checkin-driver.page.html',
  styleUrls: ['./checkin-driver.page.scss'],
})
export class CheckinDriverPage implements OnInit {
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
  countrylist:any=[];
  countrylistx:any=[];
  compareWith : any ;
  compareWithn : any ;
  CountryOptions: any = {
    Header:'Select Country',
    cssClass: 'action-sheet-height'
  };
  minDate = moment().add(0, 'd').format();
  maxDate = moment().add(10, 'y').format();
  maxDatebirth = moment().add(-10, 'y').format();
  shextradriver=0;
  maxdriver=4;
  remaindriver=0;
  //datarcm
 databooking:any={
  "method":"editbooking",
  "reservationref":"",
  "bookingtype":2,
  "insuranceid":0,
  "extrakmsid":0,
  "transmission":0,
  "numbertravelling":1,
  "remark":"",
  "flightin":"",
  "flightout":"",
  "customer":{},
  "optionalfees":[]
 }
 dataopt:any=[];
 datacustomer:any={};
 extra1:any={"customerid":0};
 extra2:any={"customerid":0};
 extra3:any={"customerid":0};
 extra4:any={"customerid":0};
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
    this.compareWith = this.compareWithID;
    this.compareWithn = this.compareWithnm;
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
      
      if(ress['status']=='OK'){
        this.bookinginfo=ress['results']['bookinginfo'][0];
        this.rateinfo=ress['results']['rateinfo'][0];
        this.extrafee=ress['results']['extrafees'];
        this.maindriver=ress['results']['customerinfo'][0];
        this.extradriver=ress['results']['extradrivers'];
        this.countrylist=ress['results']['countries'];
        this.countrylistx=ress['results']['countries'];
        var maxaddult=parseInt(this.bookinginfo['vehicle_numberofadults']);
        if(maxaddult<4)this.maxdriver=maxaddult;
        for (var i=0;i<this.extradriver.length;i++){
          if(i==0){
            this.extra1=this.extradriver[i];
            this.shextradriver=1;
          }
          if(i==1){
            this.extra2=this.extradriver[i];
            this.shextradriver=2;
          }
          if(i==2){
            this.extra3=this.extradriver[i];
            this.shextradriver=3;
          }
          if(i==3){
            this.extra4=this.extradriver[i];
            this.shextradriver=4;
          }
        }
        this.remaindriver=this.maxdriver-this.shextradriver;
        //opt and insurance selected
        for(var d=0;d < ress['results']['extrafees'].length;d++ ){
          var tempopt={
            "id":0,
            "qty":0
          };
          if(ress['results']['extrafees'][d]['isinsurancefee']==true){
            this.databooking.insuranceid=ress['results']['extrafees'][d]['extrafeeid'];
          }else{
            tempopt.id=ress['results']['extrafees'][d]['extrafeeid'];
            tempopt.qty=ress['results']['extrafees'][d]['qty'];
            this.dataopt.push(tempopt);
          }
        }

        this.pokeService.bookingGetVehDetail(this.bookinginfo['vehiclecategoryid']).subscribe(dt=>{
          this.thumbnail=dt['thumbnail'];
        });
        
        this.datacustomer['firstname']=ress['results']['customerinfo'][0]['firstname'];
        this.datacustomer['lastname']=ress['results']['customerinfo'][0]['lastname'];
        this.datacustomer['email']=ress['results']['customerinfo'][0]['email'];
        this.datacustomer['dateofbirth']=ress['results']['customerinfo'][0]['dateofbirth'];
        this.datacustomer['address']=ress['results']['customerinfo'][0]['address'];
        this.datacustomer['city']=ress['results']['customerinfo'][0]['city'];
        this.datacustomer['state']=ress['results']['customerinfo'][0]['state'];
        this.datacustomer['postcode']=ress['results']['customerinfo'][0]['postcode'];
        this.datacustomer['countryid']=ress['results']['customerinfo'][0]['countryid'];
        this.datacustomer['phone']=ress['results']['customerinfo'][0]['phone'];
        this.datacustomer['mobile']=ress['results']['customerinfo'][0]['mobile'];
        this.datacustomer['licenseno']=ress['results']['customerinfo'][0]['licenseno'];
        this.datacustomer['licenseissued']=ress['results']['customerinfo'][0]['licenseissued'];
        this.datacustomer['licenseexpires']=ress['results']['customerinfo'][0]['licenseexpires'];

        this.databooking.reservationref=this.bookinginfo['reservationref'];
        this.databooking.extrakmsid=this.bookinginfo['kmcharges_id'];
        this.databooking.numbertravelling=this.bookinginfo['numbertravelling'];
        this.databooking.remark=this.bookinginfo['customerremark'];
        this.databooking.flightin=this.bookinginfo['flightin'];
        this.databooking.flightout=this.bookinginfo['flightout'];
        this.databooking.customer=this.datacustomer;
        this.databooking.optionalfees=this.dataopt;
        this.dataloaded=true;
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
  emptydata(){
    this.dataloaded=false;
    this.rateinfo=[];
    this.extrafee=[];
    this.maindriver={};
    this.extradriver=[];
    this.dataopt=[];
    this.extra1={"customerid":0};
    this.extra2={"customerid":0};
    this.extra3={"customerid":0};
    this.extra4={"customerid":0};
    this.shextradriver=0;
  }
  editbooking(data){
    this.emptydata();
    if(this.token==""){
      this.pokeService.getCheckinToken().subscribe(res => {
        this.pokeService.editbookingrcm(res['access_token'],data).subscribe(res => {
          console.log(res);
          if(res['status']=="OK"){
            var resref=['results']['reservationref'];
            if(res['results']['reservationref']!="" || res['results']['reservationref'] != undefined){
              resref=this.bookinginfo['reservationref'];
            }
            this.getbookinfo(res['access_token'],resref);
          }
        })
      });
    }else{
      this.pokeService.editbookingrcm(this.token,data).subscribe(res => {
        console.log(res);
        if(res['status']=="OK"){
          var resref=['results']['reservationref'];
            if(res['results']['reservationref']!="" || res['results']['reservationref'] != undefined){
              resref=this.bookinginfo['reservationref'];
            }
            this.getbookinfo(this.token,resref);
        }
      })
    }
  }
  editmain(){
    this.datacustomer.dateofbirth=moment(this.datacustomer.dateofbirth).format("DD/MM/YYYY");
    this.datacustomer.licenseexpires=moment(this.datacustomer.licenseexpires).format("DD/MM/YYYY");
    this.editbooking(this.databooking);
  }
  editextra(data,id){
    data['dateofbirth']=moment(data['dateofbirth']).format("DD/MM/YYYY");
    data['licenseexpires']=moment(data['licenseexpires']).format("DD/MM/YYYY");
    var postdata={
      "method":"extradriver",
      "reservationref":this.databooking["reservationref"],
      "customerid":id,
      "customer":data};
      this.editbooking(postdata);
      console.log("sub");
    console.log(id);
    console.log(postdata);
  }
  rmvextra(data,id){
    id="-"+id;
    var postdata={
      "method":"extradriver",
      "reservationref":this.databooking["reservationref"],
      "customerid":id,
      "customer":data};
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will delete additional driver data and cannot be recovered',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.editbooking(postdata);
      }
    });
  }
  compareWithID(o1, o2) {
    return o1== o2;
  };
  compareWithnm(o1, o2) {
    return o1 === o2;
  };
  add(){ 
   
    if(this.shextradriver<this.maxdriver){
      this.shextradriver++;
    }else{
      Swal.fire('Oops...', 'Maximum additional driver has been exceeded', 'error');
    }
    console.log(this.shextradriver);
    this.remaindriver=this.maxdriver-this.shextradriver;
  } 
}
