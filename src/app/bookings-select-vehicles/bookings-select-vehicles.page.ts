import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import { IonInput, IonList, IonSlides,AlertController ,NavParams} from '@ionic/angular';
import { ActivatedRoute, Router , NavigationExtras } from '@angular/router';
import swal from 'sweetalert2';
import{ GlobalConstants } from '../common/global-constants';
import {  Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-bookings-select-vehicles',
  templateUrl: './bookings-select-vehicles.page.html',
  styleUrls: ['./bookings-select-vehicles.page.scss'],
})
export class BookingsSelectVehiclesPage implements OnInit {
  footer = GlobalConstants.sitefooter;
  reqdata:any;
  vehicle=new Array();
  vehiclefilter=new Array();
  vehdiv:boolean=true;
  vcat:any;
  carcount=0;
  catfilter:any=[];
  seatfilter:any=[];
  slidediv:boolean=false;
  imgslide:any;
  step1s={
    country:'au',
    pickuploc:'8',
    pickupdate:'2020-10-26T17:18:20.301+07:00',
    pickuptime:'2020-10-20T09:00:20.306+07:00',
    dropoffloc:'10',
    dropoffdate:'2020-11-02T17:18:20+07:00',
    dropofftime:'2020-10-20T09:00:20.311+07:00',
    voucher:'STONED',
    age:'1'
  };
  test={
    level1:{
      0:'test',
      1:'test2'
    }
  };
  error=0;
  errormsg="";
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  rangeValues: Object = {
    upper:2000,
    lower:0
  }
  filterType: any = [];
  maxpay=0;
  dataloaded=0;
  constructor(private route: ActivatedRoute,private pokeService: PokemonService,private router: Router, public alertController: AlertController,private titleService: Title,private metaService: Meta) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.reqdata = this.router.getCurrentNavigation().extras.state.data;
        sessionStorage.setItem('step3session', JSON.stringify(this.reqdata));
        console.log("postdata");
      } else if(sessionStorage.getItem("step3session")){
        this.reqdata=JSON.parse(sessionStorage.getItem("step3session"));
        console.log("sessiondata");
      }
    });
  }

  ngOnInit() {
    //meta
    this.titleService.setTitle('Wicked Campers - Bookings Select Vehicles');
    this.metaService.updateTag({ name: 'description', content: 'Find cheap Campervan hire at over 46 locations in 10 countries ✅ Rent a campervan deals ✅ Book in 60 seconds ✅ Trusted by 1+ million customers.' });
    //test
    
    console.log(this.reqdata);
    //end test
    this.pokeService.getRCMVehicles(this.reqdata).subscribe(res => {
      this.dataloaded=1;
      //console.log(res);
      if(res['status']!="OK"){
        this.error=1;
        this.errormsg=res['error'];
      }else{
        if(res['results']['locationfees'][0]['errorcode']>0){
          this.error=1;
          this.errormsg=res['results']['locationfees'][0]['availablemessage'];
        }else{
          let vehicledum=res['results']['availablecars'];
          for(let v of vehicledum){
            let vv=v;
            if(parseFloat(v['totalrateafterdiscount'])>this.maxpay){
              this.maxpay=parseFloat(v['totalrateafterdiscount']);
              this.rangeValues['upper']=this.maxpay;
            }
            this.pokeService.bookingGetVehDetail(v['vehiclecategoryid']).subscribe(dt=>{
              vv['thumbnail']=dt['thumbnail'];
              vv['spec']=dt['specification'];
              vv['desc']=dt['description'];
              vv['typeid']=dt['typeid'];
              vv['currency']=res['results']['locationfees'][0]['currencyname'];
            });
            if(v['available']==1){
              this.vehicle.push(vv);
              this.vehiclefilter.push(vv);
            }
          }
          console.log("max"+this.maxpay);
          this.pokeService.bookingGetvcat().subscribe(dt=>{
            this.vcat=dt['results'];
            console.log(this.vcat);
          });
          this.carcount=this.vehicle.length;
        }
      }
      console.log(this.vehicle);
      
      //console.log(this.vehicle.sort(this.dynamicSort("categoryfriendlydescription")))
    });
  }
  
  openSlide(id){
    this.vehdiv=false;
    this.slidediv=true;
    console.log(id);
    this.pokeService.bookingGetSlider(id).subscribe(dt=>{
      this.imgslide=Object.keys(dt).map((key) => [dt[key]]);
      console.log(JSON.stringify(this.imgslide));
    });
  }
  closeSlide(){
    this.vehdiv=true;
    this.slidediv=false;
    this.imgslide=[];
  }
  //sort
  changesort(opsi){
    let opsixx=opsi.split(",");
    //console.log(opsixx[0]);
    this.vehicle.sort(this.dynamicSort(opsixx[0],opsixx[1]));
    this.vehiclefilter.sort(this.dynamicSort(opsixx[0],opsixx[1]));
    //console.log(this.rangeValues);
  }
  dynamicSort(property,type="asc") {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    if(type=="asc"){
      return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
      }
    }else{
      return function (a,b) {
        var result = (b[property] < a[property]) ? -1 : (b[property] > a[property]) ? 1 : 0;
        return result * sortOrder;
      }
    }
  }
  //end of sort
  //filter
  filterprice(){
    //console.log(this.rangeValues);
    this.ApplyFilters()
  }
  filtercat(id){
    console.log(id)
    if (this.catfilter.some(a => a === id)) {
      this.catfilter = this.catfilter.filter(a => a !== id)
    } else {
      this.catfilter.push(id)
    }
    //console.log(this.catfilter);
    this.ApplyFilters();
  }
  filterseat(id){
    console.log(id)
    if (this.seatfilter.some(a => a === id)) {
      this.seatfilter = this.seatfilter.filter(a => a !== id)
    } else {
      this.seatfilter.push(id)
    }
    //console.log(this.seatfilter);
    this.ApplyFilters();
  }
  ApplyFilters() {
    this.vehicle = this.vehiclefilter.filter(item => {
      return (item.totalrateafterdiscount>= this.rangeValues['lower'] && item.totalrateafterdiscount<= this.rangeValues['upper'])&& (this.catfilter.some(b => b === item.typeid) || this.catfilter.length === 0)&& (this.seatfilter.some(b => b === item.numberofadults) || this.seatfilter.length === 0)
    });
    this.carcount=this.vehicle.length;
    //console.log(this.vehicle);
  }
  //end of filter
  booknow(catid,id){
    //console.log(catid+'-'+id);
    this.reqdata['catid']=catid;
    this.reqdata['id']=id;
    //console.log(JSON.stringify(this.reqdata));
    let navigationExtras: NavigationExtras = {
      state: {
        data: this.reqdata
      }
    };
    this.router.navigate(['bookings-select-extras'], navigationExtras);
  }

}
