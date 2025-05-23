import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAdminViewComponent } from './pedidos-admin-view.component';

describe('PedidosAdminViewComponent', () => {
  let component: PedidosAdminViewComponent;
  let fixture: ComponentFixture<PedidosAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidosAdminViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
