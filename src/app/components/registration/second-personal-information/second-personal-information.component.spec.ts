import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPersonalInformationComponent } from './second-personal-information.component';

describe('SecondPersonalInformationComponent', () => {
  let component: SecondPersonalInformationComponent;
  let fixture: ComponentFixture<SecondPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPersonalInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
