import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadosCreateComponent } from './associados-create.component';

describe('AssociadosCreateComponent', () => {
  let component: AssociadosCreateComponent;
  let fixture: ComponentFixture<AssociadosCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociadosCreateComponent]
    });
    fixture = TestBed.createComponent(AssociadosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
