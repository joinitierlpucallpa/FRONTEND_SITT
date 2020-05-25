import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiosPapeletaInfraccionComponent } from './cambios-papeleta-infraccion.component';

describe('CambiosPapeletaInfraccionComponent', () => {
  let component: CambiosPapeletaInfraccionComponent;
  let fixture: ComponentFixture<CambiosPapeletaInfraccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiosPapeletaInfraccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiosPapeletaInfraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
