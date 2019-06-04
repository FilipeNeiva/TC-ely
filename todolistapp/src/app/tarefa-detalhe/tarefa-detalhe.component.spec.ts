import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaDetalheComponent } from './tarefa-detalhe.component';

describe('TarefaDetalheComponent', () => {
  let component: TarefaDetalheComponent;
  let fixture: ComponentFixture<TarefaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
