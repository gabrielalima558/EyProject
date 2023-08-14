import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitJobPositionComponent } from './submit-job-position.component';

describe('SubmitJobPositionComponent', () => {
  let component: SubmitJobPositionComponent;
  let fixture: ComponentFixture<SubmitJobPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitJobPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitJobPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
