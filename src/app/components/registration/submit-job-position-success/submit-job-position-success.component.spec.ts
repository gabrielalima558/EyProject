import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitJobPositionSuccessComponent } from './submit-job-position-success.component';

describe('SubmitJobPositionSuccessComponent', () => {
  let component: SubmitJobPositionSuccessComponent;
  let fixture: ComponentFixture<SubmitJobPositionSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitJobPositionSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitJobPositionSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
