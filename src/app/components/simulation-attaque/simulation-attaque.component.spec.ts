import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationAttaqueComponent } from './simulation-attaque.component';

describe('SimulationAttaqueComponent', () => {
  let component: SimulationAttaqueComponent;
  let fixture: ComponentFixture<SimulationAttaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationAttaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationAttaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
