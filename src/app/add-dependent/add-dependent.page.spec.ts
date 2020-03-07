import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDependentPage } from './add-dependent.page';

describe('AddDependentPage', () => {
  let component: AddDependentPage;
  let fixture: ComponentFixture<AddDependentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDependentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDependentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
