import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionTalonarioComponent } from './atencion-talonario.component';

describe('AtencionTalonarioComponent', () => {
  let component: AtencionTalonarioComponent;
  let fixture: ComponentFixture<AtencionTalonarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtencionTalonarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionTalonarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
