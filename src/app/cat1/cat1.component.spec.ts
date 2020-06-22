import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat1Component } from './cat1.component';

describe('Cat1Component', () => {
  let component: Cat1Component;
  let fixture: ComponentFixture<Cat1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cat1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
