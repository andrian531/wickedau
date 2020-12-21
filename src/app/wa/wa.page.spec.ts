import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaPage } from './wa.page';

describe('WaPage', () => {
  let component: WaPage;
  let fixture: ComponentFixture<WaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
