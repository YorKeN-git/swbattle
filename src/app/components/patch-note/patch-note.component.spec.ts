import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchNoteComponent } from './patch-note.component';

describe('PatchNoteComponent', () => {
  let component: PatchNoteComponent;
  let fixture: ComponentFixture<PatchNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
