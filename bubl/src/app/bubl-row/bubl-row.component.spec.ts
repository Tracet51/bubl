import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BublRowComponent } from './bubl-row.component';

describe('BublRowComponent', () => {
  let component: BublRowComponent;
  let fixture: ComponentFixture<BublRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BublRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BublRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
