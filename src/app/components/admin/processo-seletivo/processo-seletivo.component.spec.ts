import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoSeletivoComponent } from './processo-seletivo.component';

describe('ProcessoSeletivoComponent', () => {
  let component: ProcessoSeletivoComponent;
  let fixture: ComponentFixture<ProcessoSeletivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoSeletivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessoSeletivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
