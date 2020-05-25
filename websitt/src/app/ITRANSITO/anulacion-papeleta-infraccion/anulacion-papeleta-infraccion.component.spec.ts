import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnulacionPapeletaInfraccionComponent } from './anulacion-papeleta-infraccion.component';

describe('AnulacionPapeletaInfraccionComponent', () => {
  let component: AnulacionPapeletaInfraccionComponent;
  let fixture: ComponentFixture<AnulacionPapeletaInfraccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnulacionPapeletaInfraccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnulacionPapeletaInfraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
