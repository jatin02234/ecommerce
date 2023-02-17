import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarrierComponent } from './harrier.component';

describe('HarrierComponent', () => {
  let component: HarrierComponent;
  let fixture: ComponentFixture<HarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
