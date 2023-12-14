import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadosReadComponent } from './associados-read.component';

describe('AssociadosReadComponent', () => {
  let component: AssociadosReadComponent;
  let fixture: ComponentFixture<AssociadosReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociadosReadComponent]
    });
    fixture = TestBed.createComponent(AssociadosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
