import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitJobPositionChallengeComponent } from './submit-job-position-challenge.component';

describe('SubmitJobPositionChallengeComponent', () => {
  let component: SubmitJobPositionChallengeComponent;
  let fixture: ComponentFixture<SubmitJobPositionChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitJobPositionChallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitJobPositionChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
