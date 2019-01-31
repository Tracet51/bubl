import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBublPageComponent } from './create-bubl-page.component';

describe('CreateBublPageComponent', () => {
  let component: CreateBublPageComponent;
  let fixture: ComponentFixture<CreateBublPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBublPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBublPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
