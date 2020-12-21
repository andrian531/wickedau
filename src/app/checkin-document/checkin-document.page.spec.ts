import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinDocumentPage } from './checkin-document.page';

describe('CheckinDocumentPage', () => {
  let component: CheckinDocumentPage;
  let fixture: ComponentFixture<CheckinDocumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinDocumentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
