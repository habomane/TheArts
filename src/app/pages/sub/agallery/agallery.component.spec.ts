import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgalleryComponent } from './agallery.component';

describe('AgalleryComponent', () => {
  let component: AgalleryComponent;
  let fixture: ComponentFixture<AgalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgalleryComponent]
    });
    fixture = TestBed.createComponent(AgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
