import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasPage } from './tas.page';

describe('TasPage', () => {
  let component: TasPage;
  let fixture: ComponentFixture<TasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
