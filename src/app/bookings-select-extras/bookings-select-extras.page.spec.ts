import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingsSelectExtrasPage } from './bookings-select-extras.page';

describe('BookingsSelectExtrasPage', () => {
  let component: BookingsSelectExtrasPage;
  let fixture: ComponentFixture<BookingsSelectExtrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsSelectExtrasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingsSelectExtrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
