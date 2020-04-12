import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancerPartieComponent } from './lancer-partie.component';

describe('LancerPartieComponent', () => {
  let component: LancerPartieComponent;
  let fixture: ComponentFixture<LancerPartieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancerPartieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancerPartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
