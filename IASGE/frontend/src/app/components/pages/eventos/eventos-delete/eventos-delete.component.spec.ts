import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosDeleteComponent } from './eventos-delete.component';

describe('EventosDeleteComponent', () => {
  let component: EventosDeleteComponent;
  let fixture: ComponentFixture<EventosDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosDeleteComponent]
    });
    fixture = TestBed.createComponent(EventosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
