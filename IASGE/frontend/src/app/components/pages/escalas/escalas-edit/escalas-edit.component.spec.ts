import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalasEditComponent } from './escalas-edit.component';

describe('EscalasEditComponent', () => {
  let component: EscalasEditComponent;
  let fixture: ComponentFixture<EscalasEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscalasEditComponent]
    });
    fixture = TestBed.createComponent(EscalasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
