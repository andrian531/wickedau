import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  */
  {
    path: '', 
  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
 
  {
    path: 'p',
    loadChildren: () => import('./au/au.module').then( m => m.AuPageModule)
  },

  {
    path: 'p/:index',
    loadChildren: () => import('./aupagedetail/aupagedetail.module').then( m => m.AupagedetailPageModule)
  },
  
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations.module').then( m => m.LocationsPageModule)
  },
  /*
  {
    path: 'locations/:index',
    loadChildren: () => import('./detaillocations/detaillocations.module').then( m => m.DetaillocationsPageModule)
  },
  */
  {
    path: 'contact-us',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'our-vehicles',
    loadChildren: () => import('./our-vehicles/our-vehicles.module').then( m => m.OurVehiclesPageModule)
  },
  {
    path: 'our-vehicles/campervan-hire',
    loadChildren: () => import('./campervan/campervan.module').then( m => m.CampervanPageModule)
  },
  {
    path: 'our-vehicles/campervan-hire/:index',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
 
  {
    path: 'our-vehicles/car-hire',
    loadChildren: () => import('./carhire/carhire.module').then( m => m.CarhirePageModule)
  },
  {
    path: 'our-vehicles/car-hire/:index',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'our-vehicles/4wd-rental',
    loadChildren: () => import('./awd/awd.module').then( m => m.AwdPageModule)
  },
  {
    path: 'our-vehicles/4wd-rental/:index',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'trip-ideas',
    loadChildren: () => import('./trips/trips.module').then( m => m.TripsPageModule)
  },
  {
    path: 'trip-ideas/:index',
    loadChildren: () => import('./tripdetail/tripdetail.module').then( m => m.TripdetailPageModule)
  },
  {
    path: 'specials',
    loadChildren: () => import('./specials/specials.module').then( m => m.SpecialsPageModule)
  },
  {
    path: 'specials/:index',
    loadChildren: () => import('./detailspecials/detailspecials.module').then( m => m.DetailspecialsPageModule)
  },
  {
    path: 'menu/:index',
    loadChildren: () => import('./buy/buy.module').then( m => m.BuyPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'blog/:index',
    loadChildren: () => import('./blogdetail/blogdetail.module').then( m => m.BlogdetailPageModule)
  },
  {
    path: 'mybooking',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'relocations',
    loadChildren: () => import('./relocations/relocations.module').then( m => m.RelocationsPageModule)
  },
  {
    path: 'modal-popup',
    loadChildren: () => import('./modal-popup/modal-popup.module').then( m => m.ModalPopupPageModule)
  },
  {
    path: 'promo',
    loadChildren: () => import('./promo/promo.module').then( m => m.PromoPageModule)
  },
  {
    path: 'promo/:index',
    loadChildren: () => import('./detailpromo/detailpromo.module').then( m => m.DetailpromoPageModule)
  },
  {
    path: 'iframe',
    loadChildren: () => import('./iframe/iframe.module').then( m => m.IframePageModule)
  },
  {
    path: 'locations/nsw',
    loadChildren: () => import('./nsw/nsw.module').then( m => m.NswPageModule)
  },
  {
    path: 'locations/nsw/:index',
    
    loadChildren: () => import('./detaillocations/detaillocations.module').then( m => m.DetaillocationsPageModule)
  },
  {
    path: 'locations/qld',
    loadChildren: () => import('./qld/qld.module').then( m => m.QldPageModule)
  },
  {
    path: 'locations/qld/:index',
    loadChildren: () => import('./detaillocations/detaillocations.module').then( m => m.DetaillocationsPageModule)
  },
  {
    path: 'locations/vic',
    loadChildren: () => import('./vic/vic.module').then( m => m.VicPageModule)
  },
  {
    path: 'locations/vic/:index',
    loadChildren: () => import('./detaillocations/detaillocations.module').then( m => m.DetaillocationsPageModule)
  },
  {
    path: 'locations/nt',
    loadChildren: () => import('./nt/nt.module').then( m => m.NtPageModule)
  },
  {
    path: 'locations/nt/:index',
    loadChildren: () => import('./detaillocations/detaillocations.module').then( m => m.DetaillocationsPageModule)
  },
  {
    path: 'locations/sa',
    loadChildren: () => import('./sa/sa.module').then( m => m.SaPageModule)
  },
  {
    path: 'locations/sa/:index',
    loadChildren: () => import('./detaillocations/detaillocations.module').then( m => m.DetaillocationsPageModule)
  },
  {
    path: 'locations/wa',
    loadChildren: () => import('./wa/wa.module').then( m => m.WaPageModule)
  },
  {
    path: 'locations/wa/:index',
    loadChildren: () => import('./detaillocations/detaillocations.module').then( m => m.DetaillocationsPageModule)
  },
  {
    path: 'locations/tas',
    loadChildren: () => import('./tas/tas.module').then( m => m.TasPageModule)
  },
  {
    path: 'locations/tas/:index',
    loadChildren: () => import('./detaillocations/detaillocations.module').then( m => m.DetaillocationsPageModule)
  },{
    path: 'online-checkin',
    loadChildren: () => import('./online-checkin/online-checkin.module').then( m => m.OnlineCheckinPageModule)
  },{
    path: 'bookings-payment',
    loadChildren: () => import('./bookings-payment/bookings-payment.module').then( m => m.BookingsPaymentPageModule)
  },
  {
    path: 'bookings-select-vehicles',
    loadChildren: () => import('./bookings-select-vehicles/bookings-select-vehicles.module').then( m => m.BookingsSelectVehiclesPageModule)
  },
  {
    path: 'bookings-select-extras',
    loadChildren: () => import('./bookings-select-extras/bookings-select-extras.module').then( m => m.BookingsSelectExtrasPageModule)
  },
  {
    path: 'bookings-confirmation',
    loadChildren: () => import('./bookings-confirmation/bookings-confirmation.module').then( m => m.BookingsConfirmationPageModule)
  },
  {
    path: 'checkin-select-extras',
    loadChildren: () => import('./checkin-select-extras/checkin-select-extras.module').then( m => m.CheckinSelectExtrasPageModule)
  },
  {
    path: 'checkin-driver',
    loadChildren: () => import('./checkin-driver/checkin-driver.module').then( m => m.CheckinDriverPageModule)
  },
  {
    path: 'checkin-document',
    loadChildren: () => import('./checkin-document/checkin-document.module').then( m => m.CheckinDocumentPageModule)
  },
  {
    path: 'checkin-payment',
    loadChildren: () => import('./checkin-payment/checkin-payment.module').then( m => m.CheckinPaymentPageModule)
  },
  {
    path: 'iframe-booking',
    loadChildren: () => import('./iframe-booking/iframe-booking.module').then( m => m.IframeBookingPageModule)
  },
  { path: '**', component: PagenotfoundComponent },
  
  
  
 
  
  


 


  //{ path: 'tabs/home/:index', loadChildren: './details/details.module#DetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' }),
    RouterModule.forRoot(routes, { useHash: false })



  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
