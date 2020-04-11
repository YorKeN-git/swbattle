import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseHeroComponent } from './synthese-hero.component';

describe('SyntheseHeroComponent', () => {
  let component: SyntheseHeroComponent;
  let fixture: ComponentFixture<SyntheseHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntheseHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheseHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
