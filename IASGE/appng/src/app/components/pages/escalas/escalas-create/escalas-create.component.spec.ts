import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalasCreateComponent } from './escalas-create.component';

describe('EscalasCreateComponent', () => {
  let component: EscalasCreateComponent;
  let fixture: ComponentFixture<EscalasCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscalasCreateComponent]
    });
    fixture = TestBed.createComponent(EscalasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
