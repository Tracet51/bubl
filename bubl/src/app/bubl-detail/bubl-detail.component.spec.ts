import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BublDetailComponent } from './bubl-detail.component';

describe('BublDetailComponent', () => {
  let component: BublDetailComponent;
  let fixture: ComponentFixture<BublDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BublDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BublDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
