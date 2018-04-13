import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesCrudComponent } from './phones-crud.component';

describe('PhonesCrudComponent', () => {
  let component: PhonesCrudComponent;
  let fixture: ComponentFixture<PhonesCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonesCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
