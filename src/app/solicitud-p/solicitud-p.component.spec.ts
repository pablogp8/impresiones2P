import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudPComponent } from './solicitud-p.component';

describe('SolicitudPComponent', () => {
  let component: SolicitudPComponent;
  let fixture: ComponentFixture<SolicitudPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
