import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingWindows } from './loading-windows';

describe('LoadingWindows', () => {
  let component: LoadingWindows;
  let fixture: ComponentFixture<LoadingWindows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingWindows]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingWindows);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
