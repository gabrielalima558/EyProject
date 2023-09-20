import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVagaComponent } from './cadastro-vaga.component';

describe('CadastroVagaComponent', () => {
  let component: CadastroVagaComponent;
  let fixture: ComponentFixture<CadastroVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroVagaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
