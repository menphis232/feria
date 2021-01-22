import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InkPage } from './ink.page';

describe('InkPage', () => {
  let component: InkPage;
  let fixture: ComponentFixture<InkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
