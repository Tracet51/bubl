import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BublFeedPageComponent } from './bubl-feed-page.component';

describe('BublFeedPageComponent', () => {
  let component: BublFeedPageComponent;
  let fixture: ComponentFixture<BublFeedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BublFeedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BublFeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
