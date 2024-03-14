import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentContentComponent } from './document-content.component';

describe('DocumentContentComponent', () => {
  let component: DocumentContentComponent;
  let fixture: ComponentFixture<DocumentContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
