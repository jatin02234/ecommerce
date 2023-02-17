import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I10Component } from './i10.component';

describe('I10Component', () => {
  let component: I10Component;
  let fixture: ComponentFixture<I10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
