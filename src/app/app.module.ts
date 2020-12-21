import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { Geolocation } from '@ionic-native/geolocation/ngx';      
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import { OneSignal } from '@ionic-native/onesignal/ngx';
import {TransferHttpCacheModule} from '@nguniversal/common';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent,PagenotfoundComponent],
  entryComponents: [],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    IonicModule.forRoot(),
    TransferHttpCacheModule,
    AppRoutingModule,
    SlickCarouselModule,
    LazyLoadImageModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    //ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
 
  ],
  providers: [
    Meta,
    Geolocation,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    OneSignal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
