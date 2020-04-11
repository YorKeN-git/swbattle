import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseMonstreComponent } from './synthese-monstre.component';

describe('SyntheseMonstreComponent', () => {
  let component: SyntheseMonstreComponent;
  let fixture: ComponentFixture<SyntheseMonstreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntheseMonstreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheseMonstreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
