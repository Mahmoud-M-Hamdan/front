import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUploadComponent } from './photo-editor.component';

describe('PhotoEditorComponent', () => {
  let component: PhotoUploadComponent;
  let fixture: ComponentFixture<PhotoUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoUploadComponent]
    });
    fixture = TestBed.createComponent(PhotoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
