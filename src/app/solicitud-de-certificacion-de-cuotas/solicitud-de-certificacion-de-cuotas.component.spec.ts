import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudDeCertificacionDeCuotasComponent } from './solicitud-de-certificacion-de-cuotas.component';

describe('SolicitudDeCertificacionDeCuotasComponent', () => {
  let component: SolicitudDeCertificacionDeCuotasComponent;
  let fixture: ComponentFixture<SolicitudDeCertificacionDeCuotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudDeCertificacionDeCuotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudDeCertificacionDeCuotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
