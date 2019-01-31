import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BublFeedComponent } from './bubl-feed.component';

describe('BublFeedComponent', () => {
  let component: BublFeedComponent;
  let fixture: ComponentFixture<BublFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BublFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BublFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
