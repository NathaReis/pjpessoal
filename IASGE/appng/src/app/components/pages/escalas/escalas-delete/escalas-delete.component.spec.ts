import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalasDeleteComponent } from './escalas-delete.component';

describe('EscalasDeleteComponent', () => {
  let component: EscalasDeleteComponent;
  let fixture: ComponentFixture<EscalasDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscalasDeleteComponent]
    });
    fixture = TestBed.createComponent(EscalasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
