import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindimaterialsComponent } from './hindimaterials.component';

describe('HindimaterialsComponent', () => {
  let component: HindimaterialsComponent;
  let fixture: ComponentFixture<HindimaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HindimaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HindimaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
