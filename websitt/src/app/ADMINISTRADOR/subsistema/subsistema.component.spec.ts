import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsitemaComponent } from './subsistema.component';

describe('SubsitemaComponent', () => {
  let component: SubsitemaComponent;
  let fixture: ComponentFixture<SubsitemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsitemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsitemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
