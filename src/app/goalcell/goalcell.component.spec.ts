import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalcellComponent } from './goalcell.component';

describe('GoalcellComponent', () => {
  let component: GoalcellComponent;
  let fixture: ComponentFixture<GoalcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalcellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
