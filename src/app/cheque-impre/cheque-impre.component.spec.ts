import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeImpreComponent } from './cheque-impre.component';

describe('ChequeImpreComponent', () => {
  let component: ChequeImpreComponent;
  let fixture: ComponentFixture<ChequeImpreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeImpreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeImpreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
