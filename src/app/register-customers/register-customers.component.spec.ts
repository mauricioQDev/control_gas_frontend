import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCustomersComponent } from './register-customers.component';

describe('RegisterCustomersComponent', () => {
  let component: RegisterCustomersComponent;
  let fixture: ComponentFixture<RegisterCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
