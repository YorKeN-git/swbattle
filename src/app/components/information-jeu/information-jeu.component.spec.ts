import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationJeuComponent } from './information-jeu.component';

describe('InformationJeuComponent', () => {
  let component: InformationJeuComponent;
  let fixture: ComponentFixture<InformationJeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationJeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
