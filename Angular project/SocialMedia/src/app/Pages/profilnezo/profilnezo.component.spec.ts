import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilnezoComponent } from './profilnezo.component';

describe('ProfilnezoComponent', () => {
  let component: ProfilnezoComponent;
  let fixture: ComponentFixture<ProfilnezoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilnezoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilnezoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
