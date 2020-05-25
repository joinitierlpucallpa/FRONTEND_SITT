import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPapeletaInfraccionComponent } from './registro-papeleta-infraccion.component';

describe('RegistroPapeletaInfraccionComponent', () => {
  let component: RegistroPapeletaInfraccionComponent;
  let fixture: ComponentFixture<RegistroPapeletaInfraccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPapeletaInfraccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPapeletaInfraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
