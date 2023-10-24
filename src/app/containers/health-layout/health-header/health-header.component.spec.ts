import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthHeaderComponent } from './health-header.component';

describe('HealthHeaderComponent', () => {
  let component: HealthHeaderComponent;
  let fixture: ComponentFixture<HealthHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthHeaderComponent]
    });
    fixture = TestBed.createComponent(HealthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
