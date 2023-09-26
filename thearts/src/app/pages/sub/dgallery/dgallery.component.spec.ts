import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgalleryComponent } from './dgallery.component';

describe('DgalleryComponent', () => {
  let component: DgalleryComponent;
  let fixture: ComponentFixture<DgalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DgalleryComponent]
    });
    fixture = TestBed.createComponent(DgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
