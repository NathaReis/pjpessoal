import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosCreateComponent } from './departamentos-create.component';

describe('DepartamentosCreateComponent', () => {
  let component: DepartamentosCreateComponent;
  let fixture: ComponentFixture<DepartamentosCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentosCreateComponent]
    });
    fixture = TestBed.createComponent(DepartamentosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
