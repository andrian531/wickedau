import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripdetailPage } from './tripdetail.page';

describe('TripdetailPage', () => {
  let component: TripdetailPage;
  let fixture: ComponentFixture<TripdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
