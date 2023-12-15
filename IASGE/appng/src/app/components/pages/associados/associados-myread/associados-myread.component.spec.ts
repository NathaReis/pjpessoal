import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadosMyreadComponent } from './associados-myread.component';

describe('AssociadosMyreadComponent', () => {
  let component: AssociadosMyreadComponent;
  let fixture: ComponentFixture<AssociadosMyreadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociadosMyreadComponent]
    });
    fixture = TestBed.createComponent(AssociadosMyreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
