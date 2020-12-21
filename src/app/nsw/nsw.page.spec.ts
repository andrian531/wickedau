import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NswPage } from './nsw.page';

describe('NswPage', () => {
  let component: NswPage;
  let fixture: ComponentFixture<NswPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NswPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NswPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
