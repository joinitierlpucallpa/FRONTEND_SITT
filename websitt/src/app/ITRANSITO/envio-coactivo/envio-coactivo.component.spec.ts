import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioCoactivoComponent } from './envio-coactivo.component';

describe('EnvioCoactivoComponent', () => {
  let component: EnvioCoactivoComponent;
  let fixture: ComponentFixture<EnvioCoactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvioCoactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioCoactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
