import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroActaControlComponent } from './registro-acta-control.component';

describe('RegistroActaControlComponent', () => {
  let component: RegistroActaControlComponent;
  let fixture: ComponentFixture<RegistroActaControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroActaControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroActaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
