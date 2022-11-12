import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KovetokComponent } from './kovetok.component';

describe('KovetokComponent', () => {
  let component: KovetokComponent;
  let fixture: ComponentFixture<KovetokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KovetokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KovetokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
