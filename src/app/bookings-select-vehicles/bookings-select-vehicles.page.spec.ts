import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingsSelectVehiclesPage } from './bookings-select-vehicles.page';

describe('BookingsSelectVehiclesPage', () => {
  let component: BookingsSelectVehiclesPage;
  let fixture: ComponentFixture<BookingsSelectVehiclesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsSelectVehiclesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingsSelectVehiclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
