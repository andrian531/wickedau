import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetaillocationsPage } from './detaillocations.page';

describe('DetaillocationsPage', () => {
  let component: DetaillocationsPage;
  let fixture: ComponentFixture<DetaillocationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillocationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetaillocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
