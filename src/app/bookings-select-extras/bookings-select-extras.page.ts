
import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import { IonInput, IonList, IonSlides,AlertController ,NavParams} from '@ionic/angular';
import { ActivatedRoute, Router , NavigationExtras } from '@angular/router';
import{ GlobalConstants } from '../common/global-constants';
import * as moment from 'moment';
import {  Title, Meta } from '@angular/platform-browser';
import { empty } from 'rxjs';
@Component({
  selector: 'app-bookings-select-extras',
  templateUrl: './bookings-select-extras.page.html',
  styleUrls: ['./bookings-select-extras.page.scss'],
})
export class BookingsSelectExtrasPage implements OnInit {
  footer = GlobalConstants.sitefooter;
  step3:any;
  step1s={
    country:'au',
    pickuploc:'8',
    pickupdate:'26/10/2020',
    pickuptime:'12:00',
    dropoffloc:'8',
    dropoffdate:'02/11/2020',
    dropofftime:'12:00',
    voucher:'STONED',
    age:'1',
    catid:'1',
    id:10
  };
  optionafeelist:any=[];
  liabilitylist:any=[];
  mandatorylist:any;
  kmslist:any=[];
  optionalfeegroup:any;
  feegroup:any;
  carinfo:any=[];
  pickupinfo:any=[];
  dropinfo:any=[];
  thumbnail="";
  areaofuselist:any=[];
  deposit:any;
  depositst:any;
  depositval=0;
  

  taxinclusive:boolean=true;
  total:number;
  gst:any;
  
  selectedoptfee=[];
  selectedinsurance={};
  selectedkms={};
  totalmandatory=[];
  totaloptionalfee=[];
  selectedmandatory:any=[];
  aggrementlist:any;
  calcoption={};

  //summary price
  liabilityprice:any;
  kmsprice:any;
  extrasprice:any;

  

  //form variable
  datasend={
    reservationno:"",
    reservationref:"",
    booktype:"",
    vehicleavailable:0,
    paytype:"full"
  }
  datafr={
    vehiclecategorytypeid:0,
    pickuplocationid:0,
    pickupdate:"",
    pickuptime:"",
    dropofflocationid:"",
    dropoffdate:"",
    dropofftime:"",
    ageid:0,
    vehiclecategoryid:0,
    bookingtype:2,
    insuranceid:0,
    extrakmsid:0,
    transmission:0,
    campaigncode:'',
    remark:'',
    numbertravelling:0,
    areaofuseid:0,
    flightin:'',
    flightout:''
  };
  formquote={
    firstname:'',
    lastname:'',
    email:'',
    phone:''
  };
  csdata:any={
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    dateofbirth:'',
    address:'',
    city:'',
    countryid: '',
    postcode: '',
    state:''
  };
  countryds:any;
  mform:any={
    firstname:'',
    lastname:'',
    email:'',
    phone:''
  };
  //div control
  extrasdiv:boolean=true;
  infodiv:boolean=false;
  divfeeds=1;
  divquoteds=0;
  dibookds=0;
  formdivcontrol:boolean=false;
  formdiv:boolean=false;
  quotediv:boolean=false;
  bookdiv:boolean=false;

  Optsetting: any = {
    cssClass: 'action-sheet-height'
  };

  remark={
    areadetail:"",
    comment:"",
    paydetail:""
  };
  aggrementcontrol:any=[];
  aggrementcontrolds:any=[];
  discalimer="";
  validatorm=true;
  validatords=true;
  startDate = new Date(1990, 0, 1);

  showflight=false;
  constructor(private route: ActivatedRoute,private pokeService: PokemonService,private router: Router, public alertController: AlertController ,private titleService: Title,private metaService: Meta) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.step3 = this.router.getCurrentNavigation().extras.state.data;
        sessionStorage.setItem('step3session', JSON.stringify(this.step3));
        console.log("postdata");
      } else if (sessionStorage.getItem("step3session")){
        this.step3=JSON.parse(sessionStorage.getItem("step3session"));
        console.log("sessiondata");
        console.log("refid:"+sessionStorage.getItem("refid"));
      }else{
        //this.step3=this.step1s;
        this.router.navigate(['/']);
        console.log("data tes"); 
      }
    });
    if (sessionStorage.getItem("refid")){ 
      console.log("refid:"+sessionStorage.getItem("refid"));
    }
  }

  ngOnInit() {
    //meta
    this.titleService.setTitle('Wicked Campers - Bookings Select Extras');
    this.metaService.updateTag({ name: 'description', content: 'Find cheap Campervan hire at over 46 locations in 10 countries ✅ Rent a campervan deals ✅ Book in 60 seconds ✅ Trusted by 1+ million customers.' });

    this.datafr.vehiclecategorytypeid=this.step3.catid;
    this.datafr.pickuplocationid=this.step3.pickuploc;
    this.datafr.pickupdate=this.step3.pickupdate;
    this.datafr.pickuptime=this.step3.pickuptime;
    this.datafr.dropofflocationid=this.step3.dropoffloc;
    this.datafr.dropoffdate=this.step3.dropoffdate;
    this.datafr.dropofftime=this.step3.dropofftime;
    this.datafr.ageid=this.step3.age;
    this.datafr.vehiclecategoryid=this.step3.id;
    this.datafr.campaigncode=this.step3.voucher;
    console.log(this.step3);
    //console.log("stg:"+localStorage.getItem("Item 1"));
    //this.step3=this.step1s;

    this.calcoption['locid']=this.step3['pickuploc'];
    this.calcoption['carid']=this.step3['id'];
    this.calcoption['pickupdate']=this.step3['pickupdate'];

    console.log(JSON.stringify(this.step3));
    this.pokeService.getRCMExtras(this.step3).subscribe(res => {
      if(res['status']=='OK'){
        //getsetting
        this.countryds=res['results']['countries'];
        this.pokeService.getBookingSetting().subscribe(sett => {
          this.deposit=sett['enable-deposit'];
          this.depositst=sett['enable-deposit'];
          this.depositval=sett['deposit-amount'];
          this.aggrementlist=sett['book-agrement'];
          this.discalimer=sett['extras-disclaimer'];
        });
      //areaofusedata
      this.areaofuselist=res['results']['areaofuse'];
      //mandatory fee data process
      this.mandatorylist=res['results']['mandatoryfees'];
      for(var i = 0; i < this.mandatorylist.length; i++){
        let tempmandatory={"id":this.mandatorylist[i]['id'],"qty":1};
        this.selectedmandatory.push(tempmandatory);
      }
      console.log(JSON.stringify(this.selectedmandatory));
      //optional extras data process
      for(var i = 0; i < res['results']['optionalfees'].length; i++){
        let feedummy=res['results']['optionalfees'][i];
        var ExtraName = res['results']['optionalfees'][i]["name"];
				var ExtraNameImg = '';
				ExtraNameImg = ExtraName.replace(/\s+/g, '-').toLowerCase();
        feedummy['selected']=0;
        feedummy['qty']=1;
        feedummy['imgname']='https://bookings.wickedcampers.com.au/images/extras/'+ExtraNameImg+'.png'
        this.optionafeelist.push(feedummy);
      }
      this.optionalfeegroup=this.groupItemBy(this.optionafeelist,'feegroupname');
      this.feegroup=this.extrasgroup();
      //insurance data process
      for(var i = 0; i < res['results']['insuranceoptions'].length; i++){
        let tempinsu=res['results']['insuranceoptions'][i];
        if(tempinsu['isdefault']){
          tempinsu['selected']="1";
          this.calcoption['insuid']=tempinsu['id'].toString();
          this.selectedinsurance['name']=tempinsu['name'];
          this.selectedinsurance['total']=tempinsu['totalinsuranceamount'];
          this.datafr.insuranceid=tempinsu['id'];
        } else{
          tempinsu['selected']="0";
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
      console.log(this.liabilitylist);

      //kms data process
      for(var i = 0; i < res['results']['kmcharges'].length; i++){
        let tempkms=res['results']['kmcharges'][i];
        if(tempkms['isdefault']){
          tempkms['selected']="1";
          this.calcoption['kmsid']=tempkms['id'];
          this.selectedkms['name']=tempkms['description'];
          this.selectedkms['total']=tempkms['totalamount'];
          this.datafr.extrakmsid=tempkms['id'];
        } else{
          tempkms['selected']="0";
        }
        this.kmslist.push(tempkms);
      }
      console.log(this.kmslist);

      this.carinfo=res['results']['availablecars'][0];
      this.calcoption['noofday']=this.carinfo['numberofdays'].toString();
      this.calcoption['total']=this.carinfo['totalrateafterdiscount'].toString();
      this.calcoption['freedays']=this.carinfo['freedaysamount'].toString();
      this.datasend.vehicleavailable=this.carinfo['available'];
      for(var i = 0; i < res['results']['locationfees'].length; i++){
        console.log("loop");
        if(res['results']['locationfees'][i]['loctypeid']==1){
          this.pickupinfo=res['results']['locationfees'][i];
        }else{
          this.dropinfo=res['results']['locationfees'][i];
        }
      }
      

      this.taxinclusive=res['results']['taxinclusive'];
      console.log(this.taxinclusive);
      this.calcTotal();
      }

    });
    this.pokeService.bookingGetVehDetail(this.step3['id']).subscribe(dt=>{
      this.thumbnail=dt['thumbnail'];
      console.log(this.thumbnail);
    });

    //console.log(this.calcoption);
    
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
    var array=this.optionafeelist;
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
  togleExtras(id){
    //console.log('masuk:'+id);
    this.selectedoptfee=[];
    for(var i=0;i<this.optionafeelist.length;i++){
      let selectedopttemp={};
      if(this.optionafeelist[i]['id']==id){
        if(this.optionafeelist[i]['selected']==1){
          console.log('unselect:'+id);
          this.optionafeelist[i]['selected']=0
        }else{
          console.log('select:'+id);
          this.optionafeelist[i]['selected']=1
          selectedopttemp={"id":this.optionafeelist[i]['id'],"qty":1};
          this.selectedoptfee.push(selectedopttemp);
        }
      }else{
        if(this.optionafeelist[i]['selected']==1){
          selectedopttemp={"id":this.optionafeelist[i]['id'],"qty":1};
          this.selectedoptfee.push(selectedopttemp);
        }
      }
    }
    this.calcTotal();
  }
  selectkms(id){
    for(var i=0;i<this.kmslist.length;i++){
      
      if(this.kmslist[i]['id']==id){
        this.kmslist[i]['selected']=1;
        this.calcoption['kmsid']=this.kmslist[i]['id'];
        this.selectedkms['name']=this.kmslist[i]['description'];
        this.selectedkms['total']=this.kmslist[i]['totalamount'];
        this.datafr.extrakmsid=this.kmslist[i]['id'];
      }else{
        this.kmslist[i]['selected']=0;
      }
    }
    this.calcTotal();
  }
  selectinsu(id){
    
    for(var i=0;i<this.liabilitylist.length;i++){
      if(this.liabilitylist[i]['id']==id){
        this.liabilitylist[i]['selected']=1;
        this.calcoption['insuid']=this.liabilitylist[i]['id'].toString();
        this.selectedinsurance['name']=this.liabilitylist[i]['name'];
        this.selectedinsurance['total']=this.liabilitylist[i]['totalinsuranceamount'];
        this.datafr.insuranceid=this.liabilitylist[i]['id'];
      }else{
        this.liabilitylist[i]['selected']=0;
      }
    }
    this.calcTotal();
  }
  calcTotal(){
    this.totalmandatory=[];
    this.totaloptionalfee=[];
    var flighttemp=0;
    this.selectedoptfee.forEach(opt => {
      if(opt['id']==4364) flighttemp=1;
    });
    if(flighttemp==1) {
      this.showflight=true;
    }else{
      this.showflight=false;
    }
    console.log(JSON.stringify(this.selectedoptfee));
    console.log(this.showflight);
    this.pokeService.getRCMcalcTotal(this.calcoption,JSON.stringify(this.selectedmandatory),JSON.stringify(this.selectedoptfee)).subscribe(res => {
      console.log(res);
      let dummyopt=[];
      let dummymandatory=[];
      for(var i=0; i<res['results']['totals'].length;i++){
        if(res['results']['totals'][i]['type']=="total") this.total=res['results']['totals'][i]['total'];
        if(res['results']['totals'][i]['type']=="country tax") this.gst=res['results']['totals'][i]['total'];
        if(res['results']['totals'][i]['type']=="mandatory"){
          let mandatorytemp=[];
          mandatorytemp['name']=res['results']['totals'][i]['name'];
          mandatorytemp['total']=res['results']['totals'][i]['total'];
          dummymandatory.push(mandatorytemp);
        }
        if(res['results']['totals'][i]['type']=="optional"){
          let optfeetemp=[];
          optfeetemp['name']=res['results']['totals'][i]['name'];
          optfeetemp['total']=res['results']['totals'][i]['total'];
          dummyopt.push(optfeetemp);
        }
      }
      this.totalmandatory=dummymandatory;
      this.totaloptionalfee=dummyopt;
      if(this.depositst==1||this.depositst=='1'){
        if(this.total>this.depositval){
          this.deposit=1;
        }else{
          this.deposit=0;
        }
      }
      console.log(this.totalmandatory);
    });
  }
  //formaction
  bookdsfr(type=''){

    let paytype='';
    if(this.csdata.firstname==''){this.validatords=false; console.log('1a')}
    else if(this.csdata.lastname==''){this.validatords=false; console.log('2a')}
    else if(this.csdata.email==''){this.validatords=false; console.log('3a')}
    else if(this.csdata.phone==''){this.validatords=false; console.log('4a')}
    else if(this.csdata.dateofbirth==''){this.validatords=false; console.log('5a')}
    else if(this.csdata.address==''){this.validatords=false; console.log('6a')}
    else if(this.csdata.city==''){this.validatords=false; console.log('7a')}
    else if(this.csdata.countryid==''){this.validatords=false; console.log('8a')}
    else if(this.csdata.postcode==''){this.validatords=false; console.log('9a')}
    else if(this.csdata.state==''){this.validatords=false; console.log('10a')}
    else if(this.datafr.numbertravelling==0) {this.validatords=false; console.log('5')}
    else if(this.datafr.areaofuseid==0) {this.validatords=false; console.log('6')}
    else if(this.remark.areadetail=='') {this.validatords=false; console.log('7')}
    else if(this.remark.comment=='') {this.validatords=false; console.log('8')}
    else if((this.aggrementlist.length>=this.aggrementcontrolds.length)) {this.validatords=false; console.log('9')}
    else if(this.aggrementcontrolds.includes(false)){this.validatords=false; console.log('10')}
    else {this.validatords=true;}

    if(this.showflight==true){
      if(this.datafr.flightin=='') {this.validatords=false; console.log('11')}
      if(this.datafr.flightout=='') {this.validatords=false; console.log('12')}
    } else {this.validatords=true;}
    if(type=='deposit'){
      paytype='deposit';
    }else{
      paytype='full';
    }
    console.log("validator:"+this.validatords);
    if(this.validatords==true){
      console.log(paytype);
      this.datafr.remark='--areadetail--'+this.remark.areadetail+'--comment--'+this.remark.comment+'--paytype--'+type;
      let dobformat=moment(this.csdata.dateofbirth).format("DD/MMM/YYYY");
      this.csdata.dateofbirth=dobformat;
      console.log(this.datafr);
      this.pokeService.getRCMSaveBooking(this.datafr,JSON.stringify(this.csdata),JSON.stringify(this.selectedoptfee)).subscribe(res => {
        console.log(res);
        if(res['status']=="OK"){
          this.datasend.paytype=paytype;
          this.datasend.booktype="reservation";
          this.datasend.reservationno=res['results']['reservationno'];
          this.datasend.reservationref=res['results']['reservationref'];
          console.log(this.datasend);
          sessionStorage.setItem('bookingrefdata', JSON.stringify(this.datasend));
          let navigationExtras: NavigationExtras = {
            state: {
              data: this.datasend
            }
          };
          this.router.navigate(['bookings-payment'], navigationExtras);
        } else {

        }
      });
    }
  }
  quote(){
    this.datafr.bookingtype=1;
    console.log(this.formquote);
    this.pokeService.getRCMSaveBooking(this.datafr,JSON.stringify(this.formquote),JSON.stringify(this.selectedoptfee)).subscribe(res => {
      console.log(res);
      if(res['status']=="OK"){
        this.datasend.paytype="full";
        this.datasend.booktype="quote";
        this.datasend.reservationno=res['results']['reservationno'];
        this.datasend.reservationref=res['results']['reservationref'];
        console.log(this.datasend);
        sessionStorage.setItem('bookingrefdata', JSON.stringify(this.datasend));
        let navigationExtras: NavigationExtras = {
          state: {
            data: this.datasend
          }
        };
        this.router.navigate(['bookings-confirmation'], navigationExtras);
      } else {

      }
    });
  }
  //quote mobile
  quotem(){
    console.log("ini quote");
    this.datafr.bookingtype=1;
    this.pokeService.getRCMSaveBooking(this.datafr,JSON.stringify(this.mform),JSON.stringify(this.selectedoptfee)).subscribe(res => {
      console.log(res);
      if(res['status']=="OK"){
        this.datasend.paytype="full";
        this.datasend.booktype="quote";
        this.datasend.reservationno=res['results']['reservationno'];
        this.datasend.reservationref=res['results']['reservationref'];
        //console.log(this.datasend);
        sessionStorage.setItem('bookingrefdata', JSON.stringify(this.datasend));
        let navigationExtras: NavigationExtras = {
          state: {
            data: this.datasend
          }
       };
        this.router.navigate(['bookings-confirmation'], navigationExtras);
        
      } else {

      }
    });
  }
  //book mobile
  nextm(type){
    console.log(JSON.stringify(this.aggrementcontrol));
    console.log(this.aggrementcontrol.length);
    console.log(this.aggrementlist.length);
    let paytype='';
    if(this.mform.firstname=='') {this.validatorm=false; console.log('1')}
    else if(this.mform.lastname=='') {this.validatorm=false;console.log('2')}
    else if(this.mform.email=='') {this.validatorm=false;console.log('3')}
    else if(this.mform.phone=='') {this.validatorm=false;console.log('4')}
    else if(this.datafr.numbertravelling==0) {this.validatorm=false; console.log('5')}
    else if(this.datafr.areaofuseid==0) {this.validatorm=false; console.log('6')}
    else if(this.remark.areadetail=='') {this.validatorm=false; console.log('7')}
    else if(this.remark.comment=='') {this.validatorm=false; console.log('8')}
    else if((this.aggrementlist.length>=this.aggrementcontrol.length)) {this.validatorm=false; console.log('9')}
    else if(this.aggrementcontrol.includes(false)){this.validatorm=false; console.log('10')}
    else {this.validatorm=true;}

    if(this.showflight==true){
      if(this.datafr.flightin=='') {this.validatorm=false; console.log('11')}
      if(this.datafr.flightout=='') {this.validatorm=false; console.log('12')}
    } else {this.validatorm=true;}
    this.datafr.bookingtype=2;
    if(type=='deposit'){
      paytype='deposit';
    }else{
      paytype='full';
    }
    console.log(paytype);
    if(this.aggrementlist.length<this.aggrementcontrol.length && this.validatorm==true){
      this.datafr.remark='--areadetail--'+this.remark.areadetail+'--comment--'+this.remark.comment+'--paytype--'+type;
      this.pokeService.getRCMSaveBooking(this.datafr,JSON.stringify(this.mform),JSON.stringify(this.selectedoptfee)).subscribe(res => {
        //console.log(res);
        if(res['status']=="OK"){
          this.datasend.paytype=paytype;
          this.datasend.booktype="reservation";
          this.datasend.reservationno=res['results']['reservationno'];
          this.datasend.reservationref=res['results']['reservationref'];
          
          sessionStorage.setItem('bookingrefdata', JSON.stringify(this.datasend));
          console.log(sessionStorage.getItem('bookingrefdata'));
          let navigationExtras: NavigationExtras = {
            state: {
              data: this.datasend
            }
         };
        this.router.navigate(['bookings-payment'], navigationExtras);
        } else {

        }
      });
    }
    
  }
  openform(type){
    if(type==1){
      this.datafr.bookingtype=1;
      this.quotediv=true;
    }else{
      this.datafr.bookingtype=2;
      this.bookdiv=true;
    }
    this.formdiv=true;
    this.formdivcontrol=true;
    this.extrasdiv=false;
  }
  closeform(){
    this.formdivcontrol=false;
    this.quotediv=false;
    this.bookdiv=false;
    this.formdiv=false;
    this.extrasdiv=true;
    
  }
  openinfo(){
    this.formdiv=false;
    this.extrasdiv=false;
    this.infodiv=true;
    
  }
  closeinfo(){
    this.infodiv=false;
    if(this.formdivcontrol){
      this.formdiv=true;
    }else{
      this.extrasdiv=true;
    }
    
  }
  @ViewChild('picker') picker;
  open() {
    this.picker.open();
  }
}
