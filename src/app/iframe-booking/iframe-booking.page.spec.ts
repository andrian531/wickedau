import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IframeBookingPage } from './iframe-booking.page';

describe('IframeBookingPage', () => {
  let component: IframeBookingPage;
  let fixture: ComponentFixture<IframeBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframeBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IframeBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
