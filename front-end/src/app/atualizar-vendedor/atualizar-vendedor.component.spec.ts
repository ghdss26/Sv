import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarVendedorComponent } from './atualizar-vendedor.component';

describe('AtualizarVendedorComponent', () => {
  let component: AtualizarVendedorComponent;
  let fixture: ComponentFixture<AtualizarVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarVendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
