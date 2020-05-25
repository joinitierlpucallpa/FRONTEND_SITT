import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivamientoPapeletaComponent } from './archivamiento-papeleta.component';

describe('ArchivamientoPapeletaComponent', () => {
  let component: ArchivamientoPapeletaComponent;
  let fixture: ComponentFixture<ArchivamientoPapeletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivamientoPapeletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivamientoPapeletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
