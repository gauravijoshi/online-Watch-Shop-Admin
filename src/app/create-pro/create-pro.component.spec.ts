import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProComponent } from './create-pro.component';

describe('CreateProComponent', () => {
  let component: CreateProComponent;
  let fixture: ComponentFixture<CreateProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
