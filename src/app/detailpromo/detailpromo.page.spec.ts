import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailpromoPage } from './detailpromo.page';

describe('DetailpromoPage', () => {
  let component: DetailpromoPage;
  let fixture: ComponentFixture<DetailpromoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailpromoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailpromoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
