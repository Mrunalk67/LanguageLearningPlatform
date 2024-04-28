import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiassessmentsComponent } from './hindiassessments.component';

describe('HindiassessmentsComponent', () => {
  let component: HindiassessmentsComponent;
  let fixture: ComponentFixture<HindiassessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HindiassessmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HindiassessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
