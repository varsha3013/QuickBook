import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpentryComponent } from './carpentry.component';

describe('CarpentryComponent', () => {
  let component: CarpentryComponent;
  let fixture: ComponentFixture<CarpentryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarpentryComponent]
    });
    fixture = TestBed.createComponent(CarpentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
