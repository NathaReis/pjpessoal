import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosEditComponent } from './departamentos-edit.component';

describe('DepartamentosEditComponent', () => {
  let component: DepartamentosEditComponent;
  let fixture: ComponentFixture<DepartamentosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentosEditComponent]
    });
    fixture = TestBed.createComponent(DepartamentosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
