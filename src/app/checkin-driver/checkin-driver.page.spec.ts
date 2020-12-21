import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinDriverPage } from './checkin-driver.page';

describe('CheckinDriverPage', () => {
  let component: CheckinDriverPage;
  let fixture: ComponentFixture<CheckinDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinDriverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
