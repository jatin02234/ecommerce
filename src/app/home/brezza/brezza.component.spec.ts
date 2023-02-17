import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrezzaComponent } from './brezza.component';

describe('BrezzaComponent', () => {
  let component: BrezzaComponent;
  let fixture: ComponentFixture<BrezzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrezzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrezzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
