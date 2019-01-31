import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BublDetailPageComponent } from './bubl-detail-page.component';

describe('BublDetailPageComponent', () => {
  let component: BublDetailPageComponent;
  let fixture: ComponentFixture<BublDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BublDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BublDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
