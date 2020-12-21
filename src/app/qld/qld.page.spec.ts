import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QldPage } from './qld.page';

describe('QldPage', () => {
  let component: QldPage;
  let fixture: ComponentFixture<QldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
