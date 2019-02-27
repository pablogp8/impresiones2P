import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisispreComponent } from './analisispre.component';

describe('AnalisispreComponent', () => {
  let component: AnalisispreComponent;
  let fixture: ComponentFixture<AnalisispreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisispreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisispreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
