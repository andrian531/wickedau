import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailspecialsPage } from './detailspecials.page';

describe('DetailspecialsPage', () => {
  let component: DetailspecialsPage;
  let fixture: ComponentFixture<DetailspecialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailspecialsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailspecialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
