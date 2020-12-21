import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CampervanPage } from './campervan.page';

describe('CampervanPage', () => {
  let component: CampervanPage;
  let fixture: ComponentFixture<CampervanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampervanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CampervanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
