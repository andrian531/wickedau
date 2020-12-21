import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinSelectExtrasPage } from './checkin-select-extras.page';

describe('CheckinSelectExtrasPage', () => {
  let component: CheckinSelectExtrasPage;
  let fixture: ComponentFixture<CheckinSelectExtrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinSelectExtrasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinSelectExtrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
