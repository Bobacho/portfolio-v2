import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopManager } from './desktop-manager';

describe('DesktopManager', () => {
  let component: DesktopManager;
  let fixture: ComponentFixture<DesktopManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
