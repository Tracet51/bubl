import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBublFormComponent } from './create-bubl-form.component';

describe('CreateBublFormComponent', () => {
  let component: CreateBublFormComponent;
  let fixture: ComponentFixture<CreateBublFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBublFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBublFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
