/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PolicieComponent } from './policie.component';

describe('PolicieComponent', () => {
  let component: PolicieComponent;
  let fixture: ComponentFixture<PolicieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
