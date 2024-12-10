import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorFloaterComponent } from './motor-floater.component';

describe('MotorFloaterComponent', () => {
  let component: MotorFloaterComponent;
  let fixture: ComponentFixture<MotorFloaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorFloaterComponent]
    });
    fixture = TestBed.createComponent(MotorFloaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
