import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSplashComponent } from './social-splash.component';

describe('SocialSplashComponent', () => {
  let component: SocialSplashComponent;
  let fixture: ComponentFixture<SocialSplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialSplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
