import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarVendedorComponent } from './criar-vendedor.component';

describe('CriarVendedorComponent', () => {
  let component: CriarVendedorComponent;
  let fixture: ComponentFixture<CriarVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarVendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
