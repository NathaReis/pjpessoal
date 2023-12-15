import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosReadComponent } from './departamentos-read.component';

describe('DepartamentosReadComponent', () => {
  let component: DepartamentosReadComponent;
  let fixture: ComponentFixture<DepartamentosReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentosReadComponent]
    });
    fixture = TestBed.createComponent(DepartamentosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
