import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCheComponent } from './control-che.component';

describe('ControlCheComponent', () => {
  let component: ControlCheComponent;
  let fixture: ComponentFixture<ControlCheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlCheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlCheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
