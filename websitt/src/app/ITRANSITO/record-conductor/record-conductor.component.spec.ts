import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordConductorComponent } from './record-conductor.component';

describe('RecordConductorComponent', () => {
  let component: RecordConductorComponent;
  let fixture: ComponentFixture<RecordConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
