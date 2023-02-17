import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TigorComponent } from './tigor.component';

describe('TigorComponent', () => {
  let component: TigorComponent;
  let fixture: ComponentFixture<TigorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TigorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TigorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
