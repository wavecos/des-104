import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongItemComponent } from './song-item.component';

describe('SongItemComponent', () => {
  let component: SongItemComponent;
  let fixture: ComponentFixture<SongItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
