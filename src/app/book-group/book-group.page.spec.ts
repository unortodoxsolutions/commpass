import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGroupPage } from './book-group.page';

describe('BookGroupPage', () => {
  let component: BookGroupPage;
  let fixture: ComponentFixture<BookGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
