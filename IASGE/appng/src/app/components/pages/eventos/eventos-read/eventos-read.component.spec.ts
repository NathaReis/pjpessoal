import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosReadComponent } from './eventos-read.component';

describe('EventosReadComponent', () => {
  let component: EventosReadComponent;
  let fixture: ComponentFixture<EventosReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosReadComponent]
    });
    fixture = TestBed.createComponent(EventosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
