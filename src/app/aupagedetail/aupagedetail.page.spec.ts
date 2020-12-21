import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AupagedetailPage } from './aupagedetail.page';

describe('AupagedetailPage', () => {
  let component: AupagedetailPage;
  let fixture: ComponentFixture<AupagedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AupagedetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AupagedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
