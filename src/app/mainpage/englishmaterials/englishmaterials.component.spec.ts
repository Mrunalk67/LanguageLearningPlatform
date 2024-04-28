import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishmaterialsComponent } from './englishmaterials.component';

describe('EnglishmaterialsComponent', () => {
  let component: EnglishmaterialsComponent;
  let fixture: ComponentFixture<EnglishmaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishmaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishmaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
