import { Component, OnInit,HostListener} from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Platform, AlertController } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
import{ GlobalConstants } from './common/global-constants';
import {  Title, Meta } from '@angular/platform-browser';
import { Router,NavigationStart ,NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { OneSignal } from '@ionic-native/onesignal/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  offset = 0;
  pokemon = [];	
  data: any;
  url: any;
  showmenu:boolean=true;
  public selectedIndex = 0;
  anio: number = new Date().getFullYear();

  public appPages = [
    {
      title: 'Home',
      url: '',
    },
   
  ];


  constructor(
    private platform: Platform,
    //private splashScreen: SplashScreen,
    //private statusBar: StatusBar,
    private pokeService: PokemonService,
    private titleService: Title, 
    private metaService: Meta,
    private router: Router,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController,
    private activatedRoute: ActivatedRoute,
  ) {
    //this.initializeApp();
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/iframe-booking') {
          this.showmenu = false;
        } else {
          // console.log("NU")
          this.showmenu = true;
        }
      }
    });
  }
  /*
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (this.platform.is('cordova')) {
        this.setupPush();
      }
    });
  }
*/
  ngOnInit() {
    this.loadPokemon();
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => {
 
        var rt = this.getChild(this.activatedRoute)
 
       /* rt.data.subscribe(data => {
          console.log(data);
          this.titleService.setTitle(data.title)
 
          if (data.descrption) {
            this.metaService.updateTag({ name: 'description', content: data.descrption })
          } else {
            this.metaService.removeTag("name='description'")
          }
 
          if (data.robots) {
            this.metaService.updateTag({ name: 'robots', content: data.robots })
          } else {
            this.metaService.updateTag({ name: 'robots', content: "follow,index" })
          }
 
          if (data.ogUrl) {
            this.metaService.updateTag({ property: 'og:url', content: data.ogUrl })
          } else {
            this.metaService.updateTag({ property: 'og:url', content: this.router.url })
          }
 
          if (data.ogTitle) {
            this.metaService.updateTag({ property: 'og:title', content: data.ogTitle })
          } else {
            this.metaService.removeTag("property='og:title'")
          }
 
          if (data.ogdescrption) {
            this.metaService.updateTag({ property: 'og:description', content: data.ogdescrption })
          } else {
            this.metaService.removeTag("property='og:description'")
          }
 
          if (data.ogImage) {
            this.metaService.updateTag({ property: 'og:image', content: data.ogImage })
          } else {
            this.metaService.removeTag("property='og:image'")
          }
 
 
        })
        */
 
      })
     
   
  }
  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
 
  }
  loadPokemon(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 25;
    }
 
    this.pokeService.getMenu(this.offset).subscribe(res => {
      this.pokemon = [...this.pokemon, ...res];
 
      if (event) {
        event.target.complete();
      }
 
      
    });
  }
  
    onSearchChange(e) {
    let value = e.detail.value;
 
    if (value == '') {
      this.offset = 0;
      this.loadPokemon();
      return;
    }
 
    this.pokeService.findPokemon(value).subscribe(res => {
      this.pokemon = [res];
    }, err => {
      this.pokemon = [];
    });
  }
	

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 5);
  }
  footer = GlobalConstants.sitefooter;



  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('75d3b428-7f9c-4f4d-9811-f8e16830f2f0', '717074468213');
 
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
 
    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });
 
    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;
 
      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });
 
    this.oneSignal.endInit();
  }
 
  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    })
    alert.present();
  }
 
}
