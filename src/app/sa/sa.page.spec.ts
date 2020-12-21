import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaPage } from './sa.page';

describe('SaPage', () => {
  let component: SaPage;
  let fixture: ComponentFixture<SaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
