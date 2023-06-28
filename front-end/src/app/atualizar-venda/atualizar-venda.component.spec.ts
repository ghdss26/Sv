import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarVendaComponent } from './atualizar-venda.component';

describe('AtualizarVendaComponent', () => {
  let component: AtualizarVendaComponent;
  let fixture: ComponentFixture<AtualizarVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarVendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
