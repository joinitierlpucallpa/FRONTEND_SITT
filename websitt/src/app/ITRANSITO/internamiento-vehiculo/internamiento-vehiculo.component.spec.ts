import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternamientoVehiculoComponent } from './internamiento-vehiculo.component';

describe('InternamientoVehiculoComponent', () => {
  let component: InternamientoVehiculoComponent;
  let fixture: ComponentFixture<InternamientoVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternamientoVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternamientoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
