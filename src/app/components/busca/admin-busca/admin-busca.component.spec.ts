import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuscaComponent } from './admin-busca.component';

describe('AdminBuscaComponent', () => {
  let component: AdminBuscaComponent;
  let fixture: ComponentFixture<AdminBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
