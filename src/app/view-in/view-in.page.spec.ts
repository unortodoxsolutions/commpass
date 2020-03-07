import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInPage } from './view-in.page';

describe('ViewInPage', () => {
  let component: ViewInPage;
  let fixture: ComponentFixture<ViewInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
