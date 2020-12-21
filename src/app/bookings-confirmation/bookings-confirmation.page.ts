import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import { IonInput, IonList, IonSlides,AlertController ,NavParams} from '@ionic/angular';
import { ActivatedRoute, Router , NavigationExtras } from '@angular/router';
import{ GlobalConstants } from '../common/global-constants';
import {  Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-bookings-confirmation',
  templateUrl: './bookings-confirmation.page.html',
  styleUrls: ['./bookings-confirmation.page.scss'],
})
export class BookingsConfirmationPage implements OnInit {
  bookref:any;
  thumbnail="";
  bookinfo:any=[];
  rateinfo:any=[];
  paymentinfo:any=[];
  customerinfo=[];
  extrasfee:any;
  titlecf="";
  textcf="";
  numberttl="";
  dataload=false;
  payres:any={
    name:'',
    card:'',
    ammount:''
  };
  paystat=false;
  constructor(private route: ActivatedRoute,private pokeService: PokemonService,private router: Router, public alertController: AlertController,private titleService: Title,private metaService: Meta) { 
    sessionStorage.removeItem('refid');
    sessionStorage.removeItem('step3session');
    this.route.queryParams.subscribe(params => {
      if(params['payres']!=null){
        this.paystat=true;
        let tmppay=atob(params['payres']).split("xx")
        this.payres.name=tmppay[1];
        this.payres.card=tmppay[2];
        this.payres.ammount=tmppay[3];
        console.log(this.payres);
      }
      if (this.router.getCurrentNavigation().extras.state) {
        this.bookref = this.router.getCurrentNavigation().extras.state.data;
        console.log(this.bookref);
        console.log("postdata");
      } else if (sessionStorage.getItem("bookingrefdata")){
        this.bookref=JSON.parse(sessionStorage.getItem("bookingrefdata"));
        console.log("sessiondata");
        console.log(this.bookref);
      }
    });

  }

  ngOnInit() {
    //meta
    console.log("refidserv:"+sessionStorage.getItem('refid'));
    this.titleService.setTitle('Wicked Campers - Bookings Confirmation');
    this.metaService.updateTag({ name: 'description', content: 'Find cheap Campervan hire at over 46 locations in 10 countries ✅ Rent a campervan deals ✅ Book in 60 seconds ✅ Trusted by 1+ million customers.' });

    this.pokeService.getRCMBookingInfo(this.bookref['reservationref']).subscribe(res => {
      console.log(res);
      this.pokeService.bookingGetVehDetail(res['results']['bookinginfo'][0]['vehiclecategoryid']).subscribe(dt=>{
        this.thumbnail=dt['thumbnail'];
        console.log(this.thumbnail);
      });
      this.bookinfo=res['results']['bookinginfo'][0];
      this.paymentinfo=res['results']['paymentinfo'];
      this.rateinfo=res['results']['rateinfo'][0];
      this.extrasfee=res['results']['extrafees'];
      this.customerinfo=res['results']['customerinfo'][0];
      if(this.bookinfo['isquotation']==true){
        this.titlecf="Your Vehicle Quotation with Wicked Campers";
        this.textcf="Thank you for your Quotation with Wicked Campers. You can book it with a link on the quotation email we have just sent you. Make sure to check your spam/promotion folder.";
        this.numberttl="Quotation Number :"
      } else if(this.bookinfo['isquotation']==false && this.bookinfo['reservationstatus']=='Reservation'){
        this.titlecf="Your Vehicle Rental with Wicked Campers";
        this.textcf="Thank you for your Booking with Wicked Campers.<br>You will receive your booking confirmation in your inbox. Make sure to check your spam/promotion folder.";
        this.numberttl="Booking Number :"
      } else{
        this.titlecf="Your Vehicle Request with Wicked Campers.";
        this.textcf="Thank you for your Request with Wicked Campers.<br>We will confirm your booking as soon as we can allocate a vehicle to your booking. Make sure to check your spam/promotion folder.<br><b>Your card details have been securely saved.</b><p>Payment will be processed once vehicle allocation is confirmed.</p>";
        this.numberttl="Unallocated Number :"
      }


      this.dataload=true;
      
      //enhaced eccomerce tracking
      
      var transaction:any={
        'ecommerce': {
          'purchase': {
            'actionField': {
              'id': '',                         // Transaction ID. Required for purchases and refunds.
              'affiliation': 'Online Bookings',
              'revenue': '',                     // Total transaction value (incl. tax and shipping)
              'tax':'',
              'shipping': '',
              'coupon': ''
            },
            'products': []
          } 
        }
      };
      transaction['event']="transaction";
      transaction['ecommerce']['purchase']['actionField']['id']=this.bookinfo['reservationdocumentno'];
      transaction['ecommerce']['purchase']['actionField']['revenue']=this.bookinfo['totalcost'];
      transaction['ecommerce']['purchase']['actionField']['tax']=this.bookinfo['gst'];
      transaction['ecommerce']['purchase']['actionField']['coupon']=this.bookinfo['campaigncode'];
      transaction['ecommerce']['currencyCode']=this.bookinfo['currencyname'];
      if(this.bookinfo['isquotation']==true && this.customerinfo['lastname']!='TESTINDO'){
        transaction['ecommerce']['purchase']['actionField']['list']="Quotation";
      } else if(this.bookinfo['isquotation']==false && this.bookinfo['isvehicleallocated'] && this.bookinfo['reservationstatus']=='Reservation' && this.customerinfo['lastname']!='TESTINDO'){
        transaction['ecommerce']['purchase']['actionField']['list']="Reservation";
      } else if(this.customerinfo['lastname']=='TESTINDO'){
        console.log("masuk test:"+this.customerinfo['lastname']);
        transaction['ecommerce']['purchase']['actionField']['list']="Test Bookings";
      }else {
        transaction['ecommerce']['purchase']['actionField']['list']="Unallocated";
      }
      let cardata:any={
        'name': this.bookinfo['vehiclecategory'],
        'id': this.bookinfo['vehiclecategoryid'],
        'price': this.rateinfo['ratesubtotal'],
        'brand': 'Wicked Campers',
        'category': 'Vehicles',
        'quantity': '1'
      };
      transaction['ecommerce']['purchase']['products'].push(cardata);
      let kms:any={
        'name': this.bookinfo['kmcharges_description'],
        'id': this.bookinfo['kmcharges_id'],
        'price': this.bookinfo['kmcharges_additionalkmtotalamount'],
        'brand': 'Wicked Campers',
        'category': 'KMS',
        'quantity': '1'
      };
      transaction['ecommerce']['purchase']['products'].push(kms);
      this.extrasfee.forEach(function (value) {
        let extrafeexx:any={
          'name': '',
          'id': '',
          'price': '',
          'brand': 'Wicked Campers',
          'category': '',
          'quantity': ''
        };
        extrafeexx['name']=value['name'];
        extrafeexx['id']=value['extrafeeid'];
        extrafeexx['price']=value['totalfeeamount'];
        extrafeexx['quantity']=value['qty'];
        extrafeexx['category']="Optional Extras";
        if(value['isoptionalfee']==true && value['isinsurancefee']==true){
          extrafeexx['category']="Insurance";
        } else if(value['isoptionalfee']==false && value['isinsurancefee']==false && value['isbondfee']==false){
          extrafeexx['category']="Mandatory Fee";
        }
        transaction['ecommerce']['purchase']['products'].push(extrafeexx);
        
      }); 
      (<any>window).dataLayer.push(
        transaction
      );
      console.log(this.customerinfo['lastname']);
      console.log(JSON.stringify(transaction)); 
    });
  }














  //google ecomerce tracking fucntion
  setgoogledata(){
    
  }
}
