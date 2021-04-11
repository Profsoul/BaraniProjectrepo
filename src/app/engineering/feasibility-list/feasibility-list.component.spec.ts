import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeasibilityListComponent } from './feasibility-list.component';

describe('FeasibilityListComponent', () => {
  let component: FeasibilityListComponent;
  let fixture: ComponentFixture<FeasibilityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeasibilityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeasibilityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
