import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVendedorComponent } from './listar-vendedor.component';

describe('ListarVendedorComponent', () => {
  let component: ListarVendedorComponent;
  let fixture: ComponentFixture<ListarVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
