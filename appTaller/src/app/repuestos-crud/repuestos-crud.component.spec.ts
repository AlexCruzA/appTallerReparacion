import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestosCrudComponent } from './repuestos-crud.component';

describe('RepuestosCrudComponent', () => {
  let component: RepuestosCrudComponent;
  let fixture: ComponentFixture<RepuestosCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepuestosCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
