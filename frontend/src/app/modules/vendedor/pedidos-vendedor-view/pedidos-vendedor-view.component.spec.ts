import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosVendedorViewComponent } from './pedidos-vendedor-view.component';

describe('PedidosVendedorViewComponent', () => {
  let component: PedidosVendedorViewComponent;
  let fixture: ComponentFixture<PedidosVendedorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidosVendedorViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosVendedorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
