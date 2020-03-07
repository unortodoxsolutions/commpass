import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGuestPage } from './book-guest.page';

describe('BookGuestPage', () => {
  let component: BookGuestPage;
  let fixture: ComponentFixture<BookGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGuestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
