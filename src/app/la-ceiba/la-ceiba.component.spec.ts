import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCeibaComponent } from './la-ceiba.component';

describe('LaCeibaComponent', () => {
  let component: LaCeibaComponent;
  let fixture: ComponentFixture<LaCeibaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaCeibaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaCeibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
