import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopFooter } from './desktop-footer';

describe('DesktopFooter', () => {
  let component: DesktopFooter;
  let fixture: ComponentFixture<DesktopFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
