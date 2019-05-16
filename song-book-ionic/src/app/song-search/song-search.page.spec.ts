import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongSearchPage } from './song-search.page';

describe('SongSearchPage', () => {
  let component: SongSearchPage;
  let fixture: ComponentFixture<SongSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
