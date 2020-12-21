import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnlineCheckinPage } from './online-checkin.page';

describe('OnlineCheckinPage', () => {
  let component: OnlineCheckinPage;
  let fixture: ComponentFixture<OnlineCheckinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCheckinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnlineCheckinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
