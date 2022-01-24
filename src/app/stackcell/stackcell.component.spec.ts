import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackcellComponent } from './stackcell.component';

describe('StackcellComponent', () => {
  let component: StackcellComponent;
  let fixture: ComponentFixture<StackcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackcellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
