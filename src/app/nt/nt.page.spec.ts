import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NtPage } from './nt.page';

describe('NtPage', () => {
  let component: NtPage;
  let fixture: ComponentFixture<NtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
