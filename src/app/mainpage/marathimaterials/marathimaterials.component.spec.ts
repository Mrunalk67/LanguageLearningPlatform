import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathimaterialsComponent } from './marathimaterials.component';

describe('MarathimaterialsComponent', () => {
  let component: MarathimaterialsComponent;
  let fixture: ComponentFixture<MarathimaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarathimaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarathimaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
