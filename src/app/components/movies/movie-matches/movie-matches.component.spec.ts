import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMatchesComponent } from './movie-matches.component';

describe('MovieMatchesComponent', () => {
  let component: MovieMatchesComponent;
  let fixture: ComponentFixture<MovieMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
