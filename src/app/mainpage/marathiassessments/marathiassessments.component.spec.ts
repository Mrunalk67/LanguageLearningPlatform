import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathiassessmentsComponent } from './marathiassessments.component';

describe('MarathiassessmentsComponent', () => {
  let component: MarathiassessmentsComponent;
  let fixture: ComponentFixture<MarathiassessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarathiassessmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarathiassessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
