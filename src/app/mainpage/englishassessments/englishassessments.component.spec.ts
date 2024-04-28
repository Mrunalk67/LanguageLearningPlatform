import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishassessmentsComponent } from './englishassessments.component';

describe('EnglishassessmentsComponent', () => {
  let component: EnglishassessmentsComponent;
  let fixture: ComponentFixture<EnglishassessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishassessmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishassessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
