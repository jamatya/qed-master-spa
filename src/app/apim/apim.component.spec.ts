import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApimComponent } from './apim.component';

describe('ApimComponent', () => {
  let component: ApimComponent;
  let fixture: ComponentFixture<ApimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
