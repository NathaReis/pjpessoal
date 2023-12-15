import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosComponent } from './departamentos.component';

describe('DepartamentosComponent', () => {
  let component: DepartamentosComponent;
  let fixture: ComponentFixture<DepartamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentosComponent]
    });
    fixture = TestBed.createComponent(DepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
