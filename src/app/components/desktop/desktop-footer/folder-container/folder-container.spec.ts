import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderContainer } from './folder-container';

describe('FolderContainer', () => {
  let component: FolderContainer;
  let fixture: ComponentFixture<FolderContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
