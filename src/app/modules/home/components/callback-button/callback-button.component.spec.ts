import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackButtonComponent } from './callback-button.component';

describe('CallbackButtonComponent', () => {
  let component: CallbackButtonComponent;
  let fixture: ComponentFixture<CallbackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallbackButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
