import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VicPage } from './vic.page';

describe('VicPage', () => {
  let component: VicPage;
  let fixture: ComponentFixture<VicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
