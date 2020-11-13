import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateSessionComponent } from './create-session.component';

describe('CreateSessionComponent', () => {
  let component: CreateSessionComponent;
  let fixture: ComponentFixture<CreateSessionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
