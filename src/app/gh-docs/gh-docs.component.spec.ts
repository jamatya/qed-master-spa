import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhDocsComponent } from './gh-docs.component';

describe('GhDocsComponent', () => {
  let component: GhDocsComponent;
  let fixture: ComponentFixture<GhDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
