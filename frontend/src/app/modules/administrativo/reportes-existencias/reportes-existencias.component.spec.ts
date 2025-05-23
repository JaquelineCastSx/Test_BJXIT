import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesExistenciasComponent } from './reportes-existencias.component';

describe('ReportesExistenciasComponent', () => {
  let component: ReportesExistenciasComponent;
  let fixture: ComponentFixture<ReportesExistenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportesExistenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesExistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
