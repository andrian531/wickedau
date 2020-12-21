import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelocationsPage } from './relocations.page';

describe('RelocationsPage', () => {
  let component: RelocationsPage;
  let fixture: ComponentFixture<RelocationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelocationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
