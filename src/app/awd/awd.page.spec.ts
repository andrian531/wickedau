import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AwdPage } from './awd.page';

describe('AwdPage', () => {
  let component: AwdPage;
  let fixture: ComponentFixture<AwdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AwdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
