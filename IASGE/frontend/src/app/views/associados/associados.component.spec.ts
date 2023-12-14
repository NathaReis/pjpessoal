import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadosComponent } from './associados.component';

describe('AssociadosComponent', () => {
  let component: AssociadosComponent;
  let fixture: ComponentFixture<AssociadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociadosComponent]
    });
    fixture = TestBed.createComponent(AssociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
