import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosEditComponent } from './eventos-edit.component';

describe('EventosEditComponent', () => {
  let component: EventosEditComponent;
  let fixture: ComponentFixture<EventosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosEditComponent]
    });
    fixture = TestBed.createComponent(EventosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
