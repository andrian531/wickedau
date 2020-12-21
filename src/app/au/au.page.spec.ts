import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuPage } from './au.page';

describe('AuPage', () => {
  let component: AuPage;
  let fixture: ComponentFixture<AuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
