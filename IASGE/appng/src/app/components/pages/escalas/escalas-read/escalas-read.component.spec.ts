import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalasReadComponent } from './escalas-read.component';

describe('EscalasReadComponent', () => {
  let component: EscalasReadComponent;
  let fixture: ComponentFixture<EscalasReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscalasReadComponent]
    });
    fixture = TestBed.createComponent(EscalasReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
