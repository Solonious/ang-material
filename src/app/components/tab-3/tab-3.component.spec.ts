import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3Component } from './tab-3.component';

describe('Tab3Component', () => {
  let component: Tab3Component;
  let fixture: ComponentFixture<Tab3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
