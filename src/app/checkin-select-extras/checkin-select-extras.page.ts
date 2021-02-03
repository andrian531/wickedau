import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import { PokemonService } from './../services/pokemon.service';
import {  Title, Meta } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-checkin-select-extras',
  templateUrl: './checkin-select-extras.page.html',
  styleUrls: ['./checkin-select-extras.page.scss'],
})
export class CheckinSelectExtrasPage implements OnInit {

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
 liabilitylist:any=[];
 kmslist:any=[];
 optionalfeelist:any=[];
 optionalfeegroup:any;
 feegroup:any;
 insufee:any;
 compareWith : any ;

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
     
     if(ress['status']=='OK'){
       this.bookinginfo=ress['results']['bookinginfo'][0];
       this.rateinfo=ress['results']['rateinfo'][0];
       this.extrafee=ress['results']['extrafees'];
       this.maindriver=ress['results']['customerinfo'][0];
       this.extradriver=ress['results']['extradrivers'];
       //this.liabilitylist=ress['results']['insuranceoptions'];
       //opt and insurance selected
       for(var d=0;d < ress['results']['extrafees'].length;d++ ){
        var tempopt={
          "id":0,
          "qty":0
        };
        if(ress['results']['extrafees'][d]['isinsurancefee']==true){
          this.insufee=ress['results']['extrafees'][d]['totalfeeamount'];
          this.databooking.insuranceid=ress['results']['extrafees'][d]['extrafeeid'];
        }else{
          tempopt.id=ress['results']['extrafees'][d]['extrafeeid'];
          tempopt.qty=ress['results']['extrafees'][d]['qty'];
          this.dataopt.push(tempopt);
        }
       }

       //insurance data process
      for(var i = 0; i < ress['results']['insuranceoptions'].length; i++){
        let tempinsu=ress['results']['insuranceoptions'][i];
        if(tempinsu['id']==this.databooking.insuranceid){
          tempinsu['selected']="1";
        } else{
          tempinsu['selected']="0";
        }
        if(tempinsu['totalinsuranceamount']<this.insufee){
          tempinsu['publish']="0";
        }else{
          tempinsu['publish']="1";
        }
        tempinsu['imgname']='https://bookings.wickedcampers.com.au/images/extras/'+tempinsu['feedescription3'];
        let insuspec=tempinsu['feedescription1'].split("xy");
        let insuspecarr:any=[];
        for (var x=0; x<insuspec.length;x++){
          console.log(insuspec[x]);
          let checkinsu=insuspec[x].split("yt");
          let tempinsucheck={};
          tempinsucheck['check']=checkinsu[0];
          tempinsucheck['text']=checkinsu[1];
          insuspecarr.push(tempinsucheck);
        }
        tempinsu['spec']=insuspecarr;
        this.liabilitylist.push(tempinsu);
      }
      //kms data process
      for(var i = 0; i < ress['results']['kmcharges'].length; i++){
        let tempkms=ress['results']['kmcharges'][i];
        if(tempkms['id']==this.bookinginfo['kmcharges_id']){
          tempkms['selected']="1";
        } else{
          tempkms['selected']="0";
        }
        if(tempkms['totalamount']<this.bookinginfo['kmcharges_totalfordailyrate']){
          tempkms['publish']="0";
        } else{
          tempkms['publish']="1";
        }
        this.kmslist.push(tempkms);
      }
      //optional extras data process
      for(var i = 0; i < ress['results']['optionalfees'].length; i++){
        let feedummy=ress['results']['optionalfees'][i];
        var ExtraName = ress['results']['optionalfees'][i]["name"];
				var ExtraNameImg = '';
        ExtraNameImg = ExtraName.replace(/\s+/g, '-').toLowerCase();
        console.log('dataopt tlength'+this.dataopt.length);
        feedummy['selected']=0;
        for(var f=0;f<this.dataopt.length;f++){
          if(feedummy['id']==this.dataopt[f]['id']){
            console.log("optmasuk :"+feedummy['id']);
            feedummy['selected']=1;
          }
        }
        
        feedummy['qty']=1;
        feedummy['imgname']='https://bookings.wickedcampers.com.au/images/extras/'+ExtraNameImg+'.png'
        this.optionalfeelist.push(feedummy);
      }
      this.optionalfeegroup=this.groupItemBy(this.optionalfeelist,'feegroupname');
      this.feegroup=this.extrasgroup();
      //thumbnail
       this.pokeService.bookingGetVehDetail(this.bookinginfo['vehiclecategoryid']).subscribe(dt=>{
         this.thumbnail=dt['thumbnail'];
       });
     }

     //set data booking for update
     
     

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
     console.log(this.dataopt);
   })
 }
 groupItemBy(array, property) {
  var hash = {},
      props = property.split('.');
  for (var i = 0; i < array.length; i++) {
      var key = props.reduce(function(acc, prop) {
          return acc && acc[prop];
      }, array[i]);
      if (!hash[key]) hash[key] = [];
      hash[key].push(array[i]);
  }
  return hash;
}
extrasgroup() {
  var array=this.optionalfeelist;
  var proper='feegroupname';
  var hash = {},
      props = proper.split('.'),
      groupid=[];
  for (var i = 0; i < array.length; i++) {
      var key = props.reduce(function(acc, prop) {
          //console.log(acc && acc[prop]);
          return acc && acc[prop];
      }, array[i]);
      if (!hash[key]){
        hash[key] = [];
        groupid.push(key);
      }
  }
  return groupid;
}
 openinfo(){
   this.showresult=false;
   this.infodiv=true;
 }
 closeinfo(){
   this.showresult=true;
   this.infodiv=false;
 }

 selectkms(id,selected){
   if(selected==0){
     this.databooking.extrakmsid=id;
     console.log("proses");
     this.editbooking(this.databooking,"You will change KMS option, and you cannot be undo this change");
   } else {
     console.log("nothing happen");
   }
 }
 addextra(id,selected){
  if(selected==0){
    var optx={
      "id":id,
      "qty":1
    };
    this.dataopt.push(optx);
    this.databooking.optionalfees=this.dataopt;
    console.log("proses");
    this.editbooking(this.databooking,"You will add extra fee, and you cannot be undo this change");
  } else {
    console.log("nothing happen");
  }
}
selectinsu(id,selected){
  if(selected==0){
    this.databooking.insuranceid=id;
    console.log("proses");
    this.editbooking(this.databooking,"You will change damage cover, and you cannot be undo this change");
  } else {
    console.log("nothing happen");
  }
}
emptydata(){
  this.dataloaded=false;
  this.bookinginfo=[];
  this.dataopt=[];
  this.rateinfo=[];
  this.extrafee=[];
  this.maindriver={};
  this.extradriver=[];
  this.liabilitylist=[];
  this.kmslist=[];
  this.optionalfeelist=[];
  this.optionalfeegroup=[];
  this.feegroup=[];
}
  editbooking(data,msg){
    
    Swal.fire({
      title: 'Are you sure?',
      text: msg,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.emptydata();
        if(this.token==""){
          this.pokeService.getCheckinToken().subscribe(res => {
            this.pokeService.editbookingrcm(res['access_token'],data).subscribe(res => {
              console.log(res);
              if(res['status']=="OK"){
                this.getbookinfo(res['access_token'],res['results']['reservationref']);
              }
            })
          });
        }else{
          this.pokeService.editbookingrcm(this.token,data).subscribe(res => {
            console.log(res);
            if(res['status']=="OK"){
              this.getbookinfo(this.token,res['results']['reservationref']);
            }
          })
    
        }
      }
    });
  }
}
