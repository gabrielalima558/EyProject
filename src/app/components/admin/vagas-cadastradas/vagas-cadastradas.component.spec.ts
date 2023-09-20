import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasCadastradasComponent } from './vagas-cadastradas.component';

describe('VagasCadastradasComponent', () => {
  let component: VagasCadastradasComponent;
  let fixture: ComponentFixture<VagasCadastradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasCadastradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagasCadastradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
