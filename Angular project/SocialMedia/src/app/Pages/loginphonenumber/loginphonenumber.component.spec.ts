import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginphonenumberComponent } from './loginphonenumber.component';

describe('LoginphonenumberComponent', () => {
  let component: LoginphonenumberComponent;
  let fixture: ComponentFixture<LoginphonenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginphonenumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginphonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
