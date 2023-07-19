import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from '../src/app/components/body/body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyComponent]
    });
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });
});
