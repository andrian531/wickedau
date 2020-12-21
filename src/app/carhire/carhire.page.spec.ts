import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarhirePage } from './carhire.page';

describe('CarhirePage', () => {
  let component: CarhirePage;
  let fixture: ComponentFixture<CarhirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarhirePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarhirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
