import { TestBed, waitForAsync } from '@angular/core/testing';
import { EventsAppComponent } from './app-events.component';

describe('EventsAppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventsAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EventsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-fundamentals'`, () => {
    const fixture = TestBed.createComponent(EventsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-fundamentals');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(EventsAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng-fundamentals!');
  });
});
