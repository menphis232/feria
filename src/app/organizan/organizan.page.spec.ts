import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrganizanPage } from './organizan.page';

describe('OrganizanPage', () => {
  let component: OrganizanPage;
  let fixture: ComponentFixture<OrganizanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
