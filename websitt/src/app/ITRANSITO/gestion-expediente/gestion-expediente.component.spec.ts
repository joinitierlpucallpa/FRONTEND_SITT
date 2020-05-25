import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionExpedienteComponent } from './gestion-expediente.component';

describe('GestionExpedienteComponent', () => {
  let component: GestionExpedienteComponent;
  let fixture: ComponentFixture<GestionExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
