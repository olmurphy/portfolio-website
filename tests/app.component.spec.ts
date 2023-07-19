// Shallow Component Testing => https://angular.io/guide/testing-components-scenarios#nested-component-tests
// Two options:
//  - schemas: [NO_ERRORS_SCHEMA] (inside the TestBed)
//  - declare stub versions of components added into TestBed declarations

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';
import { Component } from '@angular/core';

@Component({selector: 'app-navigation', template: ''})
class NavigationComponent {}

@Component({selector: 'app-body', template: ''})
class BodyComponent {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, NavigationComponent, BodyComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as title 'project'`, () => {
    component = fixture.componentInstance;
    expect(component.title).toEqual('World');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello World');
  });
});
