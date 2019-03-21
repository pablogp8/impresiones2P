import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosMesComponent } from './descuentos-mes.component';

describe('DescuentosMesComponent', () => {
  let component: DescuentosMesComponent;
  let fixture: ComponentFixture<DescuentosMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescuentosMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentosMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
