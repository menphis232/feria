import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistribuyenPage } from './distribuyen.page';

describe('DistribuyenPage', () => {
  let component: DistribuyenPage;
  let fixture: ComponentFixture<DistribuyenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribuyenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistribuyenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
