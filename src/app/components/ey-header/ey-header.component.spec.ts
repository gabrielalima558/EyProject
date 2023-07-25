import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyHeaderComponent } from './ey-header.component';

describe('EyHeaderComponent', () => {
  let component: EyHeaderComponent;
  let fixture: ComponentFixture<EyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
