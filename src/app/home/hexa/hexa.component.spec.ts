import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexaComponent } from './hexa.component';

describe('HexaComponent', () => {
  let component: HexaComponent;
  let fixture: ComponentFixture<HexaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
