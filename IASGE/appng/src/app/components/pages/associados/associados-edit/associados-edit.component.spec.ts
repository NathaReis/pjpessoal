import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadosEditComponent } from './associados-edit.component';

describe('AssociadosEditComponent', () => {
  let component: AssociadosEditComponent;
  let fixture: ComponentFixture<AssociadosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociadosEditComponent]
    });
    fixture = TestBed.createComponent(AssociadosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
