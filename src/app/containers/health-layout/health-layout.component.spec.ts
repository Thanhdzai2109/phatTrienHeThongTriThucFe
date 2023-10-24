import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthLayoutComponent } from './health-layout.component';

describe('HealthLayoutComponent', () => {
  let component: HealthLayoutComponent;
  let fixture: ComponentFixture<HealthLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthLayoutComponent]
    });
    fixture = TestBed.createComponent(HealthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
