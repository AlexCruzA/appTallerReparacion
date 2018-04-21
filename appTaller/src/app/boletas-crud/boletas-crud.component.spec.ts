import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletasCrudComponent } from './boletas-crud.component';

describe('BoletasCrudComponent', () => {
  let component: BoletasCrudComponent;
  let fixture: ComponentFixture<BoletasCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletasCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
